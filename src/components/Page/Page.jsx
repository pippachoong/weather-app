import React, {Fragment} from 'react';
import Header from '../Header';
import Error from '../Error';
import Forecast from '../Forecast';
import Form from '../Form'
import Loader from '../Loader'
import UpcomingDaysForecast from '../UpcomingDaysForecast';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastitem';

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css'

const Page = () => {
    const {isError, isLoading, forecast} = useForecast()

    const onSubmit = (value) => {
        // call funtion here
        console.log({value});
    }
    return (
        <Fragment>
            <Header/>
           <div className={styles.box}>
            {/* Form */}
            {!isLoading && <Form submitSearch={onSubmit} />}
            {/* Error */}
            { isError && <Error message={isError}/> }
            {/* Loader */}
            { isLoading&& <Loader /> }
           </div>
            {/* Forecast */}
            { forecast && <Forecast /> }
        </Fragment>
    )
}

export default Page; 