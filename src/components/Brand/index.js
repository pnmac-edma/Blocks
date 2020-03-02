import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
    Box,
    Divider,
    Typography
} from '@material-ui/core/';
import color from '@edma/design-tokens/js/color';
import ScrollToTopController from '../ScrollToTopController';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { ReactComponent as BrandImg } from '../../assets/img/graphic.brand.light.svg';
import { ReactComponent as SmallHouseImg } from '../../assets/img/graphic.smallhouse.light.svg';

const useStyles = makeStyles (theme => ({
    root: {
        display: 'flex'
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

const Brand = () => {
    const custom = useStyles();

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Brand</Typography>
                <div className="Content__wrapper">
                    <div className="Content__section--60">
                        <Box mb={3}>
                            <Typography variant="h3" className={custom.h2}>
                                Welcome to the PennyMac Brand Guidelines! The goal of these guidelines is to help PennyMac present a single clear and compelling voice in everything we do. The totality of our logo, tagline, visual identity and the words we use will define who we are, both internally and externally.
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="h3" className={custom.h2}>
                                Think of these guidelines less as a set of rules and more as a tool that that provides a range of ways to help a large, diverse group of people communicate with a common voice.
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section--25">
                        <BrandImg />
                    </div>
                </div>
                <Box mt={7} mb={7}>
                    <Divider className={custom.divider} />
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section--25">
                        <SmallHouseImg />
                    </div>
                    <div className="Content__section--75">
                        <Box mb={3} ml={7}>
                            <Typography variant="h2">
                                <span>Our purpose</span>PennyMac helps fulfill the dream of home.
                            </Typography>
                        </Box>
                        <Box mb={3} ml={7}>
                            <Typography variant="body1">
                                Our brand purpose is bigger than simply home loans. Helping to fulfill the dream of home speaks to how PennyMac provides value to customers at many stages of the their relationship with their homes. Whether they’re looking to buy their dream home or use their equity to meet the needs of their growing family, PennyMac can be a valuable partner to help achieve their unique dream of home.
                            </Typography>
                        </Box>
                    </div>
                </div>
                <Box mt={10}>
                    <Typography variant="h2">
                        <span>Our tagline</span>The lender you can call home.
                    </Typography>
                    <div className="Brand__identity"><ArrowUpwardIcon />Identity</div>
                    <div className="Brand__opportunity"><ArrowUpwardIcon />Opportunity</div>
                    <div className="Brand__purpose"><ArrowUpwardIcon />Purpose</div>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        Our tagline identifies who we are and what we do by connecting our identity to our purpose.
                    </Typography>
                </Box>
                <Box mt={7} mb={2}>
                    <Divider className={custom.divider} />
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/foundation/accessibility" key={1}><ArrowBackIosIcon />Foundation: Accessibility</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                        <Box className={custom.next}>
                            <Typography variant="body2">
                                <Link to="/brand/core-values" key={2}>Brand: Core Values<ArrowForwardIosIcon /></Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Brand;
