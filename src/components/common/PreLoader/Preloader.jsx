import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import classnames from 'classnames'
import styles from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={classnames("container", styles.preloader__wrapper)} >
            <CircularProgress color={"primary"} />
        </div>
    );
}
export default Preloader;