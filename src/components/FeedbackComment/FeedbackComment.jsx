
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FeedbackComment({submitFeedback}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const [comment, setComment] = useState('');



    const changeComment = (event) => {

        setComment(event.target.value)

    }

    
    const handleSubmit = () => {

        console.log('COMMENT', comment)

            dispatch({
                type: 'SET_COMMENT',
                payload: comment
            });
    
            history.push('/submit');
    
    }

    return(
        <>
        <input type= 'text' placeholder="Leave Comment" onChange={changeComment}/>
        <button onClick={handleSubmit}>Next</button>
        </>
    )
}
export default FeedbackComment;