import React from 'react';

/* Define Card Component Here*/

/* Column Component */
class CardColumn extends React.Component {
    render() {
        return (
        	 <div classname="card">
                <div classname="title">Take React Course</div>
                <div classname="description">code on code on code on code...</div>
                <div classname="actions">
                    <button classname="delete-card">X</button>
                    <button classname="complete-card">></button>
                </div>
             </div>
        );
    }
}

export default CardColumn;
