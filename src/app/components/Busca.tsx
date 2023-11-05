'use client'
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import axios from 'axios';
import "./style/busca.css" ;
import {NoticiaPrincipalVerMais  } from "./types/types";
import Link from 'next/link'

export const Busca = () => {

    const [buscaArray, setBuscaArray] = useState([]);

     const [contagem, setContagem] = useState<number>(0);

    const pathname = usePathname();

    const searchInit = pathname.slice(15);

    // 8 - busca 15 - query.busca


    useEffect(() => {
        const Api = async () => {
            // const res = await fetch(`http://localhost:5000/${search}`);
            // const data = await res.json();
            // console.log(data);

            axios.get(`https://portal-de-noticia.onrender.com?busca=${searchInit}`).then((response : any) => {
              setBuscaArray(response.data.resposta)
              setContagem(response.data.contagem);
            })
        }
        Api();
      
    }, [])

  return (
    <section  className='text-black'>

      <h2
      className=' text-center mt-3 text-[20px] md:text-[30px] font-bold border-b border-[#ccc] pb-3'
      >

      A sua busca teve {buscaArray.length < 0? <p>carregando notícia</p> : contagem} resultados
      </h2>

<section className=' md:flex md:flex-row md:flex-wrap md:ml-28'>
     {
    
       
        buscaArray.map((val : NoticiaPrincipalVerMais) => {
          return(
        <div
        key={val._id}
        className='m-3 flex justify-start items-start flex-col bg-white break-words p-3 rounded-xl gap-4
        md:w-96 '
        >

          <h1 className=' text-[20px] md:text-[25px] font-bold'>{val.title}</h1>
          <img src={val.imagem} alt={val.title} />

          <div dangerouslySetInnerHTML={{ __html: (val.conteudo || '').substring(0, 100) + '...' }}
                      className=' text-[#7B8591]' /> 

           <Link 
           className=' bg-sky-500 p-3 text-white border-0 outline-none  rounded-full  shadow-md'
           href={`/${val.slug}`}

           >
            Ver mais
          </Link>           

        </div>

          )
        }) 
      
            
    
   
    }

</section>
    </section>
  )
}
