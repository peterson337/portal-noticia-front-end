'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { api } from "../api/Api";
import { noticiaPrincipalType } from "./types/types";


import { NoticiaPrincipal } from "./NoticiaPrincipal";
import { OutrasNoticiasEstado } from "./OutrasNoticiasEstado";
import { MaisLidasEstado } from "./MaisLidasEstado";

export const HomePage = () => {
  const [noticiaPrincipal, setNoticiaPrincipal] = useState<noticiaPrincipalType | undefined>();
  const [OutrasNoticias, setOutrasNoticias] = useState([]);
  const [ultimasLidas, setUltimasLidas] = useState([]);
  


  useEffect(() => {  
    api.get('https://portal-de-noticia.onrender.com/').then((res : any) => {
        setNoticiaPrincipal(res.data.posts[0]);
        setOutrasNoticias(res.data.posts);
        
      })
      
      // fetch('http://localhost:5000/')
      // .then(res => res.json())
      // .then(data => {
        //   setNoticiaPrincipal(data[0]);
        //   console.log(noticiaPrincipal);
        // })
      }, [noticiaPrincipal])


  return (
    <main>
                  <NoticiaPrincipal noticiaPrincipal={noticiaPrincipal || {} as noticiaPrincipalType} />

        <span className='flex flex-col '>

        <h2 className='md:text-3xl text-2xl text-center bg-[#EAEAEA] pt-4 '>Últimas publicações</h2>

      <section
      className=' md:p-28  p-4 bg-[#EAEAEA] flex justify-center items-center text-center md:flex-nowrap flex-wrap 
      md:flex-row'
      >


            <div className='flex flex-wrap gap-5 justify-center'>
        <OutrasNoticiasEstado
         OutrasNoticias={OutrasNoticias}/>


            </div>
         
         <MaisLidasEstado 
         OutrasNoticias={OutrasNoticias}
         />
      </section>

        </span>
    </main>
  )
}
