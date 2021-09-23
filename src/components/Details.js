import React, { Component } from 'react';

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
    render() {
        console.log(this.props);
        console.log(this.state.beers);
        return (
            <div>
                <article key={this.state.isLoading && this.state.beers._id}>
                    <img src={this.state.isLoading && this.state.beers.image_url} alt="" />
                </article>
            </div>

        );
    }
}

export default Details;



