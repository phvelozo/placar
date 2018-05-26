import React from 'react';


export default class PartidaContainer extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.partida.estadio}</div>
                <div> - </div>
                <div>
                    <span>{this.props.partida.data}</span>
                    <span> - </span>
                    <span>{this.props.partida.hora}</span>
                </div>
            </div>
        );
    }
}