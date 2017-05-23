import React from 'react';

export default class RenderIndividualDay extends React.Component {
    constructor() {
        super();
        // this.renderTitle.bind(this);
        this.renderPoster.bind(this);
    }
    // renderTitle(){
    //     if(this.props.movieData.length > 0){
    //         console.log(this.props.movieData[0].poster_path);
    //         return this.props.movieData[0].title;
    //     }
    // }
    renderPoster(){
        if(this.props.movieData.length > 0){
            return this.props.movieData[0].poster_path
        }
    }

    onClick() {
        //call this with whatever current movie
        this.props.onMovieClick(this.props.movieData[0])
    }
    render() {
        return (
            <div style={{
                width: "154px",
                height: "231px",
                border: "1px solid black",
                display: "flex",
                color:"white",
                backgroundColor:"#303030",
                alignItems:"flex-start",
                backgroundRepeat:"no-repeat",
                backgroundSize:"100%",
                fontWeight:"bold",
                backgroundImage: "url(" + "https://image.tmdb.org/t/p/w300" + this.renderPoster() + ")"}}
                 onClick={this.onClick.bind(this)}>
                <div className="dateOfDay">
                    {this.props.date.getDate()}
                </div>
                {/*{this.renderTitle()}*/}
            </div>
        )
    }
}

