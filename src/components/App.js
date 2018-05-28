import React from 'react';

import Placar from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "01/06/2016",
        hora: "19h"
    },
    casa: {
        nome: "Vasco"
    },
    visitante: {
        nome: "Flamengo "
    }
}

export default class App extends React.Component {
    render() {
        return <Placar partida={dados.partida}
                       casa={dados.casa}
                       visitante={dados.visitante} />;
    }

}