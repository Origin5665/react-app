import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';



export const withSuspense = (Component) => {

   return (props) => <Suspense fallback={<Preloader />}><Component {...props} /> </Suspense>

};