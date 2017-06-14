import ReactDOM from 'react-dom';
import React from 'react';

import MainComponent from './components.jsx';

class MainPage extends React.Component {
    render () {
        return (
            <MainComponent />
        );
    }
}

ReactDOM.render(
    <MainPage />,
    document.getElementById('app')
);
