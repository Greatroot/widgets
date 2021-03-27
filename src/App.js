import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: "What is React?",
        content: "React is a front-end JavaScript framework."
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among developers."
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components."
    }

]

export default () => { // Interesting way to write your App component.

    return(
        <div>
            <Accordion items={ items }/>
        </div>
    );
}