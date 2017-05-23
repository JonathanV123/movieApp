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
    render() {
        return (
            <div style={{
                width: "154px",
                height: "100px",
                border: "1px solid black",
                display: "flex",
                color:"white",
                backgroundColor:"#303030",
                alignItems:"flex-start",
                backgroundRepeat:"no-repeat",
                backgroundSize:"154px 100px",
                backgroundImage: "url(" + "https://image.tmdb.org/t/p/w154" + this.renderPoster() + ")"}}>
                {this.props.date.getDate()}
                {/*{this.renderTitle()}*/}
            </div>
        )
    }
}

