import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';



const Preloader = () => {


    return (
        <div className="preloader">
            <CircularProgress color={"primary"} />

        </div>
    );
}
export default Preloader;