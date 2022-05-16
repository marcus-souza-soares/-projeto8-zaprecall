import Pergunta from "./components/Pergunta";
import Footer from "./Footer";
import React from 'react';

export default function Deck({ logopequena }) {

    const conteudo = [{
        pergunta: 'O que é JSX?',
        resposta: 'Uma extensão de linguagem do JavaScript'
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
        resposta: 'interagindo com a DOM para colocar componentes React na mesma'
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
        resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    }]
    conteudo.sort(comparador);

    function comparador() {
        return Math.random() - 0.5;
    }

    let [lista, setLista] = React.useState([]);

    let [errou, setErrou] = React.useState('false')

    const incorreto = <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 0C5.15897 0 0 5.15897 0 11.5C0 17.841 5.15897 23 11.5 23C17.841 23 23 17.841 23 11.5C23 5.15897 17.841 0 11.5 0ZM15.6638 14.4131C15.7494 14.4945 15.8178 14.5921 15.8651 14.7003C15.9124 14.8085 15.9375 14.9251 15.939 15.0432C15.9405 15.1612 15.9184 15.2784 15.8739 15.3878C15.8294 15.4971 15.7635 15.5965 15.68 15.68C15.5965 15.7635 15.4971 15.8294 15.3878 15.8739C15.2784 15.9184 15.1612 15.9405 15.0432 15.939C14.9251 15.9375 14.8085 15.9124 14.7003 15.8651C14.5921 15.8178 14.4945 15.7494 14.4131 15.6638L11.5 12.7512L8.58685 15.6638C8.4196 15.8227 8.1969 15.9099 7.96623 15.907C7.73555 15.904 7.51516 15.8111 7.35204 15.648C7.18891 15.4848 7.09596 15.2644 7.09301 15.0338C7.09006 14.8031 7.17733 14.5804 7.33623 14.4131L10.2488 11.5L7.33623 8.58685C7.17733 8.4196 7.09006 8.1969 7.09301 7.96623C7.09596 7.73555 7.18891 7.51516 7.35204 7.35204C7.51516 7.18891 7.73555 7.09596 7.96623 7.09301C8.1969 7.09006 8.4196 7.17733 8.58685 7.33623L11.5 10.2488L14.4131 7.33623C14.5804 7.17733 14.8031 7.09006 15.0338 7.09301C15.2644 7.09596 15.4848 7.18891 15.648 7.35204C15.8111 7.51516 15.904 7.73555 15.907 7.96623C15.9099 8.1969 15.8227 8.4196 15.6638 8.58685L12.7512 11.5L15.6638 14.4131Z" fill="#FF3030" />
    </svg>

    const quase = <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 0C5.15104 0 0 5.15104 0 11.5C0 17.849 5.15104 23 11.5 23C17.849 23 23 17.849 23 11.5C23 5.15104 17.849 0 11.5 0ZM11.1406 18.2083C10.9037 18.2083 10.6721 18.1381 10.4751 18.0064C10.2781 17.8748 10.1246 17.6877 10.0339 17.4688C9.94323 17.2499 9.9195 17.0091 9.96573 16.7767C10.0119 16.5443 10.126 16.3309 10.2936 16.1634C10.4611 15.9958 10.6745 15.8817 10.9069 15.8355C11.1393 15.7893 11.3802 15.813 11.599 15.9037C11.8179 15.9944 12.005 16.1479 12.1367 16.3449C12.2683 16.5419 12.3385 16.7735 12.3385 17.0104C12.3385 17.3281 12.2123 17.6328 11.9877 17.8575C11.763 18.0821 11.4583 18.2083 11.1406 18.2083ZM13.1435 12.099C12.1726 12.7506 12.0391 13.3478 12.0391 13.8958C12.0391 14.1182 11.9507 14.3315 11.7935 14.4888C11.6362 14.646 11.4229 14.7344 11.2005 14.7344C10.9781 14.7344 10.7648 14.646 10.6076 14.4888C10.4503 14.3315 10.362 14.1182 10.362 13.8958C10.362 12.5835 10.9657 11.5401 12.208 10.7058C13.3628 9.93073 14.0156 9.43958 14.0156 8.35966C14.0156 7.62534 13.5964 7.06771 12.7285 6.65503C12.5242 6.55799 12.0696 6.46336 11.5102 6.46995C10.8082 6.47893 10.2632 6.64664 9.84328 6.98445C9.05146 7.62174 8.98438 8.31534 8.98438 8.32552C8.97906 8.43564 8.95212 8.54363 8.90507 8.64334C8.85803 8.74304 8.7918 8.83251 8.71018 8.90662C8.62856 8.98073 8.53314 9.03804 8.42938 9.07527C8.32561 9.11251 8.21552 9.12894 8.1054 9.12363C7.99528 9.11832 7.88729 9.09138 7.78758 9.04433C7.68788 8.99728 7.59842 8.93106 7.52431 8.84944C7.4502 8.76782 7.39289 8.6724 7.35565 8.56863C7.31841 8.46487 7.30198 8.35478 7.30729 8.24466C7.31388 8.09911 7.4151 6.78799 8.79091 5.68112C9.50427 5.10732 10.4117 4.80904 11.4862 4.79586C12.2469 4.78688 12.9615 4.91565 13.446 5.14445C14.8961 5.83026 15.6927 6.97367 15.6927 8.35966C15.6927 10.3859 14.3385 11.2958 13.1435 12.099Z" fill="#FF922E" />
    </svg>

    const zap = <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 0C5.15897 0 0 5.15897 0 11.5C0 17.841 5.15897 23 11.5 23C17.841 23 23 17.841 23 11.5C23 5.15897 17.841 0 11.5 0ZM17.485 7.64584L10.0542 16.492C9.9727 16.5891 9.87127 16.6675 9.7568 16.722C9.64233 16.7765 9.5175 16.8057 9.39075 16.8077H9.37582C9.25183 16.8076 9.12923 16.7815 9.01598 16.7311C8.90273 16.6806 8.80136 16.6068 8.71844 16.5147L5.53382 12.9762C5.45294 12.8904 5.39003 12.7893 5.34878 12.6789C5.30752 12.5684 5.28876 12.4509 5.2936 12.3331C5.29843 12.2153 5.32677 12.0996 5.37693 11.9929C5.4271 11.8862 5.49809 11.7907 5.58572 11.7118C5.67336 11.6329 5.77587 11.5724 5.88725 11.5337C5.99862 11.495 6.1166 11.479 6.23425 11.4866C6.35191 11.4941 6.46686 11.5251 6.57236 11.5778C6.67786 11.6304 6.77177 11.7036 6.84858 11.793L9.3526 14.5751L16.1304 6.50801C16.2824 6.33223 16.4975 6.22335 16.7292 6.20489C16.9609 6.18642 17.1905 6.25987 17.3685 6.40935C17.5464 6.55883 17.6584 6.77233 17.6802 7.00371C17.702 7.23509 17.6319 7.46575 17.485 7.64584Z" fill="#2FBE34" />
    </svg>

    function RenderfooterResult() {
        if (lista.length === conteudo.length) {
            for (let i = 0; i < lista.length; i++) {
                if (errou === true) {
                    return (
                        <>
                            <div>
                                <img src="/imgs/sad.png" alt="" />
                                <h2>Putz...</h2>
                            </div>
                            <div>
                                <h3>Ainda faltam alguns...</h3>
                                <h3>Mas não desanime!</h3>
                            </div>
                        </>
                    )
                }
            }
            return (
                <>
                    <div>
                        <img src="/imgs/party.png" alt="" />
                        <h2>Parabéns!</h2>
                    </div>
                    <div>
                        <h3>Você não esqueceu de</h3>
                        <h3>nenhum flashcard!</h3>
                    </div>
                </>)
        } else {
            return "";
        }
    }

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
                        setLista={item => setLista([...lista, item])}
                        incorreto={incorreto}
                        quase={quase}
                        zap={zap}
                        setErrou={setErrou}
                    />)}
            </div>
            <Footer respondidas={lista.length} >

                <RenderfooterResult />
                <h2>{lista.length}/{conteudo.length} CONCLUÍDOS</h2>
                <div className="icones">
                    {lista.map((item, index) => <span className="icone" key={index}>{item}</span>)}
                </div>
            </Footer>
        </>
    )
}