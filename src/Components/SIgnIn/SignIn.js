import styles from './SignIn.module.css';
import Footer from '../Footer/Footer';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';

function SignIn() {
    const handleLogin = async (googleData) => {
        const res = await fetch('/api/google-login', {
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
    };
    const handleFailure = (result) => {
        alert(result);
    };

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    );

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
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
                        {loginData ? (
                            <div>
                                <p>Already logged in</p>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <GoogleLogin
                                clientId={
                                    process.env.REACT_APP_GOOGLE_CLIENT_ID
                                }
                                buttonText="SignIn with Google"
                                className={`${styles.button_google}`}
                                onSuccess={handleLogin}
                                onFailure={handleFailure}
                                cookiePolicy={'single_host_origin'}
                            />
                        )}
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
