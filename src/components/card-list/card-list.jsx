import { Component } from "react";

const CardList = (props) => {
    return (
        <div>
            Hello I am the card list component.
            {
                props.cardslist.map((card) => {
                    return (
                        <div key={card.id} className="column">{card.name}</div>
                    )
                })
            }
        </div>
    );
}

export default CardList;