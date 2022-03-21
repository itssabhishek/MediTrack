import classes from './NewSchedule.module.css';
import Footer from '../Footer/Footer';
import Input from './NewSchedule/Input';

const NewSchedule = () => {
    return (
        <div className="bg-white animate__animated animate__fadeInUp">
            <h1 className="p-3 font-light text-green-600">Add new schedule</h1>
            <div className="main grid grid-cols-2 grid-rows-[84vh] items-stretch">
                <form
                    className={`${classes.wrapper} border-1 border-grey-500 shadow`}
                >
                    <Input type="text" id="mName" placeholder="Medicine Name" />
                    <Input type="number" id="mDoses" placeholder="Doses" />
                    <Input type="number" id="mStock" placeholder="Stock" />
                    <Input type="time" id="mTime" placeholder="Time" />
                    <div className="buttons flex h-12">
                        <input
                            type="submit"
                            className="submit_Button flex-1 rounded bg-green-500 hover:bg-green-600 border-2 text-lg text-white"
                            value="Submit"
                        />
                        <input
                            type="reset"
                            className="flex-1 border-1 border-green-600 rounded hover:bg-blue-500 hover:text-white"
                            value="Add"
                        />
                    </div>
                </form>
                <img src={'/images/new.jpg'} alt="NewImage" />
            </div>
            <Footer />
        </div>
    );
};

export default NewSchedule;
