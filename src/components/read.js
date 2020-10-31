import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

// import 


export class Read extends React.Component {

    state = {
        movies: []

    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((response) => {
                this.setState({ movies: response.data.Search })
            }

            )
            .catch((error)=>{console.log(error)}
            );
    }


    render() {
        return (
            <div>
                <h1>This is the Movies.</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }


}



//added the read. js file to the app.js

//state object and object called movies added json with movie info

//movies component imported 
//movies component i=embedded in read component


//lab5 
// imported axios package
//Promise made
//Arrow functions added 
//data can be read from live api link isnetad of having to put all info in ourselves


