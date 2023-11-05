'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
 import { Props } from "./types/types";

 export const NoticiaPrincipal = ( { noticiaPrincipal }: Props) => {
   return (
     <div>
        {  noticiaPrincipal &&
    <section
    className=' p-4 flex justify-center items-center text-center flex-wrap'
    >

      <img src={noticiaPrincipal.imagem} alt={noticiaPrincipal.title} 
      className='filter brightness-50 rounded-xl md:w-[700px]' />

      <Link href={`/${noticiaPrincipal.slug}`}>
      <h2 className='relative  text-white  bottom-14 right-14 
                       md:top-[150px] md:right-[600px] md:text-3xl
       '>{noticiaPrincipal.title}
       </h2>
      </Link>
      {/* <div dangerouslySetInnerHTML={{ __html: noticiaPrincipal.conteudo }} /> */}
    </section>
  
}
     </div>
   )
 }
 