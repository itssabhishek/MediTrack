import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Input from '../../SideNavComponents/NewSchedule/Input';

const HmShops = () => {
    const [currentLocation, setCurrentLocation] = useState({
        lat: 19.0842,
        lng: 72.8851,
    });

    const submitHandler = (e) => {
        e.preventDefault();
        setCurrentLocation(currentLocation);
    };

    return (
        <div className="grid grid-rows-[10vh_1fr] animate__animated animate__fadeInUp">
            <h1 className="text-[#219653]">
                Search for,
                <span className="font-extralight">
                    Nearest Hospitals & Medical shops
                </span>
            </h1>
            <div className="content grid grid-cols-[40vw_1fr]">
                <div className="formAndTable col-sp">
                    <form className="map flex flex-col">
                        <div className="form_right flex flex-col w-2/3 gap-10">
                            <Input
                                type={'text'}
                                placeholder={'Location'}
                                id={'location'}
                            />
                            <Input
                                type={'number'}
                                placeholder={'Range'}
                                id={'range'}
                            />
                        </div>

                        <button type={'submit'} onClick={submitHandler}>
                            Go
                        </button>
                    </form>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="w-100">
                                        <thead className="border-b">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                >
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                >
                                                    First
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                >
                                                    Last
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                >
                                                    Handle
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    1
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Mark
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Otto
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    @mdo
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    2
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Jacob
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Thornton
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    @fat
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    3
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Larry
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Wild
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    @twitter
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map">
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyApjohiZAhnDNx4Ngt4Jg08k_A-kyv09Fc',
                        }}
                        defaultCenter={currentLocation}
                        defaultZoom={11}
                    />
                </div>
            </div>
        </div>
    );
};

export default HmShops;
