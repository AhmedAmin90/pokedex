import React , {Component} from 'react';
import './Pokecard.css'

class Pokecard extends Component {
    state = {
        expShow: false
    }
    showExp = (e)=> {
        this.setState({expShow: true})
    }

    render() {
        const {name , img , type , exp} = this.props;
        return (
            <div className="Pokecard">
                <h1>{name}</h1>
                <img onClick={this.showExp} src={img} className="Pokecard-img"/>
                <p>Type: {type}</p>
                <p className={this.state.expShow ? "Pokecard-exp-show" : "Pokecard-exp-hide"}>Power: {exp}</p>
            </div>      
        )
    }
}   

export default Pokecard;