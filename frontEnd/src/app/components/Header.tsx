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
              router.push(`Routers/[id]?busca=${searchInput}`);
              setSearchInput('');
              
             }

  return (
    <header  
    className='bg-[#0AACDC] text-white p-4 flex justify-between items-center text-center'
    >
      <button
      onClick={() => teste()}
      >
        <h1
        >

        Nerd news
        </h1>
          </button>


          <Link
          href='/LoginNoticia'
          > Criar notícia
          </Link>
          

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
