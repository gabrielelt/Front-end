import React from 'react';
import './style.css';

function Cabecalho(){
    return (
        <>
            <div id = 'cabecalho' class = 'cabecalho'>
                <div id = 'cabecalho_menu' class = 'cabecalho_menu'>
                    <h2 class = 'titulo'>Odyssey Language</h2>
                    <div id = 'menu' class = 'menu-button'>
                        <button class = 'menu-button'>
                            <div class = 'bar'></div>
                            <div class = 'bar'></div>
                            <div class = 'bar'></div>
                            <div class = 'bar'></div>
                        </button>
                    </div>
                </div>
                <div id = 'cabecalho_usuario' class = 'cabecalho_usuario'>
                    <button class = 'login-button'>Log in</button>
                    <button class = 'register-button'>Inscreva-se</button>
                </div>  
            </div>
        </>
    )
}

export default Cabecalho;