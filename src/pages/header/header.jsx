import React from 'react'

function Header() {
    return(
        <header>
            <div className="logo">
                <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
                    <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo"/>
                </a>
            </div>
            <div className="documentation">
                <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
                    doc api
                </a>
            </div>
        </header>
    )
}
export default Header