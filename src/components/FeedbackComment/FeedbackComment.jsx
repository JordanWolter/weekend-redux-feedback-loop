
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FeedbackComment({submitFeedback}) {
    const databaseFeedback = useSelector( store => store );
    const dispatch = useDispatch();
    const history = useHistory();
    console.log('database', databaseFeedback)
    
    const handleSubmit = () => {
        
        submitFeedback(databaseFeedback);
    
            dispatch({
                type: 'SET_COMMENT',
            })
    
            history.push('/');
    
    }

    return(
        <>
        <input type= 'text' placeholder="Leave Comment"/>
        <button onClick={handleSubmit}>Submit Feedback</button>
        </>
    )
}
export default FeedbackComment;