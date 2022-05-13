export default function Init(props){
    return (
        <>
            <div className="home">
                <img src={props.img} alt="" />
                <h1>ZappRecall</h1>
                <button className="start" onClick={() => props.setInicio(false)}>Iniciar Recall!!</button>
            </div>
        </>
    )
}