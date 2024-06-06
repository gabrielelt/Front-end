import React from "react";  
import "./style.css";

function SegundoScroll(){
    return (
        <>
            <div id = 'segundo_scroll' class = 'segundo_scroll'>
                <div id = 'segundo_scroll__primeiro_texto' class='segundo_scroll__primeiro_texto'>
                    <h1>Odyssey Classroom</h1>        
                </div>

                <div id = 'segundo_scroll__segundo_texto' class = 'segundo_scroll__segundo_texto'>
                    <article>
                        A Odyssey é uma escola de idiomas criada com o objetivo de priorizar os processos individuais na aprendizagem do inglês.
                    </article> 
                </div>

                <div id = 'segundo_scroll__terceiro_texto' class = 'segundo_scroll__terceiro_texto'>
                    <article>
                         O seu processo é único e deseja ser priorizado e celebrado. Let’s do it!
                    </article>
                </div>

                <div id = 'segundo_scroll__bottom' class = 'segundo_scroll__bottom'>
                    <button class = 'segundo_scroll__bottom_bottom'>Estou pronto(a) para inicia</button>
                </div>
            </div>
        </>
    )
}

export default SegundoScroll;
