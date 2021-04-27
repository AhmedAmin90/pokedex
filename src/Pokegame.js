import  React , { Component } from 'react';
import Pokecard from './Pokecard';
import {giveNum} from './Pokedex';
import './Pockgame.css'


class Pokegame extends Component {
    state = {
        gameStart: false,
        expShown: false,
    }

    startGame = (e)=> {
        this.setState({gameStart: true})
    }
    
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
        const showResult = ()=> {
            let playOneResult = firstPlayer.reduce((exp , pok ) => exp + pok.base_experience , 0);
            let playerTwoResult = secondPlayer.reduce((exp , pok ) => exp + pok.base_experience , 0);
            if (playOneResult > playerTwoResult) {
                document.querySelector('.Pokegame-win').innerText = "Youssef Win"
            }
            else if (playOneResult === playerTwoResult) {
                document.querySelector('.Pokegame-win').innerText = "Draw !"
            }
            else {
                document.querySelector('.Pokegame-win').innerText = "Lina Win"
            }
        }
        

        return (
            <div className="Pokegame"> 
              <button onClick={this.startGame} className="Pokegame-btn">Start Game !</button>
              <button onClick={showResult} className="Pokegame-btn">Show The Result</button>
              <h1 className="Pokegame-win"></h1>
                <div className="Pokegame-fight">
                    
                           <div className={this.state.gameStart ? "Pokegame-cards-show" : "Pokegame-cards-hide"}>
                               <h1>Youssef</h1>
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
                        
                        
                            <div className={this.state.gameStart ? "Pokegame-cards-show" : "Pokegame-cards-hide"}>
                                <h1>Lina</h1>
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
            </div>
        )
    }
}

export default Pokegame;


// <div className="Pokegame">
//                 <button onClick={this.startGame} className="Pokegame-btn">Start Game !</button>
//                 {/* {`Pokegame-player ${playOneResult > playerSecondResult ? "Pokegame-win" : "Pokegame-lose"}`} */}
//                     <div className="Pokegame-player">
//                         <h1> Youssef </h1>
                        // <div className={this.state.gameStart ? "Pokegame-cards-show" : "Pokegame-cards-hide"}>
                        //         {firstPlayer.map(pok => 
                        //             <Pokecard 
                        //             key={pok.id}
                        //             name={pok.name}
                        //             type={pok.type}
                        //             img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${giveNum(pok.id)}.png`}
                        //             exp={pok.base_experience}   
                        //             />
                        //             )}
                        // </div>
//                         <p> Youssef Power: {playOneResult}</p>
//                          <p className="Pokegame-result">{playOneResult > playerSecondResult ? "Youssef Win" : "Youssef Lose"}</p>
//                     </div>
                
//                 {/* {`Pokegame-player ${playOneResult < playerSecondResult ? "Pokegame-win" : "Pokegame-lose"}`} */}
//                 <div className="Pokegame-player">
//                     <h1>Lina </h1>
                    // <div className="Pokegame-cards">
                    //     {secondPlayer.map(pok => 
                    //             <Pokecard 
                    //             key={pok.id}
                    //             name={pok.name}
                    //             type={pok.type}
                    //             img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${giveNum(pok.id)}.png`}
                    //             exp={pok.base_experience}   
                    //             />
                    //             )}
                    // </div> 
//                     <p> Lina Power: {playerSecondResult}</p>
//                     <p className="Pokegame-result" >{playOneResult < playerSecondResult ? "Lina Win" : "Lina Lose"}</p>
//                 </div>
               
//             </div>