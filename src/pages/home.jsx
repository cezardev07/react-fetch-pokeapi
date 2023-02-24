import React from 'react'
import { useState } from 'react'
import './home.css'

function Home() {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    let [count,setCount] = useState(1)

    const [nome,setNome] = useState()
    const [imgPoke,setImgPoke] = useState()
    const [gifPoke,setGifPoke] = useState()
    const [xp,setXp] = useState()
    const [id,setId] = useState()

    const getApi = async (pokemon) => {
        const res = await fetch(url + pokemon)
        const data = await res.json()
 
        return data
    }
    const userApi = async (pokemon) => {
        const data = await getApi(pokemon)
            
        setNome(data.name)
        setId(data.id)
        setXp(data.base_experience)
        setImgPoke(data.sprites.other.dream_world.front_default)
        setGifPoke(data.sprites.versions["generation-v"]["black-white"].animated.front_default)
    }

    function next(){
        setCount(count + 1)
        if(count >= 400){
            setCount(400)
        }
        userApi(count)
    }
    function prev(){
        setCount(count - 1)
        if(count <= 1){
            setCount(1)
        }
        userApi(count)
    }
    userApi(count)
    return(
        <main>
            <button onClick={prev}>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </button>
            <div className="card">
                <div className="header">
                    <p className='id'><strong>ID: </strong> {id}</p>
                    <p className='xp'><strong>XP: </strong>{xp}</p>
                </div>
                <div className="center">
                    <div className="bg"></div>
                    <img src={imgPoke}/>
                </div>
                <div className="descricao">
                    <h2>{nome}</h2>
                    <img src={gifPoke} alt="" />
                </div>
            </div>
            <button onClick={next}>
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
        </main>
    )

}

export default Home