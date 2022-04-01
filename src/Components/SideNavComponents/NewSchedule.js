import classes from './NewSchedule.module.css';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import Toast from '../Notification/Toast';

const toastShower = () => {
    const toastElement = document.querySelector('.toast_container');
    toastElement.classList.toggle('hidden');
    setTimeout(() => toastElement.classList.toggle('hidden'), 2000);
};

const medicineArray = [];
const NewSchedule = () => {
    const [medicineDatails, setMedicineDetails] = useState({
        mName: '',
        mDoses: '',
        mStock: '',
        mTime: '',
    });

    const changeHandler = (e) => {
        setMedicineDetails((preValues) => {
            return {
                ...preValues,
                [e.target.id]: e.target.value,
            };
        });
    };

    const addMedicine = () => {
        medicineArray.push(medicineDatails);
        setMedicineDetails({
            mName: '',
            mDoses: '',
            mStock: '',
            mTime: '',
        });

        toastShower();
    };

    async function handleSubmit(e) {
        e.preventDefault();
        alert(
            'Medicine schedule has been submitted. Please return to home page.'
        );

        // This will send a post request to update the data in the database.
        await fetch(
            `http://localhost:5000/update/${localStorage.getItem('userEmail')}`,
            {
                method: 'POST',
                body: JSON.stringify(medicineArray),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }

    return (
        <div className="bg-white animate__animated animate__fadeInUp">
            <h1 className="p-3 font-light text-green-600">Add new schedule</h1>

            <div className="main grid grid-cols-2 grid-rows-[84vh] items-stretch">
                <form
                    className={`${classes.wrapper} border-1 border-grey-500 shadow`}
                >
                    <div className="input h-[50px] relative">
                        <input
                            type="text"
                            id="mName"
                            placeholder="Medicine Name"
                            value={medicineDatails.mName}
                            onChange={changeHandler}
                            className="input_text peer h-full w-full rounded outline-2 outline-green-600 border-2 border-blue-500 indent-3 text-lg absolute"
                        />
                        <label
                            htmlFor="mName"
                            className={`${
                                medicineDatails.mName ? 'inline' : 'hidden'
                            } peer-focus:inline text-sm text-gray-500 absolute ml-3 -mt-3 bg-white p-1`}
                        >
                            Medicine Name
                        </label>
                    </div>

                    <div className="input h-[50px] relative">
                        <input
                            type="number"
                            id="mDoses"
                            placeholder="Doses"
                            value={medicineDatails.mDoses}
                            onChange={changeHandler}
                            className="input_text peer h-full w-full rounded outline-2 outline-green-600 border-2 border-blue-500 indent-3 text-lg absolute"
                        />
                        <label
                            htmlFor="mDoses"
                            className={`
                            ${
                                medicineDatails.mDoses ? 'inline' : 'hidden'
                            } peer-focus:inline text-sm text-gray-500 absolute ml-3 -mt-3 bg-white p-1`}
                        >
                            Doses
                        </label>
                    </div>

                    <div className="input h-[50px] relative">
                        <input
                            type="number"
                            id="mStock"
                            placeholder="Stock"
                            value={medicineDatails.mStock}
                            onChange={changeHandler}
                            className="input_text peer h-full w-full rounded outline-2 outline-green-600 border-2 border-blue-500 indent-3 text-lg absolute"
                        />
                        <label
                            htmlFor="mStock"
                            className={`
                            ${
                                medicineDatails.mStock ? 'inline' : 'hidden'
                            } peer-focus:inline text-sm text-gray-500 absolute ml-3 -mt-3 bg-white p-1`}
                        >
                            Stock
                        </label>
                    </div>

                    <div className="input h-[50px] relative">
                        <input
                            type="time"
                            id="mTime"
                            placeholder="Time"
                            value={medicineDatails.mTime}
                            onChange={changeHandler}
                            onInput={(ev) =>
                                (medicineDatails.mTime = ev.target.value)
                            }
                            className="input_text peer h-full w-full rounded outline-2 outline-green-600 border-2 border-blue-500 indent-3 text-lg absolute"
                        />
                        <label
                            htmlFor="mTime"
                            className={`
                            ${
                                medicineDatails.mTime ? 'inline' : 'hidden'
                            } peer-focus:inline text-sm text-gray-500 absolute ml-3 -mt-3 bg-white p-1`}
                        >
                            Time
                        </label>
                    </div>

                    <div className="buttons flex h-12">
                        <input
                            type="submit"
                            className="submit_Button flex-1 rounded bg-green-500 hover:bg-green-600 border-2 text-lg text-white"
                            value="Submit"
                            onClick={handleSubmit}
                        />
                        <input
                            type="reset"
                            className="flex-1 border-1 border-green-600 rounded hover:bg-blue-500 hover:text-white"
                            value="Add"
                            onClick={addMedicine}
                        />
                    </div>
                </form>
                <img src={'/images/new.jpg'} alt="NewImage" />

                <Toast
                    type="notify"
                    heading={'Added'}
                    message={'You can add more medicine'}
                />

                {/*<Toast*/}
                {/*    type="success"*/}
                {/*    heading={'Submitted'}*/}
                {/*    message={*/}
                {/*        'Your schedule is created😀. Now you can go back to home page'*/}
                {/*    }*/}
                {/*/>*/}
            </div>
            <Footer />
        </div>
    );
};

export default NewSchedule;
