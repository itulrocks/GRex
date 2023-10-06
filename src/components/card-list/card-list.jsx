import { Component } from "react";

class CardList extends Component{
    
    render(){
        const filteredMovies = this.props.cardslist;
        return (
            <div>
                Hello I am the card list component.
                {
                    filteredMovies.map((movie) => {
                        return (
                            <div key={movie.id} className="column">{movie.name}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;