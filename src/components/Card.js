import React from 'react';
export default function Card(props) {

    const [cardflipfront, setCardflipfront] = React.useState('');
    const [cardflipback, setCardflipback] = React.useState('');

    function Virar() {
        setCardflipfront('rodarprafrente');
        setCardflipback('rodarpratras');
    }


    return (
        <>
            <div className="pergunta card">
                <div className={`face front ${cardflipback}`} >
                    <div>
                        <h2>{props.texto.pergunta}</h2>
                        <img src="/imgs/setinha.png" onClick={Virar} alt="" />
                    </div>
                </div>
                <div className={`face back ${cardflipfront}`}>

                    <h2>{props.texto.resposta}</h2>
                    <div className='alternativas'>
                        <div className="esqueci" onClick={() => props.Finalizado(props.incorreto)}><h3>Não lembrei</h3></div>
                        <div className="quase" onClick={() => props.Finalizado(props.quase)}><h3>Quase não lembrei</h3></div>
                        <div className="zap" onClick={() => props.Finalizado(props.zap)}><h3>Zap!</h3></div>
                    </div>
                </div>
            </div>
        </>
    )
}