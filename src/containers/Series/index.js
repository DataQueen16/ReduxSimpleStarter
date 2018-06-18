import React, {Component} from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    };

    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true});

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then(json => this.setState({series: json, isFetching: false }));
    };

    render(){
        const { series, seriesName, isFetching } = this.state;

        return (
            <div>
                <Intro message="Here you can find all of your most loved series."/>
                <div>
                    <input value={ seriesName}
                        type="text"
                           onChange={this.onSeriesInputChange}/>;
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                        <p>Please input the series name</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>TV series name not found</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList List={this.state.series} />
                }
            <SeriesList List = {this.state.series}/>
            </div>
        )
    }
}

export default Series;