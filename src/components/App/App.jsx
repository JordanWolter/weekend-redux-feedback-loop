import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import FeedbackComment from '../FeedbackComment/FeedbackComment';

function App() {

  const submitFeedback = (feedback) => {

    console.log('feedback', feedback)

    axios({

      method: 'POST',
      url: '/api/feedback',
      data: feedback

    }).then((response) => {
    

    }).catch((err) => {
      console.log('ERROR in /feedback POST');

    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <Router>

          <Route exact path='/'>
            <Feeling />
          </Route>

          <Route exact path='/understanding'>
            <Understanding />
          </Route>

          <Route exact path='/support'>
            <Support />
          </Route>

          <Route exact path='/comment'>
            <FeedbackComment submitFeedback={submitFeedback} />
          </Route>

        </Router>

      </header>
    </div>
  );
}

export default App;
