import React , {Component} from 'react';
import './Pokecard.css'

class Pokecard extends Component {
    render() {
        const {name , img , type , exp} = this.props;
        return (
            <div className="Pokecard">
                <h1>{name}</h1>
                <img src={img} className="Pokecard-img"/>
                <p>Type: {type}</p>
                <p>Exp: {exp}</p>
            </div>      
        )
    }
}   

export default Pokecard;