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
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ScrollToTopController from '../../ScrollToTopController';
import Modal from '../Presentational/Modal/Modal';
import {
  presentationalJsx,
  basicModalJsx,
  advancedModalJsx,
  exampleBasicRender,
  exampleAdvancedRender
} from '../helpers/variable';

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

const CraftModal = () => {
  const custom = useStyles();
  const [value, setValue] = useState(0);
  const [openModalBasic, setIsOpenModalBasic] = useState(false);
  const [openModalAdvanced, setIsOpenModalAdvanced] = useState(false);

  const handleOpenModalBasic = () => {
    setIsOpenModalBasic(true);
  };

  const handleOpenModalAdvanced = () => {
    setIsOpenModalAdvanced(true);
  };

  const handleCloseModal = () => {
    setIsOpenModalBasic(false);
  };

  const handleCloseModalAdvanced = () => {
    setIsOpenModalAdvanced(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRemoveExample = () => {
    alert('You have Removed an example from something that was selected');
  };

  const handleOpenNotification = () => {
    alert('You triggered a Snackbar Notification');
  };

  let finalJsx = presentationalJsx;
  if (value === 1) {
    finalJsx = basicModalJsx;
  }
  if (value === 2) {
    finalJsx = advancedModalJsx;
  }

  return (
    <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
      <ScrollToTopController />
      <div className="inner-content">
        <Typography variant="h1">Craft Re-usable Components</Typography>
        <Typography variant="h3">Modal</Typography>
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
            <Tab label="Presentational JSX" className={custom.tab} />
            <Tab label="Basic Modal JSX" className={custom.tab} />
            <Tab label="Advanced Modal JSX" className={custom.tab} />
          </Tabs>
        </Paper>
        <SyntaxHighlighter
          language="javascript"
          className={custom.codeBlock}
          style={monokaiSublime}
        >
          {finalJsx}
        </SyntaxHighlighter>
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1} md={1} lg={1} className={custom.flexCards}>
            <Paper className={custom.radius}>
              <Button color="primary" onClick={handleOpenModalBasic}>
                Click to see a basic Modal
              </Button>
              <Modal
                modalTitle={'Basic Modal Title'}
                render={exampleBasicRender}
                openModal={openModalBasic}
                handleModalToggle={handleCloseModal}
                handleOpenNotification={() => {}}
                handleRemoveSelected={() => {}}
                footerButtonText={'Footer Button'}
              />
            </Paper>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} className={custom.flexCards}>
            <Paper className={custom.radius}>
              <Button color="primary" onClick={handleOpenModalAdvanced}>
                Click to see an Advanced Modal
              </Button>
              <Modal
                modalTitle={'Advanced Modal Title'}
                render={exampleAdvancedRender}
                openModal={openModalAdvanced}
                handleModalToggle={handleCloseModalAdvanced}
                handleOpenNotification={handleOpenNotification}
                handleRemoveSelected={handleRemoveExample}
                footerButtonText={'Yes Remove Selected'}
              />
            </Paper>
          </Grid>
        </Grid>
        <div className="Content__wrapper">
          <div className="Content__section">
            <Box className={custom.prev}>
              <Typography variant="body2">
                <Link to="/components/getting-started">
                  <ArrowBackIosIcon />
                  Components: Getting Started
                </Link>
              </Typography>
            </Box>
          </div>
          <div className="Content__section">
            <Box className={custom.next}>
              <Typography variant="body2">
                <Link to="/components/snackbar">
                  Components: Snackbar
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

export default CraftModal;
