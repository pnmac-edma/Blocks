import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
  Button
} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { color, font } from '@edma/design-tokens/';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ScrollToTopController from '../../ScrollToTopController';
import { SnackBar } from '@edma/craft-components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  tabs: {
    display: 'inline-block',
    overflow: 'hidden',
    marginTop: '1rem',
    background: theme.palette.type === 'light' ? color.g100 : color.g700
  },
  tab: {
    minWidth: 75
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    background: theme.palette.type === 'light' ? color.white : color.black,
    textAlign: 'left'
  },
  flexCards: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    flexWrap: 'no-wrap',
    maxWidth: '100%',
    flexBasis: '50%'
  },
  codeBlock: {
    padding: '40px !important',
    borderRadius: 5,
    maxHeight: 400
  },
  radius: {
    textAlign: 'center',
    padding: 20,
    width: '100%'
  },
  radiusName: {
    color: theme.palette.type === 'light' ? color.b400 : color.b200,
    fontFamily: font.mono
  },
  mono: {
    fontFamily: font.mono
  },
  prev: {
    position: 'relative',
    marginTop: '2rem',
    width: '100%',
    textAlign: 'left',

    '& a': {
      color: theme.palette.type === 'light' ? color.black : color.white,
      padding: 16,
      borderRadius: 4,
      transition: 'all .2s ease-in-out',
      textDecoration: 'none',

      '&:hover': {
        background: theme.palette.type === 'light' ? color.g100 : color.g900
      },

      '& svg': {
        position: 'relative',
        top: 6,
        right: 4
      }
    }
  },
  next: {
    position: 'relative',
    marginTop: '2rem',
    width: '100%',
    textAlign: 'right',

    '& a': {
      color: theme.palette.type === 'light' ? color.black : color.white,
      padding: 16,
      borderRadius: 4,
      transition: 'all .2s ease-in-out',
      textDecoration: 'none',

      '&:hover': {
        background: theme.palette.type === 'light' ? color.g100 : color.g900
      },

      '& svg': {
        position: 'relative',
        top: 6,
        left: 8
      }
    }
  }
}));

const CraftSnackbar = () => {
  const custom = useStyles();
  const [value, setValue] = useState(0);
  const [notification, setIsNotification] = useState(false);
  const [notificationError, setNotificationError] = useState(false);
  const [successApi, setIsSuccessApi] = useState(null);

  const handleOpenNotification = () => {
    setTimeout(() => {
      setIsSuccessApi(true);
      setIsNotification(true);
    }, 700);
  };

  const handleCloseNotification = () => setIsNotification(false);

  const handleOpenErrorNotification = () => {
    setTimeout(() => {
      setIsSuccessApi(false);
      setNotificationError(true);
    }, 700);
  };

  const handleCloseErrorNotification = () => setNotificationError(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const successMessage = 'Your Request was Successful';
  const errorMessage = 'There was an Error in your Request';
  const snackbarContainerJsx = `
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

  const snackbarExampleJsx = `
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

  let finalJsx = snackbarContainerJsx;
  if (value === 1) {
    finalJsx = snackbarExampleJsx;
  }

  return (
    <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
      <ScrollToTopController />
      <div className="inner-content">
        <Typography variant="h1">Craft Re-usable Components</Typography>
        <Typography variant="h3">Snackbar</Typography>
        <Box mt={7} mb={7}>
          <Divider className={custom.divider} />
        </Box>
        <Paper className={custom.tabs}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="Toggle language"
          >
            <Tab label="SnackBar Container JSX" className={custom.tab} />
            <Tab label="Snackbar Example JSX" className={custom.tab} />
          </Tabs>
        </Paper>
        <SyntaxHighlighter
          language="jsx"
          className={custom.codeBlock}
          style={xonokai}
        >
          {finalJsx}
        </SyntaxHighlighter>
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1} md={1} lg={1} className={custom.flexCards}>
            <Paper className={custom.radius}>
              <Button color="primary" onClick={handleOpenNotification}>
                Open success snackbar
              </Button>
              <SnackBar
                message={successMessage}
                notification={notification}
                handleCloseNotification={handleCloseNotification}
                isApiSucceeded={successApi}
              />
            </Paper>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} className={custom.flexCards}>
            <Paper className={custom.radius}>
              <Button color="primary" onClick={handleOpenErrorNotification}>
                Open error snackbar
              </Button>
              <SnackBar
                message={errorMessage}
                notification={notificationError}
                handleCloseNotification={handleCloseErrorNotification}
                isApiSucceeded={successApi}
              />
            </Paper>
          </Grid>
        </Grid>
        <div className="Content__wrapper">
          <div className="Content__section">
            <Box className={custom.prev}>
              <Typography variant="body2">
                <Link to="/components/modal">
                  <ArrowBackIosIcon />
                  Components: Modal
                </Link>
              </Typography>
            </Box>
          </div>
          <div className="Content__section">
            <Box className={custom.next}>
              <Typography variant="body2">
                <Link to="/components/storybook-component-library">
                  Components: Storybook Component Library
                  <ArrowForwardIosIcon />
                </Link>
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CraftSnackbar;
