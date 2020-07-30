import React from 'react';
import DOMPurify from 'dompurify';
import { Snackbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar = ({
  handleCloseNotification,
  message,
  notification,
  isApiSucceeded = null,
  highlightText = null
}) => {
  const classes = useStyles();

  const highlightMessage = () => {
    const matchedText = new RegExp(Object.keys(highlightText).join('|'), 'gi');
    return DOMPurify.sanitize(
      message.replace(matchedText, (matched) => {
        return `<span style="color: ${
          highlightText[matched.toLowerCase()]
        }">${matched}</span>`;
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
      ) : undefined}
    </Snackbar>
  );
};

export default SnackBar;
