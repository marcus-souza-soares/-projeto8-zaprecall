export default function Question(props){
    return (
        <div className="pergunta">
            <h2>Pergunta {props.indice+1}</h2>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}