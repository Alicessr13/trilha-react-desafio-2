import React, { useState } from 'react';
import gitLogo from '../assets/github.png'
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');

  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id == data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
        }

      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Repositório não encontrado');
      } else {
        alert('Ocorreu um erro ao buscar o repositório');
      }
    }

  }

  const handleRemoveRepo = (id) => {
    const filteredRepos = repos.filter(repo => repo.id !== id);
    setRepos(filteredRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo do github' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}></Button>
      {repos.map(repo => <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />)}
    </Container>
  );
}

export default App;
