import React from 'react';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import axios from 'axios';


export class Movieitem extends React.Component {

    constructor(){
        super();
 this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    //method addded
    DeleteMovie(e){
        e.preventDefault();
   
    console.log('Delete:' +this.props.movie._id);

    axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
    .then()
    .catch();
    
}
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>

                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>

                            <footer className="blockquote-footer">
                                <p> {this.props.movie.Year}</p>
                            </footer>
                        </blockquote>

                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}> Delete</Button>
                </Card>
            </div>
        );
    }

}
// added the create.js file to the app js

// card from react bootstrap added to display movie info neater

//onlcick added to delete movie with button