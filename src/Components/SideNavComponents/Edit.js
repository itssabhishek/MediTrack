import React from 'react';
import Accordion from './Edit/Accordion';

function Edit() {
    return (
        <div className="edit p-3">
            <h1 className="font-medium text-green-600">Edit</h1>
            <p className="font-light text-green-600 text-xl">
                Choose any schedule to edit
            </p>
            <div className="edit_table">
                <Accordion id="item1" parent="first" heading="First Schedule" />
            </div>
        </div>
    );
}

export default Edit;
