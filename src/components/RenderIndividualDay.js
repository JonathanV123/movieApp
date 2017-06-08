import React from 'react';

export default class RenderIndividualDay extends React.Component {
    constructor() {
        super();
        this.onMovieClick = this.onMovieClick.bind(this);
    }

    componentWillMount() {
        this.setState({
            currentlyDisplayedMovie: this.props.movieData[0] || {}
        });
        if (this.props.movieData.length > 0) {
            var intervalId = setInterval(this.cycleCurrentMovie.bind(this, 0), 2500);
            this.setState({
                intervalId: intervalId,
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    cycleCurrentMovie(currentlyDisplayedMovieIndex) {
        let nextMovieIndex;
        if (currentlyDisplayedMovieIndex + 1 >= this.props.movieData.length) {
            nextMovieIndex = 0;
        } else {
            nextMovieIndex = currentlyDisplayedMovieIndex + 1;
        }
        this.setState({
            currentlyDisplayedMovie: this.props.movieData[nextMovieIndex],
        });
        clearInterval(this.state.intervalId);
        var intervalId = setInterval(this.cycleCurrentMovie.bind(this, nextMovieIndex), 2500);
        this.setState({
            intervalId: intervalId,
        });
    }

    onMovieClick() {
        if (this.props.movieData.length > 1) {
           this.props.multipleMovieModal(this.props.movieData)
        } else {
            //call this with whatever current movie
            this.props.onMovieClick(this.state.currentlyDisplayedMovie);
        }
    }

    render() {
        return (
            <div className="individualDay"
                 style={{
                     backgroundImage: "url(" + "https://image.tmdb.org/t/p/w342" + this.state.currentlyDisplayedMovie.poster_path + ")",
                 }}
                 onClick={this.onMovieClick}
            >
                <div className="dateOfDay">
                    {this.props.date.getDate()}
                </div>
            </div>
        )
    }
}

