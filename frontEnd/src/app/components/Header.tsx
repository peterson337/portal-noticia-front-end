'use client'
import React, {useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {


    const [searchInput, setSearchInput] = useState<string>('');

    const router = useRouter();
             const  teste =   () => {
              window.location.href = '/';
             }

             const search = () => {
              //setSearchInput('busca=' + searchInput);
              router.push(`/Routers/busca=${searchInput}`);
              setSearchInput('');
              
             }

  return (
    <header  
    className='bg-[#0AACDC] text-white p-4 flex justify-between items-center '
    >

      <div className='flex flex-col md:flex-row gap-2 md:gap-7'>
      <button
      onClick={() => teste()}
      >
     
        <span className=' md:text-2xl text-[20px]'>

        Nerd 

        <b>
        news
        </b>
        </span>
          </button>

          <Link
          href='/LoginNoticia'
          className=' md:text-2xl text-[20px]'
          > Criar notícia
          </Link>
          

      </div>
      

        <input type="text"
         name=""
        className='bg-[#008BB4] rounded-xl text-white outline-none placeholder:text-white w-40  h-11 pl-12'
        placeholder='Search'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        />

        <button className='absolute right-36 text-2xl'
        onClick={search}
        >

        <AiOutlineSearch>

        </AiOutlineSearch>
        </button>
    </header>
  )
}
