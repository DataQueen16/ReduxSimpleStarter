import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';




// Create a new component. This component will produce some HTMl
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            //this.setState({ videos: videos});
        });
    }

    render()
    {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}


// Take this component's generated HTML & put it in the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));