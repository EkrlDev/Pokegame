import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './Pokedex.css';
 

class Pokedex extends Component {
    render () {
        let title;
        if(this.props.isWinner) {
            title = <h1 className="Pokedex-winner">WIN!</h1>
        } else {
            title = <h1 className="Pokedex-loser">LOSE!</h1>
        }
        
        
        return (
            <div className="Pokedex">
                <h1>{this.props.who}</h1>{title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map(p => {
                    return <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    })}
                </div>
            </div>
        )
    }
}


export default Pokedex;