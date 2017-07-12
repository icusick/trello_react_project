import React from 'react';

/* Define Card Component Here*/
class Card extends React.Component {
	constructor() {
		super();

		this.state = {
			isComplete: false
            // isArchived: false
		};
	}

	render() {
        let completeButton;
        if (!this.state.isComplete){
            completeButton = <button className="complete-card" onClick={this._handleClick.bind(this)}>></button>
        }
		// if (!this.state.isArchived){

  //       }
        return(
			 <div className="card">
                <div className="title">{this.props.title}</div>
                <div className="description">{this.props.description}</div>
                <div className="actions">
                    <button className="delete-card">X</button>
                    {completeButton}
                </div>
             </div>

		);
	}
    _handleClick() {
        this.setState({
            isComplete: !this.state.isComplete
        });
    }
    // _archiveCard() {
    //     this.setState({
    //         isArchived: !this.state.
    //     });
    // }
}

/* Column Component */
class CardColumn extends React.Component {
    render() {
    	const cards = this._getCards() || [];
        return (
        	<div id="main">
        	<div id="up-next" className="card-column">
                <div className="card-column-title">Up Next</div>
                <div className="card-list">
        			{cards}
        	    </div>
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
            	<div id="add-card-form" onSubmit={this._handleSubmit.bind(this)}>
                	<div className="form-title">New Card</div>
                	<input placeholder="Title" ref={(input) => this._title = input} />
                	<textarea placeholder="Description" ref={(textarea) => this._description = textarea}></textarea>
                	<button className="add-card">+</button>
          		  </div>
        	</div>
			);
	}
	_handleSubmit(event){
		event.preventDefault();
		let title = this._title;
		let description = this._description
		this.props.addCard(title.value, description.value);
	}
}

class MainComponent extends React.Component {
	render() {
		return (
			<div id="app">
			<CardForm addCard={this._addCard.bind(this)}/>
			<CardColumn />
			</div>
			)
	}
	_addCard(title, description) {
		const card = {
			id: this.state.cards.length + 1, 
			title,
			description 
		};
		this.setState({ cards: this.state.cards.concat([card])});
	}
}



export default MainComponent;
