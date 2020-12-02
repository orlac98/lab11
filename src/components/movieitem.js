import React from 'react';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
                        <Button variant="danger" onClick={this.DeleteMovie}> Delete</Button>
                  <Link to={'/edit/'+this.props.movie._id} className='btn btn-primary'> Edit</Link>
                    </Card.Body>
                    
                </Card>
            </div>
        );
    }

}

//link added for edit button to chnge url of application







//onlcick added to delete movie with button