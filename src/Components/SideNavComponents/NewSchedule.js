import classes from './NewSchedule.module.css';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import Toast from '../Notification/Toast';
import { useNavigate } from 'react-router-dom';
import Input from './NewSchedule/Input';

const medicineArray = [];
const NewSchedule = () => {
    let navigate = useNavigate();
    const [medicineDatails, setMedicineDetails] = useState({
        mName: '',
        mDoses: '',
        mStock: '',
        mTime: '',
    });

    //To take values from Input
    const changeHandler = (e) => {
        setMedicineDetails((preValues) => {
            return {
                ...preValues,
                [e.target.id]: e.target.value,
            };
        });
    };

    //Notify Toast Viewer
    const [showNotifyToast, setShowNotifyToastValue] = useState(false);
    const notifyToasterShower = () => {
        setShowNotifyToastValue(!showNotifyToast);
        setTimeout(() => setShowNotifyToastValue(showNotifyToast), 2000);
    };

    //Add medicines in MedicineArray
    const addMedicine = () => {
        if (
            medicineDatails.mName &&
            medicineDatails.mDoses &&
            medicineDatails.mStock &&
            medicineDatails.mTime
        ) {
            if (+medicineDatails.mDoses > +medicineDatails.mStock) {
                alert("Invalid entry. Doses couldn't be more than stock");
            } else {
                notifyToasterShower();
                medicineArray.push(medicineDatails);
                setMedicineDetails({
                    mName: '',
                    mDoses: '',
                    mStock: '',
                    mTime: '',
                });
            }
        } else {
            alert('Please enter details correctly');
        }
    };

    //Success Toast Viewer
    const [showSuccessToast, setShowSuccessToastValue] = useState(false);
    const successToasterShower = () => {
        setShowSuccessToastValue(!showSuccessToast);
        setTimeout(() => successToasterShower(showSuccessToast), 2000);
    };

    //Send MedicineArray to Database
    async function handleSubmit(e) {
        e.preventDefault();
        if (medicineArray.length) {
            medicineArray.sort(
                (a, b) => a.mTime.substring(0, 2) - b.mTime.substring(0, 2)
            );
            successToasterShower();
            setTimeout(() => navigate('/home', { replace: true }), 3000);
            // This will send a post request to update the data in the database.
            await fetch(
                `http://localhost:5000/insert/${localStorage.getItem(
                    'userEmail'
                )}`,
                {
                    method: 'POST',
                    body: JSON.stringify(medicineArray),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } else {
            alert('Please enter some details');
        }
    }

    return (
        <div className="bg-white animate__animated animate__fadeInUp">
            <h1 className="p-3 font-medium text-green-600">
                Welcome,{' '}
                <p className=" inline font-light text-blue-800">
                    Please add a schedule to get started
                </p>
            </h1>

            <div className="main grid grid-cols-2 grid-rows-[84vh] items-stretch">
                <form
                    className={`${classes.wrapper} border-1 border-grey-500 shadow`}
                >
                    <Input
                        type="text"
                        id="mName"
                        placeholder="Medicine Name"
                        required
                        value={medicineDatails.mName}
                        onChange={changeHandler}
                    />
                    <Input
                        type="number"
                        id="mDoses"
                        placeholder="Doses"
                        required
                        value={medicineDatails.mDoses}
                        onChange={changeHandler}
                    />

                    <Input
                        type="number"
                        id="mStock"
                        placeholder="Stock"
                        required
                        value={medicineDatails.mStock}
                        onChange={changeHandler}
                    />

                    <Input
                        type="time"
                        id="mTime"
                        placeholder="Time"
                        required
                        value={medicineDatails.mTime}
                        onChange={changeHandler}
                    />
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

                {showNotifyToast && (
                    <Toast
                        type="notify"
                        heading={'Added'}
                        message={'You can add more medicine'}
                    />
                )}

                {showSuccessToast && (
                    <Toast
                        type="success"
                        heading={'Submitted'}
                        message={
                            'Your schedule is created😀. You will be redirected to Home page.'
                        }
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default NewSchedule;
