import DatePicker from 'sassy-datepicker';
import { useEffect, useState } from 'react';

const takenMedicineArray = [];
const Dashboard = () => {
    //Initial values of Name and Schedule
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
    }, [value]);

    //Current time
    const Time = new Date();
    const currentHour = Time.getHours();
    const currentMinute = Time.getMinutes();

    //To fix potential bug we added padStart method
    const currentTime = `${currentHour
        .toString()
        .padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;

    //Upcoming Medicines array
    const [upcomingMedicine, setUpcomingMedicine] = useState(
        value.schedule.filter((el) => el.mTime > currentTime)
    );
    useEffect(() => {
        setUpcomingMedicine(
            value.schedule.filter((el) => el.mTime > currentTime)
        );
    }, [value]);

    //Logic to show LeftMedicine
    //Loop through takenMedicine array and check if any taken medicine is present
    function checkedMedicine(mName) {
        let sum = 0;
        for (const name of takenMedicineArray) {
            if (name === mName) sum++;
        }
        return sum;
    }

    //Initial value of leftMedicine array
    const [leftMedicine, setLeftMedicine] = useState({});

    //Update leftMedicine array value
    useEffect(() => {
        setLeftMedicine(
            value.schedule.filter(
                (el) => el.mTime <= currentTime && !checkedMedicine(el.mName)
            )
        );
    }, [value]);

    //Checkbox Handler
    async function checkHandler(e) {
        const takenMedicine = e.target
            .closest('tr')
            .querySelector('.missedMedicineName').textContent;

        takenMedicineArray.push(takenMedicine);
        const medicineWhoseStockIsToUpdate = value.schedule.filter(
            (el) => el.mName === takenMedicine
        );

        await fetch(
            `http://localhost:5000/update/${localStorage.getItem(
                'userEmail'
            )}/${takenMedicine}`,
            {
                method: 'POST',
                body: JSON.stringify(medicineWhoseStockIsToUpdate),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => response);

        setLeftMedicine(
            leftMedicine.filter((el) => el.mName !== takenMedicine)
        );
    }

    //UI
    return (
        <div className="dashboard animate__animated animate__fadeInUp">
            <h1 className="text-[#219653]">
                <span className="font-extralight">Hello, </span>
                {value.name.substring(0, value.name.indexOf(' '))}
            </h1>
            <div className="activity grid grid-cols-12 mb-4 gap-2">
                <div className={'activity col-span-4 h-[320px]'}>
                    <p>Activity:</p>
                    <div
                        className={`activity_container  p-3  rounded bg-gradient-to-br from-[#38EF7D] to-[#11998E] shadow-lg h-full `}
                    >
                        {upcomingMedicine.length ? (
                            <>
                                <div className="title flex justify-between overflow-y-scroll">
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
                                    {`${
                                        value.schedule[0].mName &&
                                        upcomingMedicine[0].mName
                                    } (${
                                        value.schedule[0].mName &&
                                        upcomingMedicine[0].mStock
                                    })`}
                                </h3>
                                <h3 className="font-light text-blue-900">{`Time: ${
                                    value.schedule[0].mName &&
                                    upcomingMedicine[0].mTime
                                }`}</h3>
                                <h3 className="font-light text-blue-900">{`Doses: ${
                                    value.schedule[0].mName &&
                                    upcomingMedicine[0].mDoses
                                }`}</h3>
                                <h5 className=" text-blue-900">
                                    Want to know about this medicine?
                                </h5>
                                <p>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        className="no-underline text-lg text-white"
                                        href={`https://www.webmd.com/search/search_results/default.aspx?query=${upcomingMedicine[0].mName}`}
                                    >
                                        Click here
                                    </a>
                                </p>
                            </>
                        ) : (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-50 w-50 text-green-600 mx-auto"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    />
                                </svg>
                                <h3
                                    className={
                                        'text-gray-900 mx-auto font-medium text-center'
                                    }
                                >
                                    Completed Daily Schedule 🎉
                                </h3>
                            </>
                        )}
                    </div>
                </div>
                <div className={'activity col-start-5 col-end-9 h-[320px]'}>
                    <p>Medicines not taken:</p>
                    <div className="activity_container p-3 rounded bg-gradient-to-br from-yellow-300 to-yellow-600 shadow-lg h-full">
                        {leftMedicine.length ? (
                            <>
                                <div className="title flex justify-between ">
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
                                    Missed Medicines {leftMedicine.length}
                                </h3>
                                <div className="missedMedicineContainer flex flex-col max-h-[200px]  overflow-y-scroll overflow-x-hidden">
                                    <div className="py-2 inline-block min-w-full">
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
                                                {leftMedicine.map(
                                                    (el, index) => {
                                                        return (
                                                            <tr
                                                                className="missedMedicineContainer even:border-white border-y border-white"
                                                                key={index}
                                                            >
                                                                <td className="missedMedicineName text-sm text-white font-medium px-6 py-2 whitespace-nowrap">
                                                                    {el.mName}
                                                                </td>
                                                                <td className="text-sm text-white font-light px-6 py-2 whitespace-nowrap border-x">
                                                                    {el.mTime}
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
                            </>
                        ) : (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-50 w-50 text-yellow-600 m-auto"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    />
                                </svg>
                                <h3
                                    className={
                                        'text-gray-900 mx-auto font-medium text-center'
                                    }
                                >
                                    No missed medicines.
                                    <br /> You are all set.. 🎉
                                </h3>
                            </>
                        )}
                    </div>
                </div>
                <div className={'activity col-start-9 col-end-13'}>
                    <p>Calendar:</p>
                    <div className="activity_container">
                        <DatePicker className=" h-[320px] w-auto" />
                    </div>
                </div>
            </div>
            <div className="upcoming_table h-[180px] overflow-y-scroll overflow-x-hidden">
                <div className={'table_container'}>
                    <p>Upcoming:</p>
                    <table className="table  rounded-3xl border-2 ">
                        <thead>
                            <tr className={'h-12 border-b-2 border-gray-500'}>
                                <th className={'px-2'}>Name</th>
                                <th>Time</th>
                                <th>Dosage</th>
                                <th>Stock left</th>
                            </tr>
                        </thead>
                        <tbody>
                            {upcomingMedicine.length ? (
                                <>
                                    {upcomingMedicine.map((el, index) => {
                                        return (
                                            <tr
                                                className={`border-b-2 border-gray-500 ${
                                                    +el.mStock <= +el.mDoses
                                                        ? 'bg-rose-500'
                                                        : ''
                                                }`}
                                                key={index}
                                            >
                                                <td className={'px-2'}>
                                                    {el.mName}
                                                </td>
                                                <td>{el.mTime}</td>
                                                <td>{el.mDoses}</td>
                                                <td>{el.mStock}</td>
                                            </tr>
                                        );
                                    })}
                                </>
                            ) : (
                                <tr
                                    className={
                                        'border-b-2 border-gray-500 bg-gradient-to-r from-[#38EF7D] to-[#11998E]'
                                    }
                                >
                                    <td colSpan={5} className={'text-center'}>
                                        All done{' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 inline text-green-700"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                            />
                                        </svg>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
