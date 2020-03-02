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
} from '@material-ui/core/';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { color, font, fontSize, shadow } from '@edma/design-tokens/';
import jsonShadow from '@edma/design-tokens/json/shadow';
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
        flexBasis: '100%',
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
    shadow: {
        textAlign: 'center',
        padding: 20,
        width: '100%',
    },
    shadowName: {
        color: theme.palette.type === 'light' ? color.b400 : color.b200,
        fontFamily: font.mono,
    },
    mono: {
        fontFamily: font.mono,
    },
    demo: {
        fontSize: fontSize[3],
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

const Shadow = () => {
    const custom = useStyles();
    const jsCodeString = JSON.stringify(shadow, null, 1);
    const jsonCodeString = JSON.stringify(jsonShadow, null, 1);
    const scssCodeString = `
$shadow-1: 1px 1px 2px rgba(0, 0, 0, 0.25);
$shadow-2: 2px 2px 3px rgba(0, 0, 0, 0.25);
$shadow-3: 0px 8px 10px rgba(0, 0, 0, 0.20000000298023224);`;
    const cssCodeString = `
--shadow-1: 1px 1px 2px rgba(0, 0, 0, 0.25);
--shadow-2: 2px 2px 3px rgba(0, 0, 0, 0.25);
--shadow-3: 0px 8px 10px rgba(0, 0, 0, 0.20000000298023224);`;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Design Tokens</Typography>
                <Typography variant="h3">Shadows</Typography>
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
import shadow from '@edma/design-tokens/js/shadow';

//ES6 shadow module
const shadow = ${jsCodeString}

export default shadow;

` : value=== 3 ? `
${jsonCodeString}

` :
value === 1 ? `
//Import
@import '~@edma/design-tokens/_scss/variables';

//SCSS shadow variables${scssCodeString}

` : value === 2 ? `
${cssCodeString}

` : `
${jsonCodeString}

`}
                </SyntaxHighlighter>
                <Grid container spacing={2}>
                    {
                        Object.keys(shadow).map((key, index) => (
                            <Grid item className={custom.flexCards} key={key}>
                                <Paper className={custom.shadow} style={{boxShadow: shadow[key]}}>
                                    <div className={custom.demo}>Shadow {key}</div>
                                    {
                                        value === 0 ?
                                            <>
                                                <div className={custom.shadowName}>shadow[{key}]</div>
                                            </>
                                        : value === 1 ?
                                            <>
                                                <div className={custom.shadowName}>$shadow-{key}</div>
                                            </>
                                        : value === 2 ?
                                            <>
                                                <div className={custom.shadowName}>--shadow-{key}</div>
                                            </>
                                        :
                                            <>
                                                <div className={custom.shadowName}>shadow[{key}].value</div>
                                            </>
                                    }
                                    <div className={custom.mono}>({shadow[key]})</div>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/tokens/line-height"><ArrowBackIosIcon />Design Tokens: Line Height</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                        <Box className={custom.next}>
                            <Typography variant="body2">
                                <Link to="/tokens/spacing">Design Tokens: Spacing<ArrowForwardIosIcon /></Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Shadow;
