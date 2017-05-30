import React from 'react';


export default class DisplayMovieInformation extends React.Component {
    constructor() {
        super();
        this.displayMovieInformation.bind(this);
    }

    displayMovieInformation(currentMovie) {
        if (this.props.ajaxMovieInfoLoaded === true) {
            let content = currentMovie.map((movInfo) =>
                <div className="bgWrapper"
                     style={{backgroundImage: "url(" + "https://image.tmdb.org/t/p/w1400_and_h450_bestv2" + movInfo.poster_path + ")"}}
                     key={Math.random()}>
                    <div className="poster"></div>
                    <div className="movieTitle">{movInfo.title}</div>
                    <div className="overview">{movInfo.overview}</div>
                    <div className="popularity">Popularity</div>
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
    }

    renderCast() {
        return this.props.cast.slice(0, 4).map((castMember, index) => {
            return (
                <div key={index} className="actor">
                    {castMember}
                </div>
            )
        })
    }

    render() {
        return (
            <div className="movieInfoContainer" style={{zIndex: this.props.visible}}>
                {this.displayMovieInformation(this.props.currentMovieDisplaying)}
                <div className="featuredCast">
                    {this.renderCast()}
                </div>
            </div>
        )
    }
}

