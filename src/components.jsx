import React from 'react';

/* Define Card Component Here*/
class Card extends React.Component {
	render() {
		return(
			 <div className="card">
                <div className="title">{this.props.title}</div>
                <div className="description">{this.props.description}</div>
                <div className="actions">
                    <button className="delete-card">X</button>
                    <button className="complete-card">></button>
                </div>
             </div>

		);
	}
}

/* Column Component */
class CardColumn extends React.Component {
    render() {
    	const cards = this._getCards() || [];
        return (
        	<div id="up-next" className="card-column">
                <div className="card-column-title">Up Next</div>
                <div className="card-list">
        			{cards}
        	    </div>
            </div>

        );
    }
    _getCards() {
    	const cardList = [
    		{id: 1, title: "whatever", description: "also whatever" }, 
    		{id: 2, title: "whatever volume two", description: "whatever x2"}
    	];
    	return cardList.map((card) => {
    		return ( 
    			<Card 
    				id={card.id} title={card.title} description={card.description}/>
    		);
    	})
    }
}

// CardForm Component 
class CardForm extends React.Component {
	render() {
		return (
			<div id="sidebar">

            <div id="add-card-form">
                <div className="form-title">New Card</div>
                <input id="title-text" type="text" />
                <input id="description-text" type="text" />
                <button className="add-card">+</button>
            </div>

        </div>
			);
	}
}

class MainComponent extends React.Component {
	render() {
		return (
			)
	}
}



export default CardColumn;
