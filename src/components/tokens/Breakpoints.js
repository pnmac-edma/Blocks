import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Divider,
    Grid,
    Paper,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { color, breakpoint, font } from '@edma/design-tokens/';
import jsonBreakpoint from '@edma/design-tokens/json/breakpoint';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ScrollToTopController from '../ScrollToTopController';

const useStyles = makeStyles (theme => ({
    root: {
        display: 'flex',
    },
    flexCards: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        flexWrap: 'no-wrap',
        maxWidth: '100%',
        flexBasis: '50%',
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
    codeBlock: {
        padding: '40px !important',
        borderRadius: 5,
        maxHeight: 400,
    },
    breakpoint: {
        textAlign: 'center',
        padding: 20,
        width: '100%',
    },
    breakpointName: {
        color: theme.palette.type === 'light' ? color.b400 : color.b200,
        fontFamily: font.mono,
    },
    mono: {
        fontFamily: font.mono,
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

const Breakpoints = () => {
    const custom = useStyles();
    const jsCodeString = JSON.stringify(breakpoint, null, 1);
    const jsonCodeString = JSON.stringify(jsonBreakpoint, null, 1);
    const scssCodeString = `
$breakpoint-1: 750px;
$breakpoint-2: 1050px;
$breakpoint-3: 1200px;`;
    const cssCodeString = `
--breakpoint-1: 750px;
--breakpoint-2: 1050px;
--breakpoint-3: 1200px;`;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Design Tokens</Typography>
                <Typography variant="h3">Breakpoints</Typography>
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
                        <Tab label="JS" className={custom.tab} />
                        <Tab label="SCSS" className={custom.tab} />
                        <Tab label="CSS" className={custom.tab} />
                        <Tab label="JSON" className={custom.tab} />
                    </Tabs>
                </Paper>
                <SyntaxHighlighter
                    style={monokaiSublime}
                    language={value === 0 ? 'javascript'
                        : value === 1 ? 'scss'
                        : value === 2 ? 'css'
                        : 'json'}
                    className={custom.codeBlock}
                >
{value === 0 ? `
//Import
import breakpoint from '@edma/design-tokens/js/breakpoint';

//ES6 breakpoints module
const breakpoint = ${jsCodeString}

export default breakpoint;

` : value=== 3 ? `
${jsonCodeString}

` :
value === 1 ? `
//Import
@import '~@edma/design-tokens/_scss/variables';

//SCSS breakpoint variables
${scssCodeString}

` : value === 2 ? `
${cssCodeString}

` : `
${jsonCodeString}

`}
                </SyntaxHighlighter>
                <Grid container spacing={2}>
                    {
                        Object.keys(breakpoint).map((key, index) => (
                            <Grid item xs={1} sm={1} md={1} lg={1} className={custom.flexCards} key={key}>
                                <Paper className={custom.breakpoint} style={{width: breakpoint[key]}}>
                                    {
                                        value === 0 ?
                                            <>
                                                <div className={custom.breakpointName}>breakpoint[{key}]</div>
                                                <div className={custom.mono}>({breakpoint[key]})</div>
                                            </>
                                        : value === 1 ?
                                            <>
                                                <div className={custom.breakpointName}>$breakpoint-{key}</div>
                                                <div className={custom.mono}>({breakpoint[key]})</div>
                                            </>
                                        : value === 2 ?
                                            <>
                                                <div className={custom.breakpointName}>--breakpoint-{key}</div>
                                                <div className={custom.mono}>({breakpoint[key]})</div>
                                            </>
                                        :
                                            <>
                                                <div className={custom.breakpointName}>breakpoint[{key}].value</div>
                                                <div className={custom.mono}>({breakpoint[key]})</div>
                                            </>
                                    }
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/tokens/border-size"><ArrowBackIosIcon />Design Tokens: Border Size</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                        <Box className={custom.next}>
                            <Typography variant="body2">
                                <Link to="/tokens/color">Design Tokens: Colors<ArrowForwardIosIcon /></Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Breakpoints;
