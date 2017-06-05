import React from 'react';
import YouTube from 'react-youtube'



export default class DisplayMovieInformation extends React.Component {
    constructor() {
        super();
        this.displayMovieInformation.bind(this);
        this.renderYoutube.bind(this);

    }

    renderCast() {
        return this.props.currentMovieCast.slice(0, 4).map((castMember, index) => {
            return (
                <div key={index} className="actor">
                    {castMember}
                </div>
            )
        })
    }
    renderYoutube(){
            const opts = {
                height: '390',
                width: '640',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            };
            return (
                <YouTube
                    videoId={this.props.trailerLink}
                    opts={opts}
                    onReady={this._onReady}
                />
            );
    }
    displayMovieInformation(currentMovie) {
        console.log("displayingMovieInfo");
            return (
                <div key={Math.random()} className="movieInfo">
                    <div className="bgWrapper"
                         style={{backgroundImage: "url(" + "https://image.tmdb.org/t/p/w1400_and_h450_bestv2" + currentMovie.backdrop_path + ")"}}
                         key={Math.random()}>
                        <div className="movieTitle">{currentMovie.title + " " + "(" + currentMovie.release_date.slice(0,4)+")"}</div>
                    </div>
                    <div className="movieDescPosterContainer">
                        <div className="posterContainer">
                            <div className="poster"
                                 style={{backgroundImage: "url(" + "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + currentMovie.poster_path + ")"}}
                                 key={Math.random()}>
                            </div>
                        </div>
                        <div className="overview">
                            {currentMovie.overview}
                            {this.renderCast()}
                        </div>
                    </div>
                    {this.renderYoutube()}
                    <div className="exitButton">
                        <button className="button" onClick={this.props.hideMovieInformation}>
                        </button>
                    </div>
                </div>
            );
    }
    render() {
        return (
            <div className="movieInfoContainer">
                {this.displayMovieInformation(this.props.selectedMovie)}
            </div>
        )
    }
}

