import React, { useState } from 'react';
import gitLogo from '../assets/github.png'
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo do github'/>
      <Input/>
      <Button></Button>
      <ItemRepo></ItemRepo>
    </Container>
  );
}

export default App;
