// eslint-disable-next-line no-use-before-define
import React, { useState, FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories, Error, RemoveButton } from './styles'
interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    )
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    )
  }, [repositories])

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()
    if (!newRepo) {
      setInputError('Digite o nome do repositório no formato: user/repositório')
      return
    }
    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`)
      const repository = response.data
      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    } catch (error) {
      setInputError('Erro na busca por esse repositório')
    }
  }

  function handleRemoveRepository(full_name: string): void {
    const repository = repositories.find(
      repository => repository.full_name === full_name,
    )
    const newRepositories = repositories.filter(rep => rep !== repository)
    setRepositories(newRepositories)
  }

  return (
    <>
      <img src={logoImg} alt='GithubExplorer' />
      <Title>Explore repositórios no GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={({ target: { value } }) => setNewRepo(value)}
          placeholder='Digite o nome do repositório : usuario/repositório'
        />
        <button type='submit'>Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <>
            <Link
              key={repository.full_name}
              to={`/repositories/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />

              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
            <RemoveButton
              onClick={() => handleRemoveRepository(repository.full_name)}
            >
              Remover
            </RemoveButton>
          </>
        ))}
      </Repositories>
    </>
  )
}
export default Dashboard
