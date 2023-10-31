const express = require('express');
const path = require('path');
const Post = require('./post.js');
const app = express();
const fs = require('fs');
const cors = require('cors')
const key = require('./env.js');

const uploadImage = require('./uploadmage')

var session = require('express-session')

var mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
mongoose.connect(`${key}`,{useNewUrlParser: true, UseUnifiedTopology: true}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err.message);
})


// app.use((req,res,next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Origin", "GET, POST, PUT, DELETE,");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })
app.use(cors());

  
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}))

app.use(express.json());


app.get('/', async (req, res) => {

             const data  = req.query.busca;


             if(data){

              // Post.findOneAndUpdate({ title: data },
              //   { new: true }).then((resposta) => {     
              //       res.json({ resposta: resposta})
        
                    
        
              //   })   

            const posts = await Post.find({title: { $regex: data, $options: 'i' }}).then((resposta) => {
              
              res.json({ resposta: resposta, contagem: resposta.length})
            });
            


             }else{
               try {
                       let posts = await Post.find({}).sort({ 'views': -1 });
                       res.json({ posts: posts})
           
               } catch (err) {
                   console.error(err);
                   res.status(500).send('Erro interno do servidor');
               }

             }

    });



      



app.get('/:slug', (req, res) => {
    //console.send(req.params.slug);
    

    Post.findOneAndUpdate({ slug: req.params.slug }, { $inc: { views: 1 } },
        { new: true }).then((resposta) => {     
            res.json({ resposta: resposta})

            

        })   
        
      

      
    })

  

var usuarios = [
    {
        login: 'login',
        senha: 'Login'
    }
]

var success = false;

app.post('/login', (req, res) => {
    const { login, password } = req.body;

    const responseObj = {
        login: login,
        password: password,
    };
    
    const user = usuarios.find(user => user.login == login);

    
   if (user) {

       
       req.session.login = "login";

       success = true;

       res.send({ success: true, message: 'Login bem-sucedido' });
   } else {
       res.send({ success: false, message: 'Credenciais inválidas' });
   }

});
const multer  = require('multer')


app.get('/admin/criarNoticia', (req, res) => {

    //  if (success === false) {
    //      res.send(success);
    //  }else{


         Post.find({}).sort({ 'views': -1 }).exec().then((post) => {        
            res.json({ post: post, success: success });

        
         }).catch((err) => {
             console.error(err);
         });
    //  }
})


    
    
    
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './public/img');
        },
        filename: function (req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
      });
      
      const upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
          // Lógica para filtrar os tipos de arquivo permitidos, se necessário.
          cb(null, true);
        }
      });


app.post('/admin/cadastro', upload.single('file'), (req, res) => {

      const {nameNoticia, slug, autor, categoria, file, textArea} = req.body
      
      const cadastrarNoticia = 
       {
        nameNoticia: nameNoticia ,
        slug: slug,
        autor: autor,
        categoria:  categoria,
        file: file, 
        textArea: textArea,
        views: 0,
        id: Date.now(),
        } 

    
        if(cadastrarNoticia){
        res.json({response: 'Requisição feita com sucesso', sucesso: true})

        }else{
            res.json({response: 'Requisição Não foi realizada', sucesso: false})
        }

            
         Post.create({
        title: cadastrarNoticia.nameNoticia,
        imagem: cadastrarNoticia.file,
        categoria: cadastrarNoticia.categoria,
        conteudo: cadastrarNoticia.textArea,
        slug: cadastrarNoticia.slug,
        autor: cadastrarNoticia.autor,
        views: 0,
      }).then((documentoCriado) => {
        console.log('Documento criado com sucesso:', documentoCriado);
      }).catch((erro) => {
        console.error('Erro ao criar o documento:', erro);
      });
  
});



app.delete('/deletar/:id', (req, res) => {
  const { id } = req.params;

     Post.deleteOne({_id: id}).then(() => {
      if (id) {
        res.json({
          erro: false
        })
        
      }else{
        res.json({
          erro: true
        })
        return res.status(400);

      }
                
     });

  
});


app.listen(5000, () => {
    console.log('Server started on port 5000');
});