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
import { color, font, fontSize, weight } from '@edma/design-tokens/';
import jsonFontWeight from '@edma/design-tokens/json/weight';
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
    fontWeight: {
        textAlign: 'center',
        padding: 20,
        width: '100%',
    },
    fontWeightName: {
        color: theme.palette.type === 'light' ? color.b400 : color.b200,
        fontFamily: font.mono,
        fontWeight: weight['regular'],
        fontSize: fontSize['body1']
    },
    mono: {
        fontWeight: weight['regular'],
        fontFamily: font.mono,
    },
    demo: {
        fontSize: fontSize['h3'],
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

const FontWeight = () => {
    const custom = useStyles();
    const jsCodeString = JSON.stringify(weight, null, 1);
    const jsonCodeString = JSON.stringify(jsonFontWeight, null, 1);
    const scssCodeString = `
$weight-bold: 700;
$weight-medium: 500;
$weight-regular: 400;
$weight-light: 300;
$weight-ultralight: 100;`;
    const cssCodeString = `
--weight-bold: 700;
--weight-medium: 500;
--weight-regular: 400;
--weight-light: 300;
--weight-ultralight: 100;`;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Design Tokens</Typography>
                <Typography variant="h3">Font Weight</Typography>
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
import { weight } from '@edma/design-tokens';
//or
import weight from '@edma/design-tokens/js/weight';

//ES6 font weight module
const weight = ${jsCodeString}

export default weight;

` : value=== 3 ? `
${jsonCodeString}

` :
value === 1 ? `
//Import
@import '~@edma/design-tokens/_scss/variables';

//SCSS font weight variables${scssCodeString}

` : value === 2 ? `
${cssCodeString}

` : `
${jsonCodeString}

`}
                </SyntaxHighlighter>
                <Grid container spacing={2}>
                    {
                        Object.keys(weight).map((key, index) => (
                            <Grid item className={custom.flexCards} key={key}>
                                <Paper className={custom.fontWeight} style={{fontWeight: weight[key]}}>
                                    <div className={custom.demo}>{key}</div>
                                    {
                                        value === 0 ?
                                            <>
                                                <div className={custom.fontWeightName}>weight['{key}']</div>
                                            </>
                                        : value === 1 ?
                                            <>
                                                <div className={custom.fontWeightName}>$weight-{key}</div>
                                            </>
                                        : value === 2 ?
                                            <>
                                                <div className={custom.fontWeightName}>--weight-{key}</div>
                                            </>
                                        :
                                            <>
                                                <div className={custom.fontWeightName}>weight['{key}'].value</div>
                                            </>
                                    }
                                    <div className={custom.mono}>({weight[key]})</div>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/tokens/font-size"><ArrowBackIosIcon />Design Tokens: Font Size</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                        <Box className={custom.next}>
                            <Typography variant="body2">
                                <Link to="/tokens/line-height">Design Tokens: Line Height<ArrowForwardIosIcon /></Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default FontWeight;
