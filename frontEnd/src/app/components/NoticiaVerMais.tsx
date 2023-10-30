'use client'
import React,{useEffect, useState} from 'react'
import { usePathname } from 'next/navigation'
import "../style.css" ;
import { NoticiaPrincipalVerMais } from "./types/types";


export const NoticiaVerMais = () => {
  const [noticiaPrincipal, setNoticiaPrincipal] = useState<NoticiaPrincipalVerMais>()

  const fetchFunction = async () => {
    
    const res = await fetch(`http://localhost:5000${pathname}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    
    if (!res.ok) {
              // This will activate the closest `error.js` Error Boundary
              throw new Error('Failed to fetch data')
            }
            
            const response = await res.json();
            setNoticiaPrincipal(response.resposta);
          }
          
          
          useEffect(() => {
            fetchFunction();
          })

          const pathname = usePathname();

  return (
    <main >
      <section className='bg-white text-black m-3 md:m-10 md:ml-28 rounded-xl flex fexl-col justify-center items-center md:w-[700px]'>
      {
          noticiaPrincipal  &&
          <section
          className=' space-y-3 p-3'
          >
            <h2 className='font-bold text-3xl'>{noticiaPrincipal.title}</h2>
            <p className=' tracking-[3.2px] text-[#7B8591] font-bold'>{noticiaPrincipal.autor}</p>
            <img src={noticiaPrincipal.imagem} alt={noticiaPrincipal.title}
            className='md:w-[600px] '
             />

             <div dangerouslySetInnerHTML={{ __html: noticiaPrincipal.conteudo || ''}}
                      className=' text-[#7B8591] ' />  

          
          </section>
      }
      </section>
    </main>
  )
}
