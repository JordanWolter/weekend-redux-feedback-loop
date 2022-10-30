import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import Star from '../Star/Star';

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [rating, setRating] = useState(0)
    // const ratingStars = [...document.getElementsByClassName("rating__star")];
    // const ratingResult = [document.querySelector(".rating__result")];
    // useEffect(() => {

    // })

    // executeRating(ratingStars, ratingResult);
    // printRatingResult(ratingResult);
    // function executeRating(stars, result) {
    //     const starClassActive = "rating__star fas fa-star";
    //     const starClassUnactive = "rating__star far fa-star";
    //     const starsLength = stars.length;
    //     let i;
    //     stars.map((star) => {
    //         star.onClick = () => {
    //             i = stars.indexOf(star);

    //             if (star.className.indexOf(starClassUnactive) !== -1) {
    //                 printRatingResult(result, i + 1);
    //                 for (i; i >= 0; --i) stars[i].className = starClassActive;
    //             } else {
    //                 printRatingResult(result, i);
    //                 for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
    //             }
    //         };
    //     });
    // }

    // function printRatingResult(result, num = 0) {
    //     result.textContent = `${num}/5`;
    //     console.log(result.textContent)
    // }

    // let rating;

    // const setRating = (id) => {
    //     console.log('id', id)
    //     switch (id) {
    //         case '1':
    //             return rating = 1;
    //         case '2':
    //             return rating = 2;
    //         case '3':
    //             return rating = 3;
    //         case '4':
    //             return rating = 4;
    //         case '5':
    //             return rating = 5;
    //     }
    // }

    const submit = () => {

        dispatch({

            type: 'SET_SUPPORT',
            payload: rating

        });

        history.push('/comment');
    }

    return (
        <>
            <h2>How well are you being supported?</h2>
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
export default Support;