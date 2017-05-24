import React from 'react';

export default class RenderDaysInMonth extends React.Component {
    constructor() {
        super();
    }
         componentDidUpdate(currentMovie) {
         debugger;
            console.log(currentMovie);
            if(this.props.currentMovie.length = 0) {
                const sidebar = (
                    <div>
                        {currentMovie.map((movInfo) =>
                            <div key={movInfo.id}>
                                {movInfo.title}
                            </div>
                        )}
                    </div>
                );
                const content = currentMovie.map((movInfo) =>
                    <div key={movInfo.id}>
                        <h3>{movInfo.title}</h3>
                        <p>{movInfo.overview}</p>
                    </div>
                );
                return (
                    <div>
                        {sidebar}
                        <hr />
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
        //         </div>
        //     </div>);
        // console.log(movieInfoScreen);

    render() {
        return (
            <div className="monthContainer">
                {this.componentDidUpdate(this.props.currentMovieDisplaying)}
            </div>
        )
    }
}

