import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo() {
  return (
    <ItemContainer>
        <h3> Alice</h3>

        <p>alice</p>

        <a href='./'>Ver repositorio</a>
        <br/>
        <a href="./" className='remover'>Remover</a>

        <hr></hr>
    </ItemContainer>
  )
}

export default ItemRepo;