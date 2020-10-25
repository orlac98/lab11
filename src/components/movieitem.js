import React from 'react';
// import 


export class Movieitem extends React.Component{

    render(){
        return(
            <div>
            <h1>This is the Movieitem Component.</h1>
            <h4> {this.props.movie.Title}</h4>
            <h4> {this.props.movie.Title}</h4>
            <h4> {this.props.movie.Title}</h4>
            <h4> {this.props.movie.Title}</h4>
            </div>
        );
    }

}
// added the create.js file to the app js 