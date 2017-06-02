import React from 'react';


export default class DisplayMovieInformation extends React.Component {
    constructor() {
        super();
        this.displayMovieInformation.bind(this);
    }

    displayMovieInformation(currentMovie) {
        console.log("displayingMovieInfo");
            let content = (
                    <div className="bgWrapper"
                         style={{backgroundImage: "url(" + "https://image.tmdb.org/t/p/w1400_and_h450_bestv2" + currentMovie.poster_path + ")"}}
                         key={Math.random()}>
                        <div className="poster"></div>
                        <div className="movieTitle">{currentMovie.title}</div>
                        <div className="overview">{currentMovie.overview}</div>
                        <div className="exitButton">
                            <button className="button" onClick={this.props.hideMovieInformation}>
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

    renderCast() {
        return this.props.currentMovieCast.slice(0, 4).map((castMember, index) => {
            return (
                <div key={index} className="actor">
                    {castMember}
                </div>
            )
        })
    }

    render() {
        return (
            <div className="movieInfoContainer">
                {this.displayMovieInformation(this.props.selectedMovie)}
                <div className="featuredCast">
                    {this.renderCast()}
                </div>
            </div>
        )
    }
}

