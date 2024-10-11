import axios from "axios"
import { useEffect, useState } from "react"
import './App.css'


function App() {

  const [ listarPersonagem, setListarPersonagem] = useState()
  const [pesquisaPersonagem, setPesquisapersonagem] = useState("")


  async function  carregarPgina(){
    const {data} = await axios.get("https://rickandmortyapi.com/api/character")
    setListarPersonagem(data.results)
  }

  useEffect(()=>{
   
    carregarPgina()
  },[])

  async function filtrar(){
    const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${pesquisaPersonagem}`)
    setListarPersonagem(data.results)
  }

  useEffect(()=>{
    filtrar()
  },[pesquisaPersonagem])


  return (
    <>
    <input type="text" id="pesquisa" name="pesquisa"  placeholder="pesquisar" className="pequisa" onChange={(e)=> setPesquisapersonagem(e.target.value)}/>




      <h1>Projeto rick and morty</h1>
      <section className="container">
        {listarPersonagem &&
          listarPersonagem.map((element) => (
            <div className="card" key={element.id}>
              <img
                className="foto"
                src={element.image}
                alt="Foto do personagem"
              />
              <h2>Nome: {element.name}</h2>
              <p>Espécie: {element.species}</p>
              <p>Status: {element.status}</p>
              <p>Localização: {element.location.name}</p>
            </div>
          ))}

      </section>
    </>
  )
}

export default App
