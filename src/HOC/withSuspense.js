import React, { Suspense } from 'react';
import PreLoader from '../components/common/PreLoader/Preloader';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';



export const withSuspense = (Component) => {

   return (props) => <Suspense fallback={<PreLoader />}><Component {...props} /> </Suspense>

};