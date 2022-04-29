import TableRow from './TableRow';
import { useEffect, useState } from 'react';

const Table = () => {
    //Initial values of Name and Schedule
    const [value, setValue] = useState({
        schedule: [
            {
                mName: 'Loading',
                mDoses: 'Loading',
                mStock: 'Loading',
                mTime: 'Loading',
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
                schedule: returnedData.schedule[0].sort(
                    (a, b) => a.mTime - b.mTime
                ),
            });
        }

        getRecords().then((r) => r);
    }, []);

    //To add new Row
    const newTableRow = () => {
        setValue({
            schedule: [
                ...value.schedule,
                {
                    mName: 'Medicine Name',
                    mDoses: 'No of doses',
                    mStock: 'Available stock',
                    mTime: 'Time',
                },
            ],
        });
    };

    return (
        <section className="editable_table">
            {/*Editable table*/}
            <div className="editable_table--container">
                <div className="card-body">
                    <div id="table" className="table-editable">
                        <span className="table-add float-right">
                            <button
                                className="text-success"
                                onClick={newTableRow}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <table className="table table-bordered table-responsive-md text-center">
                            <thead>
                                <tr>
                                    <th className="text-center">
                                        Medicine Name
                                    </th>
                                    <th className="text-center">Doses</th>
                                    <th className="text-center">Stock</th>
                                    <th className="text-center">Time</th>
                                    <th className="text-center">Reset</th>
                                    <th className="text-center">Save</th>
                                    <th className="text-center">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {value.schedule.map((el, index) => (
                                    <TableRow
                                        mName={el.mName}
                                        mDoses={el.mDoses}
                                        mStock={el.mStock}
                                        mTime={el.mTime}
                                        key={index}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*Editable table */}
        </section>
    );
};

export default Table;
