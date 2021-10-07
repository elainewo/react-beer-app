import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import { StyledButton } from "../styles/Button.styled";

class AllBeers extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => this.setState({ beers: json }, () => {
                this.setState({ isLoading: true });
            }))
    }

    render() {
        return (
            <>
                <section className="all-beers">
                    <h1>All Beers</h1>

                    {this.state.isLoading && this.state.beers.map(elt =>
                        <article key={elt._id}>
                            <img src={elt.image_url} alt="" />
                            <div>
                                <h2>{elt.name}</h2>
                                <h3>{elt.tagline}</h3>
                                <p>Created by: {elt.name}</p>
                                <StyledButton>
                                    <Link className="button-link" to={`/details/${elt._id}`}>Details</Link>
                                </StyledButton>
                            </div>
                        </article>
                    )}
                </section>
                <Nav />
            </>
        );
    }
}

export default AllBeers;