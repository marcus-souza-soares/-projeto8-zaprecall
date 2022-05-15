import React from 'react';
export default function Card(props) {

    return (
        <>
            <div className="pergunta card">
                <div className={`face front ${props.cardflipback}`} >
                    <div>
                        <h2>{props.texto.pergunta}</h2>
                        <img src="/imgs/setinha.png" onClick={props.Clique} alt="" />
                    </div>
                </div>
                <div className={`face back ${props.cardflipfront}`}>

                    <h2>{props.texto.resposta}</h2>
                    <div className='alternativas'>
                        <div className="esqueci" onClick={props.Incorreto}><h3>Não lembrei</h3></div>
                        <div className="quase" onClick={props.Quase}><h3>Quase não lembrei</h3></div>
                        <div className="zap" onClick={props.Zap}><h3>Zap!</h3></div>
                    </div>
                </div>
            </div>
        </>
    )
}