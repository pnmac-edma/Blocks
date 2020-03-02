import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
    Box,
    Divider,
    Typography
} from '@material-ui/core/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import color from '@edma/design-tokens/js/color';
import ScrollToTopController from '../ScrollToTopController';

const useStyles = makeStyles (theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        background: theme.palette.type === 'light' ? color.white : color.black,
        textAlign: 'left'
    },
    h2: {
        lineHeight: 1.5
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

const Ethics = () => {
    const custom = useStyles();

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Brand</Typography>
                <Typography variant="h3" className={custom.h2}>
                    At PennyMac, we are committed to doing the right thing for our customers, colleagues, business partners, shareholders and the communities we serve. We strive to be Accountable, Reliable and Ethical in everything we do.
                </Typography>
                <Box mt={7} mb={7}>
                    <Divider className={custom.divider} />
                </Box>
                <Box mb={3}>
                    <Typography variant="h2">
                        We ARE PennyMac.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        Doing the right thing in an <strong>Accountable</strong> way means we continuously seek to drive performance excellence through innovation, risk management and active measurement.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        Being <strong>Reliable</strong> means we work together and commit ourselves fully to exceed customer expectations by operating with urgency and demonstrating our technical expertise.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        Doing business in an <strong>Ethical</strong> way means we behave with honesty, fairness and integrity to build the utmost trust among each other and everyone our business serves.
                    </Typography>
                </Box>
                <Box mt={7} mb={2}>
                    <Divider className={custom.divider} />
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/brand/getting-started" key={2}><ArrowBackIosIcon />Brand: Getting Started</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                        <Box className={custom.next}>
                            <Typography variant="body2">
                                <Link to="/brand/voice-&-tone" key={2}>Brand: Voice and Tone<ArrowForwardIosIcon /></Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Ethics;
