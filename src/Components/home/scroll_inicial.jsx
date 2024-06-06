import React from "react";
import "./style.css";
function ScrollInicial(){
    return (
        <div id = 'elementos_do_scroll_inicial' class = 'elementos_do_scroll_inicial'>
            <div id = 'lado_esquerdo' class='lado_esquerdo'>
                <div id = 'lado_esquerdo__texto' class = 'lado_esquerdo__texto'>
                    <h1>Make</h1>
                    <h1>Learning fun!</h1>
                    <p>aprender inglês nunca foi tão fácil</p>
                </div>

                <div id = 'botao_lado_esquerdo' class = 'botao_lado_esquerdo'>
                    <lu class = 'botao_lado_esquerdo__botoes'>
                        <li><button class = 'botao_lado_esquerdo__comecar_agora'>Começar agora</button> </li>
                        <li><button class = 'botao_lado_esquerdo__saiba_mais'>Saiba mais</button> </li>
                    </lu>
                </div>
            </div>

            <div id = 'lado_direito' class = 'lado_direito'>
                <img src = "/images/imagens_exibicao/logo_exibicao.png" alt = 'Logo da página'/>
            </div>
        </div>
    )
}

export default ScrollInicial;