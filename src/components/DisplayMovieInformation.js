import React from 'react';


export default class DisplayMovieInformation extends React.Component {
    constructor() {
        super();
        this.displayMovieInformation.bind(this);
    }
    displayMovieInformation(currentMovie) {
        if (this.props.movieInformationLoaded === true) {
            let content = currentMovie.map((movInfo) =>
                <div key={Math.random()}>
                    <div key={Math.random()}>{movInfo.title}</div>
                    <div key={Math.random()}>{movInfo.overview}</div>
                    <div key={Math.random()}>
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

    // movieInfoScreen.push(
    //     <div className="movieInfoContainer">
    //         <div className="movieTitle">
    //             {movie.title}
    //         </div>
    //         <div className="movieDescription">
    //             {movie.overview}
    //         </div
    //     </div>);
    // console.log(movieInfoScreen);

    render() {
        return (
            <div className="movieInfoContainer" style={{zIndex:this.props.visible}}>
                {this.displayMovieInformation(this.props.currentMovieDisplaying)}
            </div>
        )
    }
}

