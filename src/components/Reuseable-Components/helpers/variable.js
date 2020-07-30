export const exampleBasicRender = 'Basic Modal Body';
export const exampleAdvancedRender = 'Advanced Modal Body or Component';
export const successMessage = 'Your Request was Successful';
export const errorMessage = 'There was an Error in your Request';
export const presentationalJsx = `
// Presentational Component is the base for the CRAFT reuseable Modal
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

export const snackbarContainerJsx = `
// Presentational Component is the base for the CRAFT reuseable SnackBar
import React from 'react';
import DOMPurify from 'dompurify';
import { Snackbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

// Props that you can use with the SnackBar
const SnackBar = ({
  handleCloseNotification,
  message,
  notification,
  isApiSucceeded = null,
  highlightText = null
}: SnackBarProps) => {
  const classes = useStyles();

  const highlightMessage = () => {
    const matchedText = new RegExp(Object.keys(highlightText).join('|'), 'gi');
    return DOMPurify.sanitize(
      message.replace(matchedText, (matched: string) => {
        return <span style="color: {
          highlightText[matched.toLowerCase()]
        }">{matched}</span>;
      })
    );
  };

  const highlightedMessage = highlightText ? highlightMessage() : null;

  const messageElement = highlightedMessage ? (
    <div dangerouslySetInnerHTML={{ __html: highlightedMessage }} />
  ) : (
    <span id="message-id">{message}</span>
  );

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      open={notification}
      onClose={handleCloseNotification}
      autoHideDuration={4000}
      message={messageElement}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={handleCloseNotification}
        >
          <CloseIcon />
        </IconButton>
      ]}
    >
      {isApiSucceeded !== null ? (
        <Alert
          severity={isApiSucceeded ? 'success' : 'error'}
          onClose={handleCloseNotification}
        >
          {message}
        </Alert>
      ) : (
        undefined
      )}
    </Snackbar>
  );
};

export default SnackBar;
`;

export const snackbarExampleJsx = `
import React, { useState } from 'react';
import Modal from '../Presentational/Modal/Modal';

const [notification, setIsNotification] = useState(false);
const [notificationError, setNotificationError] = useState(false);
const [successApi, setIsSuccessApi] = useState(null);

<SnackBar
  message={errorMessage}
  notification={notificationError}
  handleCloseNotification={handleCloseErrorNotification}
  isApiSucceeded={successApi}
/>
`;
