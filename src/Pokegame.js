import  React , { Component } from 'react';
import Pokecard from './Pokecard';
import {giveNum} from './Pokedex'


class Pokegame extends Component {
    static defaultProps = {
        allPok: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }

    render() {
        let firstPlayer = [];
        let secondPlayer = [];
        while (firstPlayer.length < 4){
            let randomNum = Math.floor(Math.random(this.props.allPok.length)*this.props.allPok.length);
            if (!firstPlayer.includes(this.props.allPok[randomNum])) {
                firstPlayer.push(this.props.allPok[randomNum])
            }
            
        }
       while (secondPlayer.length < 4){
            let randomNum = Math.floor(Math.random(this.props.allPok.length)*this.props.allPok.length);
            if (!secondPlayer.includes(this.props.allPok[randomNum]) && !firstPlayer.includes(this.props.allPok[randomNum]) ) {
                secondPlayer.push(this.props.allPok[randomNum])
            }
        }

        console.log(firstPlayer , secondPlayer)
        return (
            <div>
                <div className="Pokegame-win">
                    {firstPlayer.map(pok => 
                        <Pokecard 
                        key={pok.id}
                        name={pok.name}
                        type={pok.type}
                        img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${giveNum(pok.id)}.png`}
                        exp={pok.base_experience}   
                        />
                        )}
                    
                </div>
                <div className="Pokegame-lose">
                {secondPlayer.map(pok => 
                        <Pokecard 
                        key={pok.id}
                        name={pok.name}
                        type={pok.type}
                        img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${giveNum(pok.id)}.png`}
                        exp={pok.base_experience}   
                        />
                        )}
                </div>
            </div>
        )
    }
}

export default Pokegame;