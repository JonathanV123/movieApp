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
    mapCast(cast) {
        // if (this.props.creditsLoaded === true) {
        //     console.log(this.props.creditsLoaded);
        //         let crewContent = cast.map((castCrew) =>
        //         <div className="featuredCrew" key={Math.random()}>
        //             <div className="actor" key={Math.random()}>
        //                 {crewContent[0].name}
        //             </div>
        //             <div className="featuredCast" key={Math.random()}>
        //
        //             </div>
        //         </div>
        //     );
        //     return (
        //         <div className="tempCrew">
        //             {crewContent}
        //         </div>
        //     );
        // }
    }
    // mapCrew(crew) {
    //     if (this.props.creditsLoaded === true && crew.length === 0) {
    //         let castContent = crew.map((castCrew) =>
    //             <div className="featuredCrew" key={Math.random()}>
    //                 <div className="actor" key={Math.random()}>
    //                     {castContent[0].name}
    //                 </div>
    //                 <div className="featuredCast" key={Math.random()}>
    //
    //                 </div>
    //             </div>
    //         );
    //         return (
    //             <div className="tempCast">
    //                 {castContent}
    //             </div>
    //         );
    //     }
    // }
    render() {
        return (
            <div className="movieInfoContainer" style={{zIndex:this.props.visible}}>
                {this.displayMovieInformation(this.props.currentMovieDisplaying)}
                {this.mapCast(this.props.currentCast)}
                {/*{this.mapCrew(this.props.currentCrew)}*/}
            </div>
        )
    }
}

