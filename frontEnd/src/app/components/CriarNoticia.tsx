'use client'
import React, {useState, useEffect, useRef} from 'react'
import { useRouter} from 'next/navigation'
import {ModalDeletarNoticia} from "./ModalDeletarNoticia";
import {InputCriarNoticia} from "./InputCriarNoticia";
import "../style.css" ;
import { NoticiaPrincipalVerMais} from "./types/types";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiWindowClose } from "react-icons/bi";
import axios from '../../../node_modules/axios/index';


export const CriarNoticia = () => {

  const [noticias, setNoticias] = useState<NoticiaPrincipalVerMais[]>([]);
  const [isOpenModalDeletarNoticia, setIsOpenModalDeletarNoticia] = useState<Boolean>(false);
   const [idNumber, setIdNumber] = useState('');
   const [loading, setLoading] = useState(true);

  const excluirTarefas = async (id: string) => {
    setIdNumber(id);
  const res =  axios.delete(`http://localhost:5000/deletar/${id}`);

  const data = (await res).data.erro;

  if (data != null) {
    alert('Tarefa excluida com sucesso');
  }


  }
  const router = useRouter();


        useEffect(() => {

            const Api = async () => {
                const res = await fetch(`http://localhost:5000/admin/criarNoticia`, {
                    method: 'GET',
                })
  
          
                const response = await res.json();

                if (response.success === false) {
                router.push(`/LoginNoticia/`);
                  
                }else{
                  setNoticias(response.post)
                  setLoading(false);

                  return 

                }
                
            }
            Api();

        }, [ excluirTarefas]);

        




  return (
    <main
    className='flex justify-center items-center '
    >
{
      loading ? (
        <p>Carregando...</p>
      )

      :

      (
      <section
      className='flex flex-col p-3 bg-white w-80  gap-3 m-7 md:m-5 rounded-xl'

      >
      <InputCriarNoticia></InputCriarNoticia>

      <button
      className='bg-sky-500 hover:bg-sky-700 text-white font-bold p-3 rounded-lg'
      onClick={() => setIsOpenModalDeletarNoticia(true)}
      >Deletar notíca
      </button>

      </section>

      )
}

{/* () => router.push(`/${val.slug}`) */}

{
      isOpenModalDeletarNoticia &&

<section 
    // onClick={() => setIsOpenModalDeletarNoticia(false)}
    className={`fixed z-10 inset-0 flex justify-center items-center transition-colors visible bg-black/20`}
    >
        <div
        className='bg-white text-black rounded-xl shadow p-6 transition-all
         relative z-50 flex-col m-5 overflow-auto h-96 ' 
        
        >

          
<div
          className='  justify-end items-end flex '
          >
           <button
           onClick={() => setIsOpenModalDeletarNoticia(false)}
           className=' bg-red-500 p-2 text-white rounded-full hover:bg-red-600  text-2xl' 
           >
            <BiWindowClose></BiWindowClose>
          </button>

          </div>
          {/*  */}
         

          <h2 className='mb-4 text-center text-2xl font-bold border-b border-[#ccc] pb-3'>Deletar Tarefas</h2>
          
     {
         noticias.map((val: NoticiaPrincipalVerMais) => {
            return (
                <div key={val.slug}
                className='flex flex-row mb-4 border-b justify-between items-start border-black border-dashed pb-3 '
                >

                  <span className='flex flex-row  '>
                <h3>{val.title}</h3>

                  </span>

                <button className=' text-3xl text-red-500 hover:text-red-600'
                onClick={() => excluirTarefas(val._id)}
                ><AiFillCloseCircle/></button>
                </div>
            );
          })}


              <div
          className='  justify-end items-end flex '
          >
           <button
           onClick={() => setIsOpenModalDeletarNoticia(false)}
           className=' bg-red-500 p-2 text-white rounded-full hover:bg-red-600 ' 
           >
            Fechar modal
          </button>

          </div>
        
        </div>
    </section>
      }
    </main>
  )
}
