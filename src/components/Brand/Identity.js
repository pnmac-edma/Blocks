import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    Divider,
    Grid,
    Typography
} from '@material-ui/core/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import color from '@edma/design-tokens/js/color';
import ScrollToTopController from '../ScrollToTopController';
import { ReactComponent as PnmacLogoColor } from '../../assets/img/logo.pennymac.color.svg';
import { ReactComponent as PnmacLogoShadow } from '../../assets/img/logo.pennymac.shadow.svg';
import { ReactComponent as PnmacLogoTracking } from '../../assets/img/logo.pennymac.tracking.svg';
import { ReactComponent as PnmacLogoLockup } from '../../assets/img/logo.pennymac.lockup.svg';
import PnmacLogoSpacing from '../../assets/img/logo.pennymac.spacing.svg';
import PnmacLogoSpacing2 from '../../assets/img/logo.pennymac.spacing2.svg';
import PnmacLogoLockup2 from '../../assets/img/logo.pennymac.lockup2.svg';
import PnmacLogoLockup3 from '../../assets/img/logo.pennymac.lockup3.svg';
import PnmacLogoLockup4 from '../../assets/img/logo.pennymac.lockup4.svg';
import busyBg from '../../assets/img/logo.pennymac.busybg.png';

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
    section: {
        padding: '3rem 3rem 0 3rem',
        height: 200,
        width: '47%',
        margin: '0 0.3rem 0.6rem',
        border: `1px solid ${color.g200}`,
        borderRadius: 4,
        background: color.b50,
        color: color.black,

        '& span': {
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: 1
        }
    },
    sectionNope: {
        background: color.white,
        color: color.black
    },
    sectionColorDark: {
        background: color.b900,
        color: color.white,

        '& .blue, & .blue path, & .black path': {
            fill: color.white
        }
    },
    sectionGrayscale: {
        background: color.g50,
        color: color.black,

        '& .blue, & .blue path, & .black path': {
            fill: color.g800
        },
        '& .yellow': {
            fill: color.g300
        }
    },
    sectionGrayscaleDark: {
        background: color.g900,
        color: color.white,

        '& .blue, & .blue path, & .black path': {
            fill: color.white
        },
        '& .yellow': {
            fill: color.g300
        }
    },
    sectionSolid: {
        background: color.white,
        color: color.black,

        '& path, & .blue': {
            fill: color.black
        }
    },
    sectionSolidDark: {
        background: color.black,
        color: color.white,

        '& path, & .blue': {
            fill: color.white
        }
    },
    busyBg: {
        width: '100%'
    },
    border: {
        border: `1px solid ${color.g200}`
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

const Identity = () => {
    const custom = useStyles();

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Brand</Typography>
                <Typography variant="h3" className={custom.h2}>
                    Identity
                </Typography>
                <Box mt={7} mb={7}>
                    <Divider className={custom.divider} />
                </Box>
                <Box mt={7}>
                    <Typography variant="h2">
                        Logo &amp; Usage
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        The PennyMac Logo is available in full-color, grayscale, and solid versions, for both positive and reverse treatments. Full-color is preferred. When technical limitations prohibit the use of full-color, use the grayscale or solid version.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        <strong>Grayscale</strong> should only be used for printed applications. Digital appications should use full color or solid.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        <strong>The solid version</strong> may appear in black, white, or any single color as long as there is sufficient contrast between the background color and the Mark.
                    </Typography>
                </Box>
                <Box mb={7} mt={7}>
                    <Button href="https://drive.google.com/drive/folders/19ApsvbUtRMpfCtGM57IXJ3sCRPpdzhpX" target="_blank" variant="contained" color="primary">Download PennyMac Logos</Button>
                </Box>
                <div className="Content__wrapper">
                    <div className={`Content__section ${custom.section}`}>
                        <PnmacLogoColor />
                        <span>Color</span>
                    </div>
                    <div className={`Content__section ${custom.section} ${custom.sectionColorDark}`}>
                        <PnmacLogoColor />
                        <span>Reverse Color</span>
                    </div>
                    <div className={`Content__section ${custom.section} ${custom.sectionGrayscale}`}>
                        <PnmacLogoColor />
                        <span>Grayscale</span>
                    </div>
                    <div className={`Content__section ${custom.section} ${custom.sectionGrayscaleDark}`}>
                        <PnmacLogoColor />
                        <span>Reverse Grayscale</span>
                    </div>
                    <div className={`Content__section ${custom.section} ${custom.sectionSolid}`}>
                        <PnmacLogoColor />
                        <span>Solid</span>
                    </div>
                    <div className={`Content__section ${custom.section} ${custom.sectionSolidDark}`}>
                        <PnmacLogoColor />
                        <span>Reverse Solid</span>
                    </div>
                </div>
                <Box mt={10}>
                    <Typography variant="h2">
                        Logo Misuses
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="h5">
                        Treat our visual identity like our most important asset.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        We’ve carefully crafted our visual identity and the rules for how it should be treated. Avoid compromising the impact of our logo by misusing it any way.
                    </Typography>
                </Box>
                <div className="Content__wrapper">
                    <div className={`Content__section Content__section--shadow ${custom.sectionNope}`}>
                        <PnmacLogoShadow />
                        <span>Drop shadow</span>
                    </div>
                    <div className={`Content__section Content__section--other ${custom.sectionNope}`}>
                        <PnmacLogoColor />
                        <span>Other colors</span>
                    </div>
                    <div className={`Content__section Content__section--outlined ${custom.sectionNope}`}>
                        <PnmacLogoColor />
                        <span>Outlined</span>
                    </div>
                    <div className={`Content__section Content__section--tracking ${custom.sectionNope}`}>
                        <PnmacLogoTracking />
                        <span>Tightened tracking</span>
                    </div>
                    <div className={`Content__section Content__section--lockups ${custom.sectionNope}`}>
                        <PnmacLogoLockup />
                        <span>Unapproved lockups</span>
                    </div>
                    <div className={`Content__section Content__section--busybg ${custom.sectionNope}`}>
                        <img src={busyBg} className={custom.busyBg} alt="Busy Backgrounds" /><br/>
                        <span>Busy backgrounds</span>
                    </div>
                    <div className={`Content__section Content__section--rotated ${custom.sectionNope}`}>
                        <PnmacLogoColor />
                        <span>Rotated</span>
                    </div>
                    <div className={`Content__section Content__section--squeezed ${custom.sectionNope}`}>
                        <PnmacLogoColor /><br/>
                        <span>Squeezed</span>
                    </div>
                </div>
                <Box mt={10}>
                    <Typography variant="h2">
                        Logo Whitespace
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        The importance of whitespace around brand elements and throughout all layouts cannot be overstated. It adds confidence and clarity to the visualmessaging. The more, the better. These visuals are used to define minimums.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="h5">
                        Spacing for Logo
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        The minimum allowance for the master logo is equal to 2x the mark in the lockup. This holds true regardless of scale.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <img src={PnmacLogoSpacing} alt="" />
                </Box>
                <Box mb={3}>
                    <img src={PnmacLogoSpacing2} className={custom.border} alt="" />
                </Box>
                <Box mt={10}>
                    <Typography variant="h2">
                        Logo Lockup
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        Lockups are mainly used in printed assets but can also be applicable in other couplings with the logo, such as departmental identifiers.
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <img src={PnmacLogoLockup2} alt="" />
                    </Grid>
                    <Grid item xs>
                        <img src={PnmacLogoLockup3} alt="" />
                    </Grid>
                    <Grid item xs>
                        <img src={PnmacLogoLockup4} alt="" />
                    </Grid>
                </Grid>
                <Box mt={7} mb={2}>
                    <Divider className={custom.divider} />
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/brand/voice-&-tone"><ArrowBackIosIcon />Brand: Voice &amp; Tone</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                        <Box className={custom.next}>
                            <Typography variant="body2">
                                <Link to="/brand/iconography" key={4}>Brand: Iconography<ArrowForwardIosIcon /></Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Identity;
