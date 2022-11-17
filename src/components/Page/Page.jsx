import React, {Fragment} from 'react';
import Header from '../Header';
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