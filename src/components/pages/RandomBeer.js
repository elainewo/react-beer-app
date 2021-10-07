import React, { Component } from 'react';
import { ImArrowLeft2 } from "react-icons/im";
import Nav from '../Nav';

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
    handleBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <>
                <section>
                    <article key={this.state.isLoading && this.state.randomBeer._id} className="beer-card">
                        <img src={this.state.isLoading && this.state.randomBeer.image_url} alt="" />
                        <div>
                            <h2>{this.state.isLoading && this.state.randomBeer.name}</h2>
                            <h3>{this.state.isLoading && this.state.randomBeer.tagline}</h3>
                            <div>
                                <div>
                                    <p>First brewed:</p>
                                    <p>{this.state.isLoading && this.state.randomBeer.first_brewed}</p>
                                </div>
                                <div>
                                    <p>Attenuation level:</p>
                                    <p>{this.state.isLoading && this.state.randomBeer.attenuation_level}</p>
                                </div>
                            </div>
                            <p>{this.state.isLoading && this.state.randomBeer.description}</p>
                            <ImArrowLeft2 onClick={this.handleBack} className="arrow-back" />
                        </div>
                    </article>
                </section>
                <Nav />
            </>
        );
    }
}

export default RandomBeer;