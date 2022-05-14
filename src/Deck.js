import Pergunta from "./components/Pergunta";
import Footer from "./Footer";
import React from 'react';

export default function Deck({ logopequena }) {
    const conteudo = [{
            pergunta: 'O que é JSX?',
            reposta: 'Uma extensão de linguagem do JavaScript'
        },
        {
            pergunta: 'O React é __',
            resposta: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            pergunta: 'Componentes devem iniciar com __ ',
            resposta: 'letra maiúscula'
        },
        {
            pergunta: 'Podemos colocar __',
            resposta: 'expressões'
        },
        {
            pergunta: 'O ReactDOM nos ajuda __',
            reposta: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            pergunta: 'Usamos o npm para __',
            resposta: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            pergunta: 'Usamos props para __',
            resposta: 'passar diferentes informações para componentes'
        },
        {
            pergunta: 'Usamos estado (state) para __',
            reposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }]
    const [classe, setClasse ] = React.useState('pergunta')
    const [text, setText] = React.useState('Pergunta')

    // const imgs = [
    //     '/imgs/party.png',
    //     'imgs/sad.png',
    //     'imgs/setinha.png'
    // ];
    // const [
    //     party,
    //     sad,
    //     setinha
    // ] = imgs

    return (
        <>
            <div className="topo">
                <img src={logopequena} alt="" />
                <h1>ZapRecall</h1>
            </div>
            <div className="cards">
                {conteudo.map((item, index) =>

                <Pergunta
                    className='pergunta' 
                    indice={index} 
                    key={index} 
                    texto={item} 
                 />)}
            </div>
            <Footer />
        </>
    )
}