import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Divider,
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
import { Modal } from '@edma/craft-components';

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
  const [openModalBasic, setIsOpenModalBasic] = useState(false);

  const handleOpenModalBasic = () => setIsOpenModalBasic(true);
  const handleCloseModal = () => setIsOpenModalBasic(false);

  const exampleBasicRender = 'Basic Modal Body';
  const basicModalJsx = `
// Example of the Modal
import React, { useState } from 'react';
import { Modal } from '@edma/craft-components';

const [openModal, setIsOpenModal] = useState(false);

const handleOpenModal = () => {
  setIsOpenModalBasic(true);
};

const handleCloseModal = () => {
  setIsOpenModalBasic(false);
};

<Modal
  modalTitle={'Simple Modal Title'}
  render="This content will be rendered inside the Modal."
  openModal={openModal}
  handleModalToggle={handleCloseModal}
  footerButtonText={'Footer Button'}
/>
`;

  let finalJsx = basicModalJsx;

  return (
    <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
      <ScrollToTopController />
      <div className="inner-content">
        <Typography variant="h1">React Components</Typography>
        <Typography variant="h3">Modal</Typography>
        <Box mt={7} mb={7}>
          <Divider className={custom.divider} />
        </Box>
        <SyntaxHighlighter
          language="jsx"
          className={custom.codeBlock}
          style={xonokai}
        >
          {finalJsx}
        </SyntaxHighlighter>
        <Button color="primary" variant="contained" onClick={handleOpenModalBasic}>
          Open Modal
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
