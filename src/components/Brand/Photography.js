import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
    Box,
    Divider,
    Grid,
    Typography
} from '@material-ui/core/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import color from '@edma/design-tokens/js/color';
import ScrollToTopController from '../ScrollToTopController';
import photoGood from '../../assets/img/photo.good.png';
import photoOverlay from '../../assets/img/photo.overlay.png';
import photoMisuses from '../../assets/img/photo.misuses.svg';

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

const Photography = () => {
    const custom = useStyles();

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Brand</Typography>
                <Typography variant="h3" className={custom.h2}>
                    Photography
                </Typography>
                <Box mt={7} mb={7}>
                    <Divider className={custom.divider} />
                </Box>
                <Box mt={10}>
                    <Typography variant="h2">
                        General Usage
                    </Typography>
                </Box>
                <Grid container spacing={5}>
                    <Grid item xs>
                        <Box mb={3}>
                            <Typography variant="h5">
                                Our photography should convey the value of home in a genuine and authentic way.
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="body1">
                                A home is more than a house. When choosing images for brand communications, look for people enjoying their home rather than in the act of buying it or financing it. Look for moments that demonstrate the satisfaction of having your own protected space for you and your family.
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="body1">
                                When choosing subjects for photos, look for people and homes that represent the wide diversity of our customers. We want to showcase all kinds of families, couples and individuals enjoying their homes in different ways.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <img src={photoGood} alt="" />
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs>
                        <img src={photoOverlay} alt="" />
                    </Grid>
                    <Grid item xs>
                        <Box mt={10}>
                            <Typography variant="h2">
                                Photography Treatment
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="h5">
                                Utilizing photography from multiple sources can be a challenge in conveying a consistent brand.
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="body1">
                                This gradient overlay, which utilizes two of our primary colors, is a subtle way to add common color information to images and help a set of images feel more thematic.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={10}>
                    <Grid container spacing={5}>
                        <Grid item xs>
                            <Box mt={3}>
                                <Typography variant="h2">
                                    Photography Misuses
                                </Typography>
                            </Box>
                            <Box mb={3}>
                                <Typography variant="body1">
                                    We want to be careful to avoid images that appear to be inauthentic or out of context for our brand. Examples of this include images that are overly staged or situations that appear forced.
                                </Typography>
                            </Box>
                            <Box mb={3}>
                                <Typography variant="body1">
                                    Additionally, we want avoid non-brand illustration, renderings, animations or clip art of any kind.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <img src={photoMisuses} alt="" />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={7} mb={2}>
                    <Divider className={custom.divider} />
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/brand/iconography"><ArrowBackIosIcon />Brand: Iconography</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                    <Box className={custom.next}>
                        <Typography variant="body2">
                            <Link to="/brand/typography">Brand: Typography<ArrowForwardIosIcon /></Link>
                        </Typography>
                    </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Photography;
