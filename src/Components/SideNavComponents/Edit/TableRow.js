const TableRow = ({ mName, mDoses, mStock, mTime }) => {
    //Remove whole medicine from database
    async function rowRemove(e) {
        if (
            window.confirm(
                'Please confirm whether you want to delete this or not? This action cannot be revert back!'
            ) === true
        ) {
            const medicineWhichHasToBeRemoved =
                e.target.closest('tr').firstChild.textContent;
            e.target.closest('tr').remove();
            await fetch(
                `http://localhost:5000/delete/${localStorage.getItem(
                    'userEmail'
                )}/${medicineWhichHasToBeRemoved}`,
                {
                    method: 'POST',
                    body: medicineWhichHasToBeRemoved.toString(),
                }
            ).then((response) => response);
        }
    }

    //Reset changes to default value
    async function rowReset(e) {
        const response = await fetch(`http://localhost:5000/get/${mName}`);
        const returnedData = await response.json();
        const [previousState] = returnedData.filter((el) => el.mName === mName);
        e.target.closest('tr').children[0].textContent = previousState.mName;
        e.target.closest('tr').children[1].textContent = previousState.mDoses;
        e.target.closest('tr').children[2].textContent = previousState.mStock;
        e.target.closest('tr').children[3].textContent = previousState.mTime;
    }

    //Save changed data to database
    async function rowSave(e) {
        if (window.confirm('Confirm save') === true) {
            const newName = e.target.closest('tr').children[0].textContent;
            const newDoses = e.target.closest('tr').children[1].textContent;
            const newStock = e.target.closest('tr').children[2].textContent;
            const newTime = e.target.closest('tr').children[3].textContent;

            const newArray = [
                {
                    mName: newName,
                    mDoses: newDoses,
                    mStock: newStock,
                    mTime: newTime,
                },
            ];

            await fetch(
                `http://localhost:5000/record/update/${localStorage.getItem(
                    'userEmail'
                )}/${mName}`,
                {
                    method: 'POST',
                    body: JSON.stringify(newArray),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            ).then((response) => response);
        }
    }

    return (
        <tr>
            <td
                className="pt-3-half"
                contentEditable="true"
                suppressContentEditableWarning={true}
            >
                {mName}
            </td>
            <td
                className="pt-3-half"
                contentEditable="true"
                suppressContentEditableWarning={true}
            >
                {mDoses}
            </td>
            <td
                className="pt-3-half"
                contentEditable="true"
                suppressContentEditableWarning={true}
            >
                {mStock}
            </td>
            <td
                className="pt-3-half"
                contentEditable="true"
                suppressContentEditableWarning={true}
            >
                {mTime}
            </td>
            <td className="pt-3-half">
                <span className="row-reset">
                    <button
                        type="button"
                        className="w-12 h-8 rounded-full bg-blue-400"
                        onClick={rowReset}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-700 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                            />
                        </svg>
                    </button>
                </span>
            </td>
            <td className="pt-3-half">
                <span className="row-save">
                    <button
                        type="button"
                        className="w-12 h-8 rounded-full bg-green-400"
                        onClick={rowSave}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-700 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                            />
                        </svg>
                    </button>
                </span>
            </td>
            <td>
                <span className="row-remove">
                    <button
                        type="button"
                        className="w-12 h-8 rounded-full bg-rose-400"
                        onClick={rowRemove}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-rose-700 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </span>
            </td>
        </tr>
    );
};

export default TableRow;
