import React from "react";

function TerceiroScroll(){
    return (
        <>
            <div id = 'terceiro_scroll' class = 'terceiro_scroll'>
                
                <div id = 'terceiro_scroll__cards' class='terceiro_scroll__cards'>
                    <div class = 'terceiro_scroll__cards_texto'>
                        <h1 class = 'terceiro_scroll__cards_texto_titulo'>Pratique vocabulários</h1>
                        <article class = 'terceiro_scroll__cards_texto_artigo'>
                            Utilize um baralho de cartas programado para revisar e aprender
                            vocabulários que irão alavancar seu nível no inglês
                        </article> 
                    </div>
                    <img src="/images/imagens_exibicao/foto_cartas.png" alt="foto dos cards"  class = 'terceiro_scroll__imagem'/>
                </div>

                <div id = 'terceiro_scroll__cards' class='terceiro_scroll__cards'>
                    <img src="/images/imagens_exibicao/foto_calendario.png" alt="foto dos cards"  class = 'terceiro_scroll__cards_imagem'/>
                    <div class = 'terceiro_scroll__cards_texto'>
                        <h1 class = 'terceiro_scroll__cards_texto_titulo'>Mantenha a constância</h1>
                        <article class = 'terceiro_scroll__cards_texto_artigo'>
                        Constância é a chave do sucesso. Pratique todos os dias pelos minutos ou horas
                         possíveis e chegue mais perto dos seus objetivos.
                        </article> 
                    </div>
                </div>

                <div id = 'terceiro_scroll__cards' class='terceiro_scroll__cards'>
                    <div class = 'terceiro_scroll__cards_texto'>
                        <h1 class = 'terceiro_scroll__cards_texto_titulo'>Pratique vocabulários</h1>
                        <article class = 'terceiro_scroll__cards_texto_artigo'>
                        Técnicas da neurolinguistica combinadas com algoritmo de aprendizagem espaçada que 
                        personaliza os conteúdos entregues de acordo com seus acertos e erros.
                        </article> 
                    </div>
                    <img src="/images/imagens_exibicao/foto_neurolinguistica.png" alt="foto dos cards"  class = 'terceiro_scroll__imagem'/>
                </div>

            </div>
        </>
    )
}

export default TerceiroScroll;