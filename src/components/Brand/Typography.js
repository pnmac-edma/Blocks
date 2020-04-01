import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    Divider,
    Grid,
    Paper,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { color, font } from '@edma/design-tokens/';
import ScrollToTopController from '../ScrollToTopController';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const useStyles = makeStyles (theme => ({
    root: {
        display: 'flex',
    },
    tabs: {
        display: 'inline-block',
        overflow: 'hidden',
        background: theme.palette.type === 'light' ? color.g100 : color.g700
    },
    tab: {
        minWidth: 75
    },
    mono: {
        fontFamily: font.mono,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        background: theme.palette.type === 'light' ? color.white : color.black,
        textAlign: 'left'
    },
    codeBlock: {
        padding: '40px !important',
        borderRadius: 5,
        maxHeight: 400,
        background: theme.palette.type === 'light' ? color.white : color.black
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

const Type = () => {
    const custom = useStyles();
    const scssCodeString = `//SCSS
@import '~@edma/design-tokens/_scss/variables';`;
    const jsCodeString = `//JS
import { font } from '@edma/design-tokens/';`;

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Brand</Typography>
                <Typography variant="h3" className={custom.h2}>
                    Typography
                </Typography>
                <Box mt={7} mb={4}>
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
                        <Tab label="JS" className={custom.tab} />
                        <Tab label="SCSS" className={custom.tab} />
                        <Tab label="Download" className={custom.tab} />
                    </Tabs>
                </Paper>
                {
                    value === 2 ?
                    <Box mb={10} mt={4}>
                        <Button color="primary" variant="contained">Download Font Bundle</Button>
                    </Box>
                    :
                    <Box mb={10} mt={2}>
                        <SyntaxHighlighter
                            language={value === 0 ? 'javascript'
                                : value === 1 ? 'scss'
                                : '' }
                            className={custom.codeBlock}
                            style={monokaiSublime}
                        >
                            {value === 0 ? jsCodeString : scssCodeString}
                        </SyntaxHighlighter>
                    </Box>
                }
                <Grid container spacing={5}>
                    <Grid item xs>
                        <Box mb={10}>
                            <Typography variant="h2">
                                <span>Primary Headline Typeface</span>Gilroy Bold
                            </Typography>
                            <Typography variant="body1">
                                <a href="https://myfonts.com/fonts/radomir-tinkov/gilroy/bold/">myfonts.com/fonts/radomir-tinkov/gilroy/bold/</a>
                            </Typography>
                            <Typography variant="body2">
                                Gilroy is a modern sans serif with a geometric touch. We use Gilroy to create headlines that deliver our messages with impact.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box mb={3} className="primary-headline-example">
                            <Typography variant="h1">
                                Aa
                            </Typography>
                            <Typography variant="h3">
                                AaBbCcDdEeFfGgHhIiJjKk<br/>0123456789
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs>
                        <Box mb={10}>
                            <Typography variant="h2">
                                <span>Digital Alt. Typeface</span>Century Gothic
                            </Typography>
                            <Typography variant="body1">
                                <a href="https://fonts.com/font/monotype/century-gothic">fonts.com/font/monotype/century-gothic</a>
                            </Typography>
                            <Typography variant="body2">
                                Century Gothic Bold is an alternate when Gilroy is unavailable or, for one reason or another, can’t be used. Century Gothic is available on Google Apps but, in the event that it can’t be used, Open Sans Bold can be used as another alternate.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box mb={3} className="alt-headline-example">
                            <Typography variant="h1">
                                Aa
                            </Typography>
                            <Typography variant="h3">
                                AaBbCcDdEeFfGgHhIiJjKk<br/>0123456789
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs>
                        <Box mb={10}>
                            <Typography variant="h2">
                                <span>Bodycopy Typeface</span>Open Sans
                            </Typography>
                            <Typography variant="body1">
                                <a href="https://google.com/fonts/specimen/Open+Sans">google.com/fonts/specimen/Open+Sans</a>
                            </Typography>
                            <Typography variant="body2">
                                Open Sans is a humanist sans serif typeface designed by Steve Matteson, Type Director of Ascender Corp. This version contains the complete 897 character set, which includes the standard ISO Latin 1, Latin CE, Greek and Cyrillic character sets. Open Sans was designed with an upright stress, open forms and a neutral, yet friendly appearance. It was optimized for print, web, and mobile interfaces, and has excellent legibility characteristics in its letter forms.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box mb={3} className="bodycopy-example">
                            <Typography variant="h1">
                                Aa
                            </Typography>
                            <Typography variant="h3">
                                AaBbCcDdEeFfGgHhIiJjKk<br/>0123456789
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs>
                        <Box mb={10}>
                            <Typography variant="h2">
                                Font Weights
                            </Typography>
                            <Typography variant="body2">
                                The full set contains 10 weights, which adds great range for all of our needs.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box mb={3} className="weight-example">
                            <Typography variant="h3" className="extra">
                                AaBbCcDdEeFfGgHhIiJjKk<br/>0123456789
                            </Typography>
                            <Typography variant="h3" className="bold">
                                AaBbCcDdEeFfGgHhIiJjKk<br/>0123456789
                            </Typography>
                            <Typography variant="h3" className="medium">
                                AaBbCcDdEeFfGgHhIiJjKk<br/>0123456789
                            </Typography>
                            <Typography variant="h3" className="normal">
                                AaBbCcDdEeFfGgHhIiJjKk<br/>0123456789
                            </Typography>
                            <Typography variant="h3" className="light">
                                AaBbCcDdEeFfGgHhIiJjKk<br/>0123456789
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={7} mb={2}>
                    <Divider className={custom.divider} />
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/brand/photography"><ArrowBackIosIcon />Brand: Photography</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                        <Box className={custom.next}>
                            <Typography variant="body2">
                                <Link to="/tokens/getting-started">Design Tokens: Getting Started<ArrowForwardIosIcon /></Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Type;
