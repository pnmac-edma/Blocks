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
import { color, font, fontSize, lineHeight } from '@edma/design-tokens/';
import jsonLineHeight from '@edma/design-tokens/json/lineHeight';
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
    lineHeight: {
        textAlign: 'center',
        padding: 20,
        width: '100%',
    },
    lineHeightName: {
        color: theme.palette.type === 'light' ? color.b400 : color.b200,
        fontFamily: font.mono,
    },
    mono: {
        fontFamily: font.mono,
    },
    demo: {
        fontSize: fontSize[1],
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

const LineHeight = () => {
    const custom = useStyles();
    const jsCodeString = JSON.stringify(lineHeight, null, 1);
    const jsonCodeString = JSON.stringify(jsonLineHeight, null, 1);
    const scssCodeString = `
$line-height-1: 1;
$line-height-2: 1.0666666412353516;
$line-height-3: 1.28;
$line-height-4: 1.4506666564941406;`;
    const cssCodeString = `
--line-height-1: 1;
--line-height-2: 1.0666666412353516;
--line-height-3: 1.28;
--line-height-4: 1.4506666564941406;`;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Design Tokens</Typography>
                <Typography variant="h3">Line Height</Typography>
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
import lineHeight from '@edma/design-tokens/js/lineHeight';

//ES6 font weight module
const lineHeight = ${jsCodeString}

export default lineHeight;

` : value=== 3 ? `
${jsonCodeString}

` :
value === 1 ? `
//Import
@import '~@edma/design-tokens/_scss/variables';

//SCSS line height variables${scssCodeString}

` : value === 2 ? `
${cssCodeString}

` : `
${jsonCodeString}

`}
                </SyntaxHighlighter>
                <Grid container spacing={2}>
                    {
                        Object.keys(lineHeight).map((key, index) => (
                            <Grid item className={custom.flexCards} key={key}>
                                <Paper className={custom.lineHeight} style={{lineHeight: lineHeight[key]}}>
                                    <div className={custom.demo}>
                                    No matter how careful you are, there's going to be the sense you missed something, the collapsed feeling under your skin that you didn't experience it all. There's that fallen heart feeling that you rushed right through the moments where you should've been paying attention. Well, get used to that feeling. That's how your whole life will feel some day.<br/>This is all practice.
                                    </div>
                                    {
                                        value === 0 ?
                                            <>
                                                <div className={custom.lineHeightName}>lineHeight[{key}]</div>
                                            </>
                                        : value === 1 ?
                                            <>
                                                <div className={custom.lineHeightName}>$line-height-{key}</div>
                                            </>
                                        : value === 2 ?
                                            <>
                                                <div className={custom.lineHeightName}>--line-height-{key}</div>
                                            </>
                                        :
                                            <>
                                                <div className={custom.lineHeightName}>lineHeight[{key}].value</div>
                                            </>
                                    }
                                    <div className={custom.mono}>({lineHeight[key]})</div>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/tokens/font-weight"><ArrowBackIosIcon />Design Tokens: Font Weight</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                        <Box className={custom.next}>
                            <Typography variant="body2">
                                <Link to="/tokens/shadow">Design Tokens: Shadow<ArrowForwardIosIcon /></Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default LineHeight;
