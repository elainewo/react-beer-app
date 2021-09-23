import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => response.json())
            .then(json => this.setState({ randomBeer: json }, () => {
                this.setState({ isLoading: true });
            }))
    }
    render() {
        console.log(this.state.randomBeer);
        return (
            <section>
                <article key={this.state.isLoading && this.state.randomBeer._id}>
                    <img src={this.state.isLoading && this.state.randomBeer.image_url} alt="" />
                </article>
            </section>
        );
    }
}

export default RandomBeer;