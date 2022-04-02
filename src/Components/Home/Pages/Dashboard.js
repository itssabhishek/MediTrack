import DatePicker from 'sassy-datepicker';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const dummyData = [
        {
            name: 'Abc',
            time: '9.00',
        },
        {
            name: 'efg',
            time: '9.00',
        },
        {
            name: 'dfgds',
            time: '9.00',
        },
        {
            name: 'dfgd',
            time: '9.00',
        },
    ];

    const checkHandler = (e) => {
        e.target.parentNode.parentNode.remove();
    };

    const [value, setValue] = useState({
        name: '',
        schedule: [
            {
                mName: '',
            },
        ],
    });

    // This method fetches the value from the database.
    useEffect(() => {
        async function getRecords() {
            const currentUserEmail = localStorage.getItem('userEmail');
            const response = await fetch(
                `http://localhost:5000/record/${currentUserEmail}`
            );

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const returnedData = await response.json();
            setValue({
                name: returnedData.name,
                schedule: returnedData.schedule[0],
            });
        }

        getRecords().then((r) => r);
    }, [value.name]);

    return (
        <div className="dashboard animate__animated animate__fadeInUp">
            <h1 className="text-[#219653]">
                Hello,{' '}
                <span className="font-extralight">
                    {value.name.substring(0, value.name.indexOf(' '))}
                </span>
            </h1>

            <div className="activity grid grid-cols-12 mb-4 gap-2">
                <div className={'activity col-span-4'}>
                    <p>Activity:</p>
                    <div className="activity_container p-3 rounded bg-gradient-to-br from-[#38EF7D] to-[#11998E] shadow-lg">
                        <div className="title flex justify-between">
                            <h4 className="font-extralight text-4xl text-white">
                                Next...
                            </h4>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                        <h3 className="font-extrabold text-4xl text-[#127780]">
                            {`${value.schedule[0].mName} (${value.schedule[0].mStock})`}
                        </h3>
                        <h5 className="font-light text-blue-700">{`Time: ${value.schedule[0].mTime}`}</h5>
                        <h5 className="font-light text-blue-700">{`Doses: ${value.schedule[0].mDoses}`}</h5>
                        <h5 className="font-light text-blue-700">
                            Description
                        </h5>
                        <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequuntur cum cumque deserunt eos error,
                            est expedita harum in ipsum nihil nulla, odio
                            officiis pariatur possimus quia quidem reprehenderit
                            sequi voluptatibus?
                        </p>
                    </div>
                </div>
                <div className={'activity col-start-5 col-end-9 h-[320px]'}>
                    <p>Medicines not taken:</p>
                    <div className="activity_container p-3 rounded bg-gradient-to-br from-yellow-300 to-yellow-600 shadow-lg h-full">
                        <div className="title flex justify-between">
                            <h4 className="font-extralight text-4xl text-white">
                                Attention...
                            </h4>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-yellow-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-extrabold text-4xl text-yellow-900">
                            Missed Medicines (No)
                        </h3>
                        <div className="flex flex-col">
                            <div className="overflow-hidden">
                                <div className="py-2 inline-block min-w-full">
                                    <div className="overflow-hidden">
                                        <table className="w-full text-center">
                                            <thead>
                                                <tr className="odd:border-white">
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-blue-700 px-6 py-1"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-blue-700 px-6 py-1 border-x"
                                                    >
                                                        Time
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-blue-700 px-6 py-1"
                                                    >
                                                        Check if taken
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dummyData.map(
                                                    ({ name, time }, index) => {
                                                        return (
                                                            <tr
                                                                className="even:border-white border-y border-white"
                                                                key={index}
                                                            >
                                                                <td className="text-sm text-white font-medium px-6 py-2 whitespace-nowrap">
                                                                    {name}
                                                                </td>
                                                                <td className="text-sm text-white font-light px-6 py-2 whitespace-nowrap border-x">
                                                                    {time} PM
                                                                </td>
                                                                <td className="text-sm text-white font-light px-6 py-2 whitespace-nowrap">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="h-4 w-4"
                                                                        onClick={
                                                                            checkHandler
                                                                        }
                                                                    />
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'activity col-start-9 col-end-13'}>
                    <p>Calendar:</p>
                    <div className="activity_container">
                        <DatePicker className=" h-[320px] w-auto" />
                    </div>
                </div>
            </div>
            <div className="upcoming_table">
                <div className={'table_container'}>
                    <p>Upcoming:</p>
                    <table className="table w-full rounded-3xl border-2 ">
                        <thead>
                            <tr className={'h-12 border-b-2 border-gray-500'}>
                                <th className={'px-2'}>Name</th>
                                <th>Time</th>
                                <th>Dosage</th>
                                <th>Stock left</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.schedule.map((el, index) => {
                                return (
                                    <tr
                                        className={'border-b-2 border-gray-500'}
                                        key={index}
                                    >
                                        <td className={'px-2'}>{el.mName}</td>
                                        <td>{el.mTime}</td>
                                        <td>{el.mDoses}</td>
                                        <td>{el.mStock}</td>
                                        <td>
                                            Lorem ipsum dolor sit amet,
                                            consectetur
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
