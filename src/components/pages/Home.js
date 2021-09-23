import { Component } from 'react';
import { Link } from 'react-router-dom';
import allbeers from '../../img/allbeers.png';
import randomBeer from '../../img/random-beer.png';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section>
                <article>
                    <Link to="/allbeers"><img src={allbeers} alt="" /></Link>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, perspiciatis quis tempora, consectetur assumenda, laudantium cumque eveniet fuga impedit voluptates velit enim repellat. Quod ipsa, itaque temporibus molestiae excepturi distinctio.</p>
                </article>

                <article>
                    <Link to="/randombeer"><img src={randomBeer} alt="" /></Link>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, perspiciatis quis tempora, consectetur assumenda, laudantium cumque eveniet fuga impedit voluptates velit enim repellat. Quod ipsa, itaque temporibus molestiae excepturi distinctio.</p>
                </article>
            </section>
        );
    }
}


export default Home;