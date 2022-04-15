import React from 'react';
import Accordion from './Edit/Accordion';

function Edit() {
    return (
        <div className="edit p-3">
            <h1 className="text-[#219653]">
                <span className="font-extralight">Edit, </span>
                Make changes in your ongoing schedule
            </h1>
            <div className="edit_table">
                <Accordion id="item1" parent="first" heading="First Schedule" />
            </div>
        </div>
    );
}

export default Edit;
