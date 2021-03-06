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
                <span key={castMember} className="actor">
                        {castMember},
                </span>
            )
        })
    }

    renderYoutube() {
        const opts = {
            height: '300px',
            width: '55%',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <YouTube
                videoId={this.props.trailerLink}
                opts={opts}
            />
        );
    }

    displayMovieInformation(currentMovie) {
        return (
            <div className="movieInfo">
                <div className="headerContainer">
                    <span>
                        <h1  className="purpleColor">Movie Release Calendar</h1>
                    </span>
                    <span>
                        <h2 className="pinkColor">Movies Biggest Releases</h2>
                    </span>
                </div>
                <div className="movieDescPosterContainer"
                     style={{backgroundImage: "url(" + "https://image.tmdb.org/t/p/w1400_and_h450_bestv2" + currentMovie.backdrop_path + ")"}}
                >
                    <div className="posterContainer">
                        <div className="poster"
                             style={{backgroundImage: "url(" + "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + currentMovie.poster_path + ")"}}
                        >
                        </div>
                    </div>
                    <div className="descriptionContainer">
                        <h1>
                            {currentMovie.title + " " + "(" + currentMovie.release_date.slice(0, 4) + ")"}
                        </h1>
                        <h1>
                            Overview:
                        </h1>
                        <p key={currentMovie.id} className="overview">
                            {currentMovie.overview}
                        </p>
                        <div className="castAndCrewContainer">
                            <h2 id="starring">
                                Featured Cast:
                            </h2>
                            <div className="cast">
                                {this.renderCast()}
                            </div>
                            <h2 id="directedBy">
                                Directed By:
                            </h2>
                            <div className="director">
                                {this.props.currentMovieCrew[0]}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="youtubeContainer">
                    <h2>
                        Media:
                    </h2>
                    {this.renderYoutube()}
                </div>
                <div className="exitButton">
                    <button className="button" onClick={this.props.hideMovieInformation}>
                        Back to Calendar
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

