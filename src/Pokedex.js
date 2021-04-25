import React , {Component} from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

const giveNum = (num) => {
    if (num < 100 && num >= 10 ) {
      num = "0"+num
    } 
    else if ( num < 10 ) 
    {
      num = "00"+num
    }
    return num
  }
class Pokedex extends Component {
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
        return (
        <div className="Pokedex">
            {this.props.allPok.map(pok => 
                <Pokecard 
                  key={pok.id}
                  name={pok.name}
                  type={pok.type}
                  img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${giveNum(pok.id)}.png`}
                  exp={pok.base_experience}                            
                /> )}   
          </div> 
        )

    }
}

export default Pokedex;