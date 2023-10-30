import React from 'react'
import { Teste, OutrasNoticiasType } from "./types/types";
import Link from 'next/link'


export const OutrasNoticiasEstado = ({ OutrasNoticias } : Teste) => {
  return (
    <section className='md:flex md:flex-row  md:flex-wrap gap-5 justify-center'>


             {
            OutrasNoticias.map((noticia : OutrasNoticiasType) => {
              return(
                <div
                key={noticia.slug} 
                className='mb-5 '               
                >
                  

                <img src={noticia.imagem} alt={noticia.title} 
                className=' md:w-[400px]' /> 
                
                <div
                className='bg-white p-5  flex justify-start items-start flex-col space-y-4 md:w-[400px]
                '
                >

                  <p className='text-[#33439B] tracking-[3.2px]'
                  >
                    {noticia.categoria}
                  </p>

                  <h3 className=' text-2xl'>
                   <b>{noticia.title}</b>
                  </h3>

                  <div dangerouslySetInnerHTML={{ __html: noticia.conteudo || ''  }} /> 


                  <Link
                  href={`${noticia.slug}`}
                  className=' text-[#0AACDC] font-bold hover:text-red-500 hover:underline ml-5'
                  >
                   Ver mais    
                </Link>
                </div>

                </div>
              )
            })
        }
    </section>
  )
}
