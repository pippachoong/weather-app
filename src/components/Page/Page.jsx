import React, {Fragment} from 'react';
import Header from '../Header';
import Error from '../Error';
import Forecast from '../Forecast';
import Form from '../Form'
import Loader from '../Loader'
import UpcomingDaysForecast from '../UpcomingDaysForecast';

import styles from './Page.module.css'

const Page = () => {
    return (
        <Fragment>
            <Header/>
           <div className={styles.box}>
            {/* Form */}
            {/* Error */}
            {/* Loader */}
            {/* Forecast */}
           </div>
        </Fragment>
    )
}

export default Page; 