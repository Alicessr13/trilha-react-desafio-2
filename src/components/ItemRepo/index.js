import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {


  return (
    <ItemContainer>
        <h3>{repo.name}</h3>

        <p>{repo.full_name}</p>

        <a href={repo.html_url} target='_black'>Ver repositorio</a>
        <br/>
        <a href="./" className='remover' onClick={() => handleRemoveRepo(repo.id)} >Remover</a>

        <hr></hr>
    </ItemContainer>
  )
}

export default ItemRepo;