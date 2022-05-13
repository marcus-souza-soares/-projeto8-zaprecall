import Init from "./Init";
import Cards from "./Cards";
import React from 'react';

export default function App() {

    const lista_logos = [
        '/imgs/logo-pequeno.png',
        '/imgs/logo.png'
    ]
    const [
        logopequena,
        logo,
    ] = lista_logos;

    const [inicio, setInicio] = React.useState(true);

    return (
        <>
            <div>
                {
                    inicio ? <Init setInicio={setInicio} img={logo}/> : <Cards logopequena={logopequena} />
                }
            </div>
        </>
    );
}