import React from 'react';

export default class RenderIndividualDay extends React.Component {
    constructor() {
        super();
        this.onClick.bind(this);
    }
    componentWillMount(){
        this.setState({
            currentMovie: this.props.movieData[0] || {}
        });
        if(this.props.movieData.length > 0){
            setInterval(this.cycleCurrentMovie.bind(this,0),2500);
        }
    }
    //Over Time Mover Posters Start To Spam
    cycleCurrentMovie(currentMovieIndex){
        let nextMovieIndex;
        if(currentMovieIndex + 1 >= this.props.movieData.length){
            nextMovieIndex = 0;
        }else{
            nextMovieIndex = currentMovieIndex + 1;
        }
        this.setState({
            currentMovie:this.props.movieData[nextMovieIndex],
        });
        setInterval(
            this.cycleCurrentMovie.bind(this,nextMovieIndex)
            , 2500);
        //clarify difference between two setIntervals 0 vs nextMovie index param
    }
    onClick() {
        //call this with whatever current movie
            this.props.onMovieClick(this.props.movieData[0]);
    }
    render() {
        return (
            <div className="individualDay"
                style={{
                    backgroundImage: "url(" + "https://image.tmdb.org/t/p/w300"+this.state.currentMovie.poster_path+")",
                }}
                onClick={this.onClick.bind(this)}
            >
                <div className="dateOfDay">
                    {this.props.date.getDate()}
                </div>
            </div>
        )
    }
}

