import styles from './SignIn.module.css';
import Footer from '../Footer/Footer';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    let navigate = useNavigate();

    const handleLogin = async (res) => {
        const newUser = {
            googleId: res.profileObj.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
        };

        localStorage.setItem('jwt', res.tokenId);
        localStorage.setItem('userEmail', res.profileObj.email);

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

        navigate('/home', { replace: true });
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
