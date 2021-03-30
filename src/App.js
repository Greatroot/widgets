import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Color Blue",
        value: "blue"
    },
]

export default () => { // Interesting way to write your App component.
    const [selected, setSelected] = useState({
        label: 'Select a Color',
        value: '',
    });

    return(
        <div>
            {/*<Accordion items={ items }/>*/}
            {/*<Search />*/}
            <Dropdown options={options}
                      dropDownLabel="Select a Color"
                      selected={selected}
                      onSelectedChange={setSelected}
            />
        </div>
    );
}