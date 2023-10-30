import React, {useEffect, useState} from 'react'
import { MaisLidasVerMais } from "../components/MaisLidasVerMais";
import { NoticiaVerMais } from "../components/NoticiaVerMais";

export default function page() {
  
  return (
    <div
    className='md:flex md:flex-row'
    >
      <NoticiaVerMais/>
      <MaisLidasVerMais/>  
    </div>
  )
}
