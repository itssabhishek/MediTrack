import TableRow from './TableRow';

const Table = () => {
    return (
        <section className="editable_table">
            {/*Editable table*/}
            <div className="editable_table--container">
                <div className="card-body">
                    <div id="table" className="table-editable">
                        <span className="table-add float-right">
                            <a href="#!" className="text-success">
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
                            </a>
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
                                <TableRow />
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
