import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyADSheNOszT_ofPlDbMYdvRk1h9tw5VCDU';



// Create a new component. This component will produce some HTMl
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
        );
}


// Take this component's generated HTML & put it in the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));