// This code is contributed by Suman ali on codepen(https://codepen.io/sumanengbd).
import styles from './Preloader.module.css'

function Preloader() {
    return (
        <div id={styles['preloader']}>
            <div id={styles['css3-spinner-svg-pulse-wrapper']}>
                <svg
                    id={styles['css3-spinner-svg-pulse']}
                    version="1.2"
                    height="210"
                    width="550"
                    xmlns="http://www.w3.org/2000/svg"
                    viewport="0 0 60 60"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <path
                        id={styles['css3-spinner-pulse']}
                        stroke="var(--bs-danger)"
                        fill="none"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
                    />
                </svg>
            </div>
            <button className="bg-amber-700">Save changes</button>
        </div>
    )
}

export default Preloader
