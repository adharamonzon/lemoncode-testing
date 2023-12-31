import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { Modal } from '@mui/material';
import Loader from 'react-spinners/ScaleLoader';
import * as classes from './spinner.styles';
import { name } from '../../../pods/employee/components/data.styles';

export const SpinnerComponent: React.FunctionComponent = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <Modal open={promiseInProgress} className={classes.modal}>
      <div className={classes.loaderContainer}>
        <Loader />
      </div>
    </Modal>
  );
};
