import DatePicker from 'sassy-datepicker';
const Dashboard = () => {
    return (
        <div className="dashboard p-3 ">
            <h1 className="text-[#219653]">
                Hello, <span className="font-extralight">Abhishek</span>
            </h1>

            <div>
                <div className="activity grid grid-cols-12 mb-4">
                    <div className={'activity col-span-4'}>
                        <p>Activity:</p>
                        <div className="activity_container p-3 rounded bg-gradient-to-br from-[#38EF7D] to-[#11998E] shadow-lg">
                            <h4 className="font-extralight text-4xl text-white">
                                Next...
                            </h4>
                            <h3 className="font-extrabold text-4xl text-[#127780]">
                                Medicine Name (stock)
                            </h3>
                            <h5 className="font-light text-blue-700">Time</h5>
                            <h5 className="font-light text-blue-700">Dosage</h5>
                            <h5 className="font-light text-blue-700">
                                Description
                            </h5>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Consequuntur cum cumque
                                deserunt eos error, est expedita harum in ipsum
                                nihil nulla, odio officiis pariatur possimus
                                quia quidem reprehenderit sequi voluptatibus?
                            </p>
                        </div>
                    </div>
                    <div className={'activity col-start-8 col-end-13'}>
                        <p>Calendar:</p>
                        <div className="activity_container">
                            <DatePicker
                                className="h-[320px]"
                                style={{ width: '500px' }}
                            />
                        </div>
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
                            <tr className={'border-b-2 border-gray-500'}>
                                <td className={'px-2'}>ABC</td>
                                <td>07:00</td>
                                <td>1</td>
                                <td>5</td>
                                <td>Lorem ipsum dolor sit amet, consectetur</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
