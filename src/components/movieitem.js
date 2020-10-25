import React from 'react';
// import 


export class Movieitem extends React.Component{

    render(){
        return(
            <div>
            
            <h4> {this.props.movie.Title}</h4>
            <p> {this.props.movie.Year}</p>
            <img src= {this.props.movie.Poster} width="200" height="200"></img>

            </div>
        );
    }

}
// added the create.js file to the app js 