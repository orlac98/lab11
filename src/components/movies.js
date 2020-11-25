import React from 'react';
import { Movieitem } from './movieitem';
// import 


export class Movies extends React.Component{

    render(){
        return this.props.movies.map( (movie)=> {
            return <Movieitem movie={movie} ReloadData={this.props.ReloadData}></Movieitem>

        } )
           
        
    }

}
// added the Movies.js component added

//movie item component embedded in read component 

//function added

// map function used to split the movie info to display seperately 