'use client'
import React,{useState, useEffect} from 'react'
import { api } from "../api/Api";

export const InputCriarNoticia = () => {

  const [formData, setformData] = useState(

    {
      nameNoticia: '',
      slug: '',
      autor: '',
      categoria: '',
      file: '',
      textArea: '',
    }
  );


                      const informationInput = (e: any, formDataInput: String) => {
                       
                          setformData({
                            ...formData,
                            [formDataInput]: e.target.value,
                          });
                        
                      }
  
  
              const api = async () => {
  
                 const res = await fetch('http://localhost:5000/admin/cadastro', {
                   method: 'POST',
                   headers: {
                    'Content-Type': 'application/json'

                   },
                    body: JSON.stringify(formData)
                  });
                  
                  const data = await res.json();
                  
                  if (data.sucesso) {
                    alert('Criação criada com sucesso');
                    
                    setformData({
                      nameNoticia: '',
                      slug: '',
                      autor: '',
                      categoria: '',
                      file: '',
                      textArea: '',
                    })
                    
                 }else{
                  alert('Criação não foi criada');

                 }

              }

  return (
    <main>
        <section>
          <div  
           className='flex flex-col gap-5 mb-3'>
            <h2 className=' text-center font-bold text-2xl border-b border-[#ccc] pb-3'>Criar notícia</h2>
          
          <input
            className=' border border-[#ccc] w-[100%] h-10 pl-3 rounded-full outline-none'

            type="text"
              placeholder="Tiulo da noticia"
              onChange={(e) => {informationInput(e, 'nameNoticia')}}
              value={formData.nameNoticia}
              required
              />
        
        <input
        className=' border border-[#ccc] w-[100%] h-10 pl-3 rounded-full outline-none'
          type="text"
            placeholder="slug"
              onChange={(e) => {informationInput(e, 'slug')}}
              value={formData.slug}
              required
            />
        
        <input
        className=' border border-[#ccc] w-[100%] h-10 pl-3 rounded-full outline-none'
          type="text"
            placeholder="Nome dou autor da notícia"
              onChange={(e) => {informationInput(e, 'autor')}}
            value={formData.autor}
            required
            />
        
        <input
          className=' border border-[#ccc] w-[100%] h-10 pl-3 rounded-full outline-none'
          type="text"
            placeholder="Escreva a categoria da notícia"
              onChange={(e) => {informationInput(e, 'categoria')}}
            value={formData.categoria}
            required

            />

        
         <input
         type="text"
          placeholder='Escerva uma url'
          onChange={(e) => {informationInput(e, 'file')}}
          value={formData.file}
          className=' border border-[#ccc] w-[100%] h-10 pl-3 rounded-full outline-none'
          required

          /> 
        
        <textarea  
         placeholder="Noticia..."
          onChange={(e) => {informationInput(e, 'textArea')}}
          value={formData.textArea}
          className=' border border-[#ccc] w-[100%] h-28 pl-3 rounded-xl outline-none resize-none'
          required

        />  
        <button
           onClick={api}
        className=' w-[100%] h-10  rounded-full outline-none bg-green-500 hover:bg-green-700 text-white font-bold '

        >Cadastrar noticia</button>
          </div>
        </section>
    </main>
  )
}
