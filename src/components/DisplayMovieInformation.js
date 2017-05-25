import React from 'react';


export default class DisplayMovieInformation extends React.Component {
    constructor() {
        super();
        this.displayMovieInformation.bind(this);
        // this.mapCastAndCrew.bind(this);
    }
    displayMovieInformation(currentMovie) {
        if (this.props.movieInformationLoaded === true) {
            let content = currentMovie.map((movInfo) =>
                <div className="bgWrapper" style={{backgroundImage: "url(" + "https://image.tmdb.org/t/p/w1400_and_h450_bestv2" + movInfo.poster_path + ")"}} key={Math.random()}>
                    <div className="poster" key={Math.random()}></div>
                    <div className="movieTitle" key={Math.random()}>{movInfo.title}</div>
                    <div className="overview" key={Math.random()}>{movInfo.overview}</div>
                    <div className="popularity" key={Math.random()}>Popularity</div>
                    <div className="exitButton" key={Math.random()}>
                        <button  className="button" onClick={this.props.hideMovieInformation}>
                        </button>
                    </div>
                </div>
            );
            return (
                <div key={Math.random()} className="movieInfo">
                    {content}
                </div>
            );
        }
    }
    mapCast(cast,crew) {
        if (this.props.creditsLoaded === true) {
            return (
                <div className="featuredCast" key={Math.random()}>
                    <div className="actor" key={Math.random()}>
                        {cast[0]}
                    </div>
                    <div className="actor" key={Math.random()}>
                        {cast[1]}
                    </div>
                    <div className="actor" key={Math.random()}>
                        {cast[2]}
                    </div>
                    <div className="actor" key={Math.random()}>
                        {cast[3]}
                    </div>
                    <div className="director" key={Math.random()}>
                        {crew}
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="movieInfoContainer" style={{zIndex:this.props.visible}}>
                {this.displayMovieInformation(this.props.currentMovieDisplaying)}
                {this.mapCast(this.props.currentMovieCast,this.props.currentMovieCrew)}
            </div>
        )
    }
}

