import React, { Component } from 'react';
import { ImArrowLeft2 } from "react-icons/im";
import Nav from './Nav';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({ beers: json }, () => {
                this.setState({ isLoading: true });
            }))
    }
    handleBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <>
                <article key={this.state.isLoading && this.state.beers._id} className="beer-card">
                    <img src={this.state.isLoading && this.state.beers.image_url} alt="" />
                    <div>
                        <h2>{this.state.isLoading && this.state.beers.name}</h2>
                        <h3>{this.state.isLoading && this.state.beers.tagline}</h3>
                        <div>
                            <div>
                                <p>First brewed:</p>
                                <p>{this.state.isLoading && this.state.beers.first_brewed}</p>
                            </div>
                            <div>
                                <p>Attenuation level:</p>
                                <p>{this.state.isLoading && this.state.beers.attenuation_level}</p>
                            </div>
                        </div>
                        <p>{this.state.isLoading && this.state.beers.description}</p>
                        <ImArrowLeft2 onClick={this.handleBack} className="arrow-back" />
                    </div>
                </article>
                <Nav />
            </>
        );
    }
}

export default Details;



