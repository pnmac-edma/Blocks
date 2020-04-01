import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
    Box,
    Divider,
    Grid,
    List,
    ListItem,
    Typography
} from '@material-ui/core/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import color from '@edma/design-tokens/js/color';
import ScrollToTopController from '../ScrollToTopController';
import helpfulNeighborLight from '../../assets/img/graphic.neighbor.light.svg';
import helpfulNeighborDark from '../../assets/img/graphic.neighbor.dark.svg';

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
    neighbor: {
        height: 350
    },
    list: {
        listStyle: 'disc',

        '& li': {
            display: 'list-item',
            marginLeft: 24
        }
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

const Voice = () => {
    const custom = useStyles();
    const theme = useTheme();

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Brand</Typography>
                <Typography variant="h3">
                    Voice &amp; Tone
                </Typography>
                <Box mt={7} mb={7}>
                    <Divider className={custom.divider} />
                </Box>
                <Grid container spacing={7}>
                    <Grid item xs>
                        <Box mb={3}>
                            <Typography variant="h2" className={custom.h2}>
                                The helpful neighbor
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="body1">
                                The persona of The Helpful Neighbor is meant to give personality to the way we communicate. While we may not live near our customers and partners, we still treat them like a neighbor who shares emotional investment in their home.
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <List className={custom.list}>
                                <ListItem>
                                    <Typography variant="body1">
                                        A member of your community
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="body1">
                                        Emotionally invested
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="body1">
                                        Shared aspiration
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        {
                            theme.palette.type === 'light' ?
                            <img src={helpfulNeighborLight} className={custom.neighbor} alt="" />
                            : <img src={helpfulNeighborDark} className={custom.neighbor} alt="" />
                        }
                    </Grid>
                </Grid>
                <Box mt={7} mb={2}>
                    <Divider className={custom.divider} />
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/brand/core-values"><ArrowBackIosIcon />Brand: Core Values</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                    <Box className={custom.next}>
                        <Typography variant="body2">
                            <Link to="/brand/identity">Brand: Identity<ArrowForwardIosIcon /></Link>
                        </Typography>
                    </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Voice;
