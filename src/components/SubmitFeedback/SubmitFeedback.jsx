import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function SubmitFeedback({submitFeedback}) {
    const history = useHistory()
    const databaseFeedback = useSelector( store => store );

    console.log('database', databaseFeedback);

    const handleSubmit = () => {

        submitFeedback(databaseFeedback);

        history.push('/');

}

    return(
        <>
        <button onClick={handleSubmit}>Submit Feedback</button>
        </>
    )
}

export default SubmitFeedback;