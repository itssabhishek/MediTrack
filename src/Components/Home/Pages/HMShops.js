import React, { useState } from 'react';
import Input from '../../SideNavComponents/NewSchedule/Input';

const HmShops = () => {
    const [currentValues, setCurrentValues] = useState({
        location: 'Thane',
        zoom: 14,
    });

    const changeHandler = (e) => {
        setCurrentValues((prev) => {
            return {
                ...prev,
                [e.target.id]: e.target.value,
            };
        });
    };

    return (
        <div className="hmShops animate__animated animate__fadeInUp">
            <h1 className="text-[#219653]">
                <span className="font-extralight">Search for, </span>
                Nearest Hospitals & Medical shops
            </h1>

            <div className="content grid grid-rows-[70px_65vh]">
                <form className="map w-50">
                    <div className="form_right flex  gap-10">
                        <Input
                            type={'text'}
                            placeholder={'Location'}
                            id={'location'}
                            value={currentValues.location}
                            onChange={changeHandler}
                        />
                        <Input
                            type={'number'}
                            placeholder={'Zoom (between 1 to 21)'}
                            id={'zoom'}
                            max={21}
                            value={currentValues.zoom}
                            onChange={changeHandler}
                        />
                    </div>
                </form>

                <div id="map">
                    <iframe
                        title="Google map"
                        className="h-full w-full"
                        frameBorder="0"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyDvU8bn-zKbL0Wjl5D2AfbLjwHTbxzWZsA&q=hospital+in+${
                            currentValues.location || 'Thane'
                        }&zoom=${currentValues.zoom || 14}`}
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default HmShops;
