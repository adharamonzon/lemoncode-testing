import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

fdescribe('ConfirmationDialogComponent', () => {
  

  it('should open dialog if isOpen is true', () => {
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Proyecto',
      labels: {
        closeButton: 'Cancelar ',
        acceptButton: 'Aceptar'
      },
      children: null
    };
    render(< ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog', { hidden: true });
    expect(dialogElement).toBeInTheDocument();
  });

  it('should show title element on modal window', () => {
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Proyecto',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar'
      },
      children: null
    };
    render(< ConfirmationDialogComponent {...props} />)
    const title = screen.getByText('Eliminar Proyecto');

    expect(title).toBeInTheDocument();
  }); 

 it('should display a button with text "Cancelar', () => {
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Proyecto',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar'
      },
      children: null
    };
    render(< ConfirmationDialogComponent {...props} />)

    const buttonElement = screen.getByRole('button', {name: props.labels.closeButton});

    expect(buttonElement).toBeInTheDocument();
  });

  it('should close dialog when close button is clicked', async() => {
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Proyecto',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar'
      },
      children: null
    };


    render(< ConfirmationDialogComponent {...props} />)

    const buttonElement = screen.getByRole('button', {
      name: props.labels.closeButton,
      hidden: true
    });

    await userEvent.click(buttonElement);

    const dialogElement = screen.getByRole('dialog');

    expect(dialogElement).toBeInTheDocument();
  });

  it('should display a button with text "Aceptar', () => {
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Proyecto',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar'
      },
      children: null
    };
    render(< ConfirmationDialogComponent {...props} />)

    const buttonElement = screen.getByRole('button', {name: props.labels.acceptButton});

    expect(buttonElement).toBeInTheDocument();
  });

  it('should close dialog when close button is clicked', async() => {
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Proyecto',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar'
      },
      children: null
    };


    render(< ConfirmationDialogComponent {...props} />)

    const buttonElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
      hidden: true
    });

    await userEvent.click(buttonElement);

    const dialogElement = screen.getByRole('dialog');

    expect(dialogElement).toBeInTheDocument();
  });
})