import React from 'react';
import './ResultComponent.css';

class ResultComponent extends React.Component {
    render() {
        return (
            <div className="result-container">
                <h1>Quiz Completed!</h1>
                <p>Your Score: 8/10</p>
                <button className="restart-button">Restart Quiz</button>
            </div>
        );
    }
}

export default ResultComponent;
