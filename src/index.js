import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import Preloader from './Preloader/Preloader'
import Home from './Home/Home'
import { Dashboard } from './Dashboard/Dashboard'
import { SignIn } from './SIgnIn/SignIn'

ReactDOM.render(
    <React.StrictMode>
        <>
            {/*<Preloader/>*/}
            <Home />
            {/*<Dashboard />*/}
            {/*<SignIn />*/}
        </>
    </React.StrictMode>,
    document.getElementById('root')
)
