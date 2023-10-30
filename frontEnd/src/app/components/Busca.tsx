'use client'
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
export const Busca = () => {

    const [buscaArray, setBuscaArray] = useState();

    const pathname = usePathname();

    const search = pathname.slice(12);
    // 8 - busca 14 - query.busca

    console.log(pathname);
    useEffect(() => {
        const Api = async () => {
            const res = await fetch(`http://localhost:5000/${search}`);
            const data = await res.json();
            console.log(data);
        }
        Api();
      
    }, [])

  return (
    <div>Busca</div>
  )
}
