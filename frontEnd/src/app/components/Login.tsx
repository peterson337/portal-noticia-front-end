"use client"
import React, {useState, useEffect} from 'react'
import "../style.css" ;
import { useRouter } from 'next/navigation'

export const Login = () => {

  const router = useRouter();
        
  const [formData, setFormData] = useState({
    login: 'login',
    password: 'login'
  });
  const fetchFunction = async () => {
    
try{
  const res = await fetch(`http://localhost:5000/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  
          
  const response = await res.json();

  if(response.success  === true){
    router.push(`/LoginNoticia/CriarNoticia/`);

      }else{
        alert('Senha ou login incorretos')
      }

} catch (error) {
  console.log(error);
}
          }


        const handlerFormLogin = (e : any, handlerformData: string) => {
          setFormData({ 
                           ...formData,
                           [handlerformData]: e.target.value,
                           })
        }

  return (
    <main  className='md:flex  justify-center items-center'>
        <section className='bg-white m-4 flex flex-col p-4 rounded-xl text-center md:w-80'>
            <h2 className='text-2xl border-b pb-2'>Logar</h2>
            <div  
            className='bg-white m-4 flex flex-col p-4 justify-center items-center gap-4  border-b pb-2
                        '>
                <input type="text" 
                className=' border border-[#ccc] p-2 rounded-full pl-3 outline-none'
                placeholder='Login...'
                required
                onChange={(e) => {handlerFormLogin(e,'login')}}
                value={formData.login}
                />
                <input type={"password"} 
                className=' border border-[#ccc] p-2 rounded-full pl-3 outline-none'
                placeholder='Senha...'
                required
                onChange={(e) => {handlerFormLogin(e,'password')}}
                value={formData.password}
                />
                <button className=' bg-[#0AACDC] text-white p-2 w-40 rounded-full hover:bg-red-600'
                onClick={() => fetchFunction()}
                > Logar</button>
            </div>
        </section>
    </main>
  )
}
