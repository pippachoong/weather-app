import React from 'react'
import PropTypes from 'prop-types'

import styles from './Error.module.css'

const Error = ({message}) => {
    <div className={`${styles.error} alert position-absolute`} role="alert">
        {message}

    </div>
}

Error.PropTypes = {
    message: PropTypes.string
}

Error.defaultProps = {
    message: 'An error occured',
}

export default Error