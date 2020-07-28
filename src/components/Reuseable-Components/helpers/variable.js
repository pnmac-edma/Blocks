export const exampleBasicRender = 'Basic Modal Body';
export const exampleAdvancedRender = 'Advanced Modal Body';
export const presentationalJsx = `
// Presentational Component is the base for the CRAFT reuseable Modal
// Listed are the current props that the Modal excepts

import React from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Dialog
} from '@material-ui/core';

const Modal = props => {
  const {
    render,
    renderStyle,
    modalTitle,
    modalText,
    openModal,
    handleModalToggle,
    handleRemoveSelected,
    handleOpenNotification,
    footerButtonText
  } = props;
            
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        open={openModal}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{modalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{modalText}</DialogContentText>
          <DialogContentText style={renderStyle}></DialogContentText>
          {render}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleModalToggle()} color="primary">
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              handleOpenNotification();
              handleRemoveSelected();
              handleModalToggle();
            }}
            autoFocus>
            {footerButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Modal;
`;

export const basicModalJsx = `
// Example of the Basic Modal
import React, { useState } from 'react';
import Modal from '../Presentational/Modal/Modal';

const [openModalBasic, setIsOpenModalBasic] = useState(false);

const handleOpenModalBasic = () => {
  setIsOpenModalBasic(true);
};

const handleCloseModal = () => {
  setIsOpenModalBasic(false);
};

export const exampleRender = 'I am a Re-usable Modal Body';

<Modal
  modalTitle={'Simple Modal Title'}
  render={exampleRender}
  openModal={openModalBasic}
  handleModalToggle={handleCloseModal}
  footerButtonText={'Footer Button'}
/>
`;

export const advancedModalJsx = `
// Example of Advanced Modal with Functions for Actions
import React, { useState } from 'react';
import Modal from '../Presentational/Modal/Modal';

const [openModalAdvanced, setIsOpenModalAdvanced] = useState(false);

const handleOpenModalAdvanced = () => {
  setIsOpenModalAdvanced(true);
};

const handleCloseModalAdvanced = () => {
  setIsOpenModalAdvanced(false);
};

const handleRemoveExample = () => {
  // Action to remove a selection
};

const handleOpenNotification = () => {
  // Action to trigger a Snackbar
};

<Modal
  modalTitle={'Advanced Modal Title'}
  render={exampleRender}
  openModal={openModalAdvanced}
  handleModalToggle={handleCloseModalAdvanced}
  handleOpenNotification={handleOpenNotification}
  handleRemoveSelected={handleRemoveExample}
  footerButtonText={'Yes Remove Selected'}
/>
`;
