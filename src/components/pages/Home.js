import { Component } from 'react';
import { Link } from 'react-router-dom';
import allbeers from '../../img/allbeers.png';
import randomBeer from '../../img/random-beer.png';
import chooseBeer from '../../img/choose-beer.png';
import addBeer from '../../img/add-beer.png';
import Collapsible from 'react-collapsible';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section className="home">
                <h1>Beer Showcase</h1>
                <div>
                    <Collapsible trigger="All Beers">
                        <article>
                            <Link to="/allbeers"><img src={allbeers} alt="" /></Link>
                            <p>We truly believe that there is a beer for everyone. Quality craft beer produced by independent breweries. Let us help you find yours.</p>
                        </article>
                    </Collapsible>
                    <Collapsible trigger="Random Beer">
                        <article>
                            <Link to="/randombeer"><img src={randomBeer} alt="" /></Link>
                            <p>The style and breweries vary each.  To give you an idea of what beers is in our collection - click here to get a random taste.</p>
                        </article>
                    </Collapsible>
                    <Collapsible trigger="Choose a Beer">
                        <article>
                            <Link to="/searchbeer"><img src={chooseBeer} alt="" /></Link>
                            <p>Here you will find the list of hype craft beer alongside classic European beers. Think the best beer selection you've ever seen!</p>
                        </article>
                    </Collapsible>
                    <Collapsible trigger="Add your Beer">
                        <article>
                            <Link to="/beerform"><img src={addBeer} alt="" /></Link>
                            <p>Have your own Beer collection - add your Beer!</p>
                        </article>
                    </Collapsible>
                </div>
                <p>Made with <span>💛</span> by elainewo</p>
            </section>
        );
    }
}

export default Home;