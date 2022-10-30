import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";


function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [rating, setRating] = useState(0)


    // const addRating = (id) => {
    //     console.log('id', id)
    //     switch (id) {
    //         case '1':
    //             return setRating(1)
    //         case '2':
    //             return setRating(2)
    //         case '3':
    //             return setRating(3)
    //         case '4':
    //             return setRating(4)
    //         case '5':
    //             return setRating(5)
    //     }
    // }


    const submit = () => {

        dispatch({

            type: 'SET_UNDERSTANDING',
            payload: rating

        });

        history.push('/support');
    }

    return(
        <>
           <h2>How well are you understanding the content?</h2>
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

export default Understanding;