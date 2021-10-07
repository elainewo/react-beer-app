import React, { Component } from 'react';
import Nav from '../Nav';

class SearchBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkSearch: false,
            myQuery: "",
        }
    }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => this.setState({ beers: json }, () => {
                this.setState({ isLoading: true });
            }))
    }
    handleBack = () => {
        console.log("go back");
        this.props.history.goBack();
    }
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ myQuery: e.target.value })
        fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    searchBeer:
                        <article key={json[0]._id} className="beer-card">
                            <img src={json[0].image_url} alt="" />
                            <div>
                                <h2>{json[0].name}</h2>
                                <h3>{json[0].tagline}</h3>
                                <div>
                                    <div>
                                        <p>First brewed:</p>
                                        <p>{json[0].first_brewed}</p>
                                    </div>
                                    <div>
                                        <p>Attenuation level:</p>
                                        <p>{json[0].attenuation_level}</p>
                                    </div>
                                </div>
                                <p>{json[0].description}</p>
                            </div>
                        </article>
                })
            }, () => {
                this.setState({ checkSearch: true })
            })
    }

    render() {
        return (
            <>
                <form action="" className="beer-form">

                    <label for="beers"><h2>Choose a Beer:</h2></label>
                    <div className="custom-select">
                        <select id="beers" onChange={this.handleChange}>
                            {this.state.isLoading && this.state.beers.map(elt =>
                                <>
                                    <option value={elt.name}>{elt.name}</option>
                                </>
                            )
                            }
                        </select>
                    </div>
                </form>
                {!this.state.checkSearch && this.state.searchBeer}
                <Nav />
            </>
        );
    }
}

export default SearchBeer;



