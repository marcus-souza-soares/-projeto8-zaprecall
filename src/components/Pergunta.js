import React from 'react';
import Card from "./Card";

export default function Pergunta({ indice, texto, setLista, incorreto, quase, zap, setErrou }) { 

    const [icone, setIcone] = React.useState("");
    const [colorir_fonte, setColorir_fonte] = React.useState("");
    let [cardaberto, setCardaberto] = React.useState('fechado');

    function Renderpergunta() {
        function Finalizado(item) {
            setIcone(item)
            if(item === incorreto.element){
                setColorir_fonte("incorreto-respondido")
            } else if (item === quase){
                setColorir_fonte("quase-respondido")
            } else {
                setColorir_fonte("zap-respondido")
            }
            if (item === incorreto){
                setErrou(true)
            }
            setLista(item)
            setCardaberto('finalizado');
        }

        function Pergunta({ children }) {
            return (
                <div className="pergunta" >
                    {children}
                </div>
            );
        }
        if (cardaberto === 'fechado') {
            return (
                <Pergunta>
                    <h2 className={colorir_fonte}>Pergunta {indice + 1}</h2>
                    <ion-icon name="play-outline" onClick={() => setCardaberto('aberto')}></ion-icon>
                </Pergunta>)

        } else if (cardaberto === 'aberto') {
            return (
                <Card
                    texto={texto}
                    incorreto={incorreto}
                    quase={quase}
                    zap={zap}
                    Finalizado={Finalizado}
                    setCardaberto={setCardaberto} />
            )
        } else {
            return (
                <Pergunta>
                    <h2 className={colorir_fonte}>Pergunta {indice + 1}</h2>
                    {icone}
                </Pergunta>)
        }
    }
    return (
        <>
            <Renderpergunta />
        </>)
}