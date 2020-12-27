import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hand1: [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},],
            hand2: [ {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}],
            exp1: 0,
            exp2: 0,
            account: 500,
            rekt: false
        }
    }

    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };

    setBalance = () => {

    
            setInterval(() => {
            
                
                    const hand1 = [];
                const hand2 = [...this.props.pokemon];
                let account = this.state.account;
        
            while (hand1.length < hand2.length) {
                let randidx = Math.floor(Math.random() * hand2.length);
                let randPokemon = hand2.splice(randidx, 1)[0];
                hand1.push(randPokemon);
            }
        
            const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
            const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
            
            if(exp1 > exp2) {
                account--;
            } else {
                account++;
            }

            
            this.setState({account: account, exp1: exp1, exp2: exp2, hand1:hand1, hand2: hand2});
                }

            , 1000);
        
        
        
    }

    render() {
        

        return (
            <div>
                <Pokedex pokemon = {this.state.hand1} exp = {this.state.exp1} isWinner = {this.state.exp2 < this.state.exp1} who="PEPE"/>
                <Pokedex pokemon = {this.state.hand2} exp = {this.state.exp2} isWinner = {this.state.exp2 > this.state.exp1} who="YOU"/>
                <button className="Pokedex-button" onClick={this.setBalance}>Roll</button>
                <p className="Pokedex">Your Balance: {this.state.account}</p>
                
            </div>

        )
    }
}

export default Pokegame;