import { useEffect } from 'react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Feeling.css'


function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0)

    const submit = () => {

        dispatch({

            type: 'SET_FEELING',
            payload: rating

        });

        history.push('/understanding');
    };

    // const [rating, setRating] = useState(0);

    // console.log('RAING', rating)

    // const handleRatingChange = (event) => {
    //     setRating(3)
    // }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <div className="rating">
                <span className="rating__result"></span>
                <i className="rating__star far fa-star" onClick={() => setRating(1)}></i>
                <i className="rating__star far fa-star" onClick={() => setRating(2)}></i>
                <i className="rating__star far fa-star" onClick={() => setRating(3)}></i>
                <i className="rating__star far fa-star" onClick={() => setRating(4)}></i>
                <i className="rating__star far fa-star" onClick={() => setRating(5)}></i>
            </div>
            <button onClick={submit}>Next</button>
        </>
    )
}
export default Feeling;
