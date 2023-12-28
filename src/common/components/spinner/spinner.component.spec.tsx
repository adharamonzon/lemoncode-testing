import React, { ReactElement } from 'react';
import { render, screen} from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-spinners/ScaleLoader';
import { Modal } from '@mui/material';

describe('Spinnercomponent', () => {
  it('should set promiseInProgress', () => {
    const promiseInProgressMock = jest.isMockFunction(usePromiseTracker);

    render(<SpinnerComponent />);
    expect(promiseInProgressMock).toBeFalsy();
  });
})

