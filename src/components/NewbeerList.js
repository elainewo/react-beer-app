import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NewbeerList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setState] = useState(false)

    useEffect(() => {
        axios
            .get('https://615d618512571a001720759e.mockapi.io/beerapp/newbeer')
            .then(res => {
                setState(true);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Your Beerlist</h2>

            {isLoading && posts.map((e) =>
                <article key={e.id} className="beer-card">
                    <img src={e.image_url} alt="" />
                    <div>
                        <h2>{e.name}</h2>
                        <h3>{e.tagline}</h3>
                        <div>
                            <div>
                                <p>First brewed:</p>
                                <p>{e.first_brewed}</p>
                            </div>
                            <div>
                                <p>Attenuation level:</p>
                                <p>{e.attenuation_level}</p>
                            </div>
                        </div>
                        <p>{e.description}</p>
                    </div>
                </article>
            )}
        </>);
}

export default NewbeerList;