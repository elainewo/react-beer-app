import React, { useState } from 'react';
import NewbeerList from '../NewbeerList';
import Nav from '../Nav';
import axios from 'axios';

const BeerForm = () => {
    const url = "https://615d618512571a001720759e.mockapi.io/beerapp/newbeer";
    const [data, setData] = useState({
        image_url: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: "",
        description: "",
        contributed_by: "",
    })
    const [isLoading, setState] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const submit = (e) => {
        e.preventDefault();

        axios.post(url, {
            image_url: data.url,
            name: data.name,
            tagline: data.tagline,
            first_brewed: parseInt(data.first_brewed),
            attenuation_level: parseInt(data.attenuation_level),
            description: data.description,
            contributed_by: data.contributed,
        })
            .then(res => {
                setState(true)
                setData({
                    url: "",
                    name: "",
                    tagline: "",
                    first_brewed: "",
                    attenuation_level: "",
                    description: "",
                    contributed_by: "",
                })
            })
    }

    const handelReset = () => {
        setState(false);
        setToggle(!toggle);
    }

    function handleChange(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }

    return (
        <section>
            <form onSubmit={(e) => submit(e)} id="beerForm" className={!toggle ? "show" : "hide"}>
                <fieldset>
                    <div>
                        <h2>Create your own Beerlist</h2>
                        <input onChange={(e) => handleChange(e)} id="url" value={data.url} placeholder="image-url" type="url" />
                        <input onChange={(e) => handleChange(e)} id="name" value={data.name} placeholder="name" type="text" name="" />
                        <input onChange={(e) => handleChange(e)} id="tagline" value={data.tagline} placeholder="tagline" type="text" />
                        <input onChange={(e) => handleChange(e)} id="first_brewed" value={data.first_brewed} placeholder="first brewed" type="date" />
                        <input onChange={(e) => handleChange(e)} id="attenuation_level" value={data.attenuation_level} placeholder="attenuation level" type="number" />
                        <textarea onChange={(e) => handleChange(e)} id="description" value={data.description} placeholder="description" cols="6" rows="4"></textarea>
                        <input onChange={(e) => handleChange(e)} id="contributed_by" value={data.contributed_by} placeholder="contributed by" type="text" />
                    </div>
                    <div>
                        <button onClick={handleToggle} className={!toggle ? "show" : "hide"}>Submit</button>
                    </div>
                </fieldset>
            </form>
            <button onClick={handelReset} className={isLoading ? "show center" : "hide"}>Add more Beer</button>
            {(isLoading ? <NewbeerList /> : "") || (isLoading && toggle ? <NewbeerList /> : "")}

            <Nav />
        </section>
    );
}

export default BeerForm;