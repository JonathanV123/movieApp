import React from 'react';

export default class MultipleMovieModal extends React.Component {
    constructor() {
        super();
        this.multipleMovieModal = this.multipleMovieModal.bind(this);
        this.releaseDate = this.releaseDate.bind(this);
        this.modalMovieClick = this.modalMovieClick.bind(this);
    }
    modalMovieClick(data){
            this.props.onMovieClick(data);
    }
    multipleMovieModal(movieData) {
        return (
            movieData.map(function (item) {
                return (
                    <div key={item.id} className="movieModal" data={item}
                         style={{backgroundImage: "url(" + "https://image.tmdb.org/t/p/w342" + item.poster_path + ")"}}
                         onClick={this.modalMovieClick.bind(this, item)}
                    >
                    </div>
                )
            }.bind(this))
        )
    }
    releaseDate(){
        let dateDashReplacement = this.props.movieData[0].release_date.replace(/-/g, "/");
        let date = new Date(dateDashReplacement).toString().slice(0,15);
        return(
            <h2 className ="pinkColor">{date}</h2>
        )
    }

    render() {
        return (
            <div className="modalContainer">
                <div className="moviesReleasingOnThisDay">
                    <h1 className="purpleColor">Movies releasing on</h1>
                    {this.releaseDate()}
                    <h2>Select a movie for more information</h2>
                </div>
                <div className="multipleMovieSelectionContainer">
                    {this.multipleMovieModal(this.props.movieData)}
                </div>
                <button className="button" onClick={this.props.hideMovieInformation}>
                    Back to Calendar
                </button>
            </div>
        )
    }
}