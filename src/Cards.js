import Question from "./components/Question";

export default function Cards(props) {
    const question_list = ['aaaa', 'bbbbb', 'cccccc', 'dddd'];

    const imgs = [
        '/imgs/party.png',
        'imgs/sad.png',
        'imgs/setinha.png'
    ];
    const [
        party,
        sad,
        setinha
    ] = imgs

    return (
        <>
            <div className="topo">
                <img src={props.logopequena} alt="" />
                <h1>ZapRecall</h1>
            </div>
            <div className="cards">
                {question_list.map((item, index) => <Question className='pergunta' indice={index} key={index} texto={item} />)}
            </div>
        </>
    )
}