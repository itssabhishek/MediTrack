import styles from './SignIn.module.css';
import Footer from '../Footer/Footer';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    let navigate = useNavigate();

    //To Handle login
    const handleLogin = async (res) => {
        const newUser = {
            googleId: res.profileObj.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
        };

        //Save user credentials in Local Storage
        localStorage.setItem('jwt', res.tokenId);
        localStorage.setItem('userEmail', res.profileObj.email);

        //Request to add new user in Database
        await fetch('http://localhost:5000/record/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        }).catch((error) => {
            window.alert(error);
            return;
        });

        //To check if user has any ongoing schedule
        const currentUserEmail = res.profileObj.email;
        //Get user data
        const response = await fetch(
            `http://localhost:5000/record/${currentUserEmail}`
        );

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const returnedData = await response.json();

        //Redirect to home if any schedule is ongoing else redirect to new page
        returnedData.schedule
            ? navigate('/home', { replace: true })
            : navigate('/new', { replace: true });
    };
    const handleFailure = () => {
        navigate('/', { replace: true });
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img
                        src={'/images/MediTrackIconWithBG.jpg'}
                        alt="MediTrack"
                    />
                </div>
                <div className={`text-center mt-4 ${styles.name}`}>
                    <h2>MediTrack</h2>
                </div>
                <form className={'p-3 mt-3'}>
                    <div className={` d-flex flex-column align-items-center`}>
                        <h3>Hello!</h3>
                        <p>Please SignIn to Continue..</p>

                        <GoogleLogin
                            clientId="288536530772-8des996l5mafrbti3lusb8oip9qtbh4r.apps.googleusercontent.com"
                            buttonText="SignIn with Google"
                            className={`${styles.button_google}`}
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
