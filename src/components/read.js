import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

// import 


export class Read extends React.Component {

    state = {
        movies: []

    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data.movies });
            })
            .catch((error) => {
                console.log(error)
            });
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


//lab 7 took out the json blob and changed it to the new api localhost 4000 
//replace search with movies