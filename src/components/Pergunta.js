import React from 'react';

export default function PerguntaInit({ indice, texto }) {

    let [clique, setClique] = React.useState(0);

    function Clique() {
        setClique(clique + 1);
        alert(clique);
    }
    function Pergunta() {
        return (
            <div className="pergunta" onClick={Clique}>
                <h2>Pergunta {indice}</h2>
                <ion-icon name="play-outline" ></ion-icon>
            </div>
        )
    }

    function Card() {
        return (
            <div className="pergunta" onClick={Clique}>
                <h2>Oiiiiiii</h2>
            </div>
        );
    }

    return (
        <>
            {clique === 0 ? <Pergunta /> : <Card />}
        </>

    )
}