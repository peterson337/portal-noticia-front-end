 'use client'
 import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Teste, OutrasNoticiasType } from "./types/types";

 
 export const MaisLidasVerMais = () => {

    const [api, setApi] = useState([]);

    const fetchFunction = async () => {
        const  res = await fetch('http://localhost:5000');
        const data = await res.json();
        setApi(data.posts);
    }

    useEffect(() => {
        fetchFunction();
    }, [])


   return (
     <section>
         <div
         className=' md:mt-10 m-4'
         >

<div className='bg-[#3F51B5] text-white p-5  rounded-t-xl text-center '>
                              <h2 className='text-2xl'>
                              <b>AS MAIS LIDAS</b>
                              </h2>

                            </div>
      {
            api.map((noticia : OutrasNoticiasType) => {
              return(

                <section key={noticia.slug}
                >

                  <div
                className='bg-white p-4 md:w-[500px] flex flex-col flex-wrap '

                  >

                  <span className='flex flex-row gap-5 md:gap-9'>

                  <img src={noticia.imagem} alt={noticia.title}
                  className='md:w-[50%] w-28 rounded-xl h-28 h-40'
                   />

                    <div 
                    className='flex flex-col gap-2 justify-start items-start'
                    >
                  <p className='text-[#33439B] tracking-[3.2px] ml-4'>
                  {noticia.categoria}
                  </p> 

                <div dangerouslySetInnerHTML={{ __html: (noticia.conteudo || '').substring(0, 100) + '...' }}
                      className='md:w-60 w-28  ' /> 

                    <Link
                  href={`/${noticia.slug}`}
                    className=' text-[#0AACDC] font-bold hover:text-red-500 hover:underline ml-5'
                  >
                    Ver mais
                  </Link>
                 
                      
                    </div>



                  </span>
                  </div>




                </section>
              )
            })
          }
      </div>

     </section>
   )
 }
 