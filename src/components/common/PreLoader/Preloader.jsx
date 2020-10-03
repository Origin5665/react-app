import React from 'react';
import loaderIMG from '../../../images/spinner.svg';
import Styles from '../../common/PreLoader/PreLoader.module.css';

const PreLoader = () => {

    return <div className={Styles.preloader__wrapper}>
        <img className={Styles.preloader__image} src={loaderIMG} alt="Изображение статуса загруки" />
    </div>

};
export default PreLoader;