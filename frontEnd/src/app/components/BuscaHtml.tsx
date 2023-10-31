import React from 'react'
import { PropsBuscaHTML } from "./types/types";

export const BuscaHtml = (buscaArray : PropsBuscaHTML) => {
  return (
    <div>

      {
        buscaArray.map((val) => {
          return(
        <section
        key={val.slug}
        >
          <h1>{buscaArray.title}</h1>
        </section>

          )
        }) 
      }
    </div>
  )
}
