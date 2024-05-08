import React from 'react';
import './QuizComponent.css';

class QuizComponent extends React.Component {
    render() {
        return (
            <div className="quiz-container">
                <h2>Question 1</h2>
                <p>This is a sample question</p>
                <div className="options">
                    <button>Option 1</button>
                    <button>Option 2</button>
                    <button>Option 3</button>
                    <button>Option 4</button>
                </div>
                <button className="submit-button">Submit</button>
            </div>
        );
    }
}

export default QuizComponent;
