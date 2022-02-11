import styles from "./SignIn.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

const year = new Date().getFullYear().toString().slice(2);

export const SignIn = () => (

    <>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img src={"/images/MediTrackIconWithBG.jpg"} alt="MediTrack"/>
            </div>
            <div className={`text-center mt-4 ${styles.name}`}><h2>MediTrack</h2></div>
            <form className={"p-3 mt-3"}>
                <div className={` d-flex flex-column align-items-center`}>
                    <h3>Hello!</h3>
                    <p>Please SignIn to Continue..</p>
                    <a>
                        <button className={`${styles.button_google}`}>
                            <FontAwesomeIcon icon={faGoogle} size={"1x"} color={"red"}/>
                            <h6>Sign In with Google</h6>
                        </button>
                    </a>
                </div>
            </form>

        </div>
        <footer className={"mx-auto text-center"} style={{width :'400px'}}>
            <div style={{color: "grey", fontSize: .6 + "rem"}}>
                <FontAwesomeIcon icon={faCopyright} size={'lg'}/>
                <span> Copyright {`${year - 1} - ${year}`}. This project is made by Deepa Upadhyay, Aditi Shardul, Pragya Tripathi and Abhishek Tiwari. Do not claim as yours.</span>
            </div>
        </footer>
    </>)



