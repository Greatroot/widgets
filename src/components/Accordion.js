import React, { useState } from 'react';

const Accordion = ( {items }) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const updateIndex = (newIndex) => {
        setCurrentIndex(newIndex);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === currentIndex ? "active" : "";

        return(
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => updateIndex(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return(
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;

//en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming