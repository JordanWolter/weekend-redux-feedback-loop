import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Feeling.css'


function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();
    let feelingNum;
    

    useEffect(() => {
        // executeRating(ratingStar)
    });

    const setFeeling = (num) => {
        feelingNum = num;

        console.log('NUMBER', feelingNum);
        
    }


    const submit = () => {

        console.log('FEELING NUM', feelingNum);

        dispatch({

            type: 'SET_FEELING',
            payload: feelingNum

        });

        history.push('/understanding');
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <div className="rating">
                <i className="rating__star far fa-star" onChange={setFeeling(1)}></i>
                <i className="rating__star far fa-star" onChange={setFeeling(2)}></i>
                <i className="rating__star far fa-star" onChange={setFeeling(3)}></i>
                <i className="rating__star far fa-star" onClick={setFeeling(4)}></i>
                <i className="rating__star far fa-star" onClick={setFeeling(5)}></i>
            </div>
            <button onClick={submit}>Next</button>
        </>
    )
}
export default Feeling;




// const ratingStars = [...document.getElementsByClassName("rating__star")];
// const ratingResult = document.querySelector(".rating__result");

// printRatingResult(ratingResult);

// function executeRating(stars, result) {
//    const starClassActive = "rating__star fas fa-star";
//    const starClassUnactive = "rating__star far fa-star";
//    const starsLength = stars.length;
//    let i;
//    stars.map((star) => {
//       star.onclick = () => {
//          i = stars.indexOf(star);

//          if (star.className.indexOf(starClassUnactive) !== -1) {
//             printRatingResult(result, i + 1);
//             for (i; i >= 0; --i) stars[i].className = starClassActive;
//          } else {
//             printRatingResult(result, i);
//             for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
//          }
//       };
//    });
// }

// function printRatingResult(result, num = 0) {
//    result.textContent = `${num}/5`;
// }

// executeRating(ratingStars, ratingResult);
