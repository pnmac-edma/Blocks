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
import { ReactComponent as Icon0 } from '../../assets/img/caviar/0.svg';
import { ReactComponent as Icon1 } from '../../assets/img/caviar/1.svg';
import { ReactComponent as Icon2 } from '../../assets/img/caviar/2.svg';
import { ReactComponent as Icon3 } from '../../assets/img/caviar/3.svg';
import { ReactComponent as Icon4 } from '../../assets/img/caviar/4.svg';
import { ReactComponent as Icon5 } from '../../assets/img/caviar/5.svg';
import { ReactComponent as Icon6 } from '../../assets/img/caviar/6.svg';
import { ReactComponent as Icon7 } from '../../assets/img/caviar/7.svg';
import { ReactComponent as Icon8 } from '../../assets/img/caviar/8.svg';
import { ReactComponent as Icon9 } from '../../assets/img/caviar/9.svg';
import { ReactComponent as Icon10 } from '../../assets/img/caviar/10.svg';
import { ReactComponent as Icon11 } from '../../assets/img/caviar/11.svg';
import { ReactComponent as Icon12 } from '../../assets/img/caviar/12.svg';
import { ReactComponent as Icon13 } from '../../assets/img/caviar/13.svg';
import { ReactComponent as Icon14 } from '../../assets/img/caviar/14.svg';
import { ReactComponent as Icon15 } from '../../assets/img/caviar/15.svg';
import { ReactComponent as Icon16 } from '../../assets/img/caviar/16.svg';
import { ReactComponent as Icon17 } from '../../assets/img/caviar/17.svg';
import { ReactComponent as Icon18 } from '../../assets/img/caviar/18.svg';
import { ReactComponent as Icon19 } from '../../assets/img/caviar/19.svg';
import { ReactComponent as Icon20 } from '../../assets/img/caviar/20.svg';
import { ReactComponent as Icon21 } from '../../assets/img/caviar/21.svg';
import { ReactComponent as Icon22 } from '../../assets/img/caviar/22.svg';
import { ReactComponent as Icon23 } from '../../assets/img/caviar/23.svg';
import { ReactComponent as Icon24 } from '../../assets/img/caviar/24.svg';
import { ReactComponent as Icon25 } from '../../assets/img/caviar/25.svg';
import { ReactComponent as Icon26 } from '../../assets/img/caviar/26.svg';
import { ReactComponent as Icon27 } from '../../assets/img/caviar/27.svg';

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
    icon: {
        fill: theme.palette.type === 'light' ? color.black : color.white,
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

const Iconography = () => {
    const custom = useStyles();
    const icons = [
        <Icon0 className={`Icons__icon ${custom.icon}`}/>,
        <Icon1 className={`Icons__icon ${custom.icon}`}/>,
        <Icon2 className={`Icons__icon ${custom.icon}`}/>,
        <Icon3 className={`Icons__icon ${custom.icon}`}/>,
        <Icon4 className={`Icons__icon ${custom.icon}`}/>,
        <Icon5 className={`Icons__icon ${custom.icon}`}/>,
        <Icon6 className={`Icons__icon ${custom.icon}`}/>,
        <Icon7 className={`Icons__icon ${custom.icon}`}/>,
        <Icon8 className={`Icons__icon ${custom.icon}`}/>,
        <Icon9 className={`Icons__icon ${custom.icon}`}/>,
        <Icon10 className={`Icons__icon ${custom.icon}`}/>,
        <Icon11 className={`Icons__icon ${custom.icon}`}/>,
        <Icon12 className={`Icons__icon ${custom.icon}`}/>,
        <Icon13 className={`Icons__icon ${custom.icon}`}/>,
        <Icon14 className={`Icons__icon ${custom.icon}`}/>,
        <Icon15 className={`Icons__icon ${custom.icon}`}/>,
        <Icon16 className={`Icons__icon ${custom.icon}`}/>,
        <Icon17 className={`Icons__icon ${custom.icon}`}/>,
        <Icon18 className={`Icons__icon ${custom.icon}`}/>,
        <Icon19 className={`Icons__icon ${custom.icon}`}/>,
        <Icon20 className={`Icons__icon ${custom.icon}`}/>,
        <Icon21 className={`Icons__icon ${custom.icon}`}/>,
        <Icon22 className={`Icons__icon ${custom.icon}`}/>,
        <Icon23 className={`Icons__icon ${custom.icon}`}/>,
        <Icon24 className={`Icons__icon ${custom.icon}`}/>,
        <Icon25 className={`Icons__icon ${custom.icon}`}/>,
        <Icon26 className={`Icons__icon ${custom.icon}`}/>,
        <Icon27 className={`Icons__icon ${custom.icon}`}/>
    ];

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Brand</Typography>
                <Typography variant="h3" className={custom.h2}>
                    Iconography
                </Typography>
                <Box mt={7} mb={7}>
                    <Divider className={custom.divider} />
                </Box>
                <div className="Icons">
                    <Grid container spacing={3} className="Icons__grid">
                        {icons.map((icon, index) => <Grid key={index} item xs>{icon}</Grid>)}
                    </Grid>
                </div>
                <Box mb={3}>
                    <Typography variant="h5">
                        Iconography is another way we communicate simple messages.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        The PennyMac icon system is based on the icon set ‘Caviar’. Icons are clear, simple, and personable but not ‘cartoony’. Caviar comes with over 450 icons out of the box, and the stroke weight is customizable to PennyMac’s needs.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Button href="https://drive.google.com/drive/folders/16-p-ioF4h4YaSIJ-xinN5NNiPrJz-u2P" target="_blank" variant="contained" color="primary">Get Caviar Icons</Button>
                </Box>
                <Box mt={7} mb={2}>
                    <Divider className={custom.divider} />
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/brand/identity"><ArrowBackIosIcon />Brand: Identity</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                        <Box className={custom.next}>
                            <Typography variant="body2">
                                <Link to="/brand/photography">Brand: Photography<ArrowForwardIosIcon /></Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Iconography;
