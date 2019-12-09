import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import color from '@edma/design-tokens/js/color';
import jsonColor from '@edma/design-tokens/json/color';
import font from '@edma/design-tokens/js/font';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ScrollToTopController from '../ScrollToTopController';

const useStyles = makeStyles (theme => ({
    root: {
        display: 'flex',
    },
    tabs: {
        display: 'inline-block',
        overflow: 'hidden',
    },
    tab: {
        minWidth: 75,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        margin: 40,
        flexGrow: 1,
        padding: theme.spacing(2),
        textAlign: 'left',
    },
    codeBlock: {
        padding: '40px !important',
        borderRadius: 5,
        maxHeight: 400,
    },
    grid: {
        margin: '0 -16px',
    },
    colorContainer: {
        width: 200,
        textAlign: 'center',
    },
    colorBackground: {
        position: 'relative',
        height: 100,
        width: `100%`,
    },
    colorName: {
        color: theme.palette.type === 'light' ? color.b400 : color.b200,
        margin: '0.5rem 0',
    },
    colorVal: {
        fontFamily: font.mono,
        fontSize: '0.7rem',
        margin: '0 0 0.2rem',
        color: theme.palette.type === 'light' ? color.g400 : color.g300,
        transition: 'all .2s ease-in-out',
        '&:hover': {
            color: theme.palette.type === 'light' ? color.black : color.white,
            cursor: 'pointer',
        },
        '&:last-of-type': {
            margin: '0 0 1rem',
        },
    },
    flexCards: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        flexWrap: 'no-wrap',
        width: '100%',
    },
    wcag: {
        position: 'absolute',
        bottom: 0,
        fontSize: '0.7rem',
        textAlign: 'left',
    },
    wcagLeft: {
        left: '0.5rem'
    },
    wcagRight: {
        right: '0.5rem'
    },
    logo: {
        '& path': {
            fill: '#fff',
        }
    }
}));

const digitToHex = c => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

const rgbaToHex = (r, g, b, a) => {
    const hex = '#'
        + digitToHex(r).toUpperCase()
        + digitToHex(g).toUpperCase()
        + digitToHex(b).toUpperCase();
    return hex;
}

const Colors = () => {
    const custom = useStyles();
    const jsCodeString = JSON.stringify(color, null, 1);
    const jsonCodeString = JSON.stringify(jsonColor, null, 1);
    const scssCodeString = `
$color-black: #23241f; /* Black */
$color-white: #ffffff; /* White */
$color-g-50: #fafafa; /* Gray 50 */
$color-g-100: #e6e6e6; /* Gray 100 */
$color-g-200: #d9d9d9; /* Gray 200 */
$color-g-300: #c0c1ba; /* Gray 300 */
$color-g-400: #a1a29c; /* Gray 400 */
$color-g-500: #787973; /* Gray 500 */
$color-g-600: #63655f; /* Gray 600 */
$color-g-700: #424242; /* Gray 700 */
$color-g-800: #37383b; /* Gray 800 */
$color-g-900: #303030; /* Gray 900 */
$color-y-50: #fdf7df; /* Yellow 50 */
$color-y-100: #faeaae; /* Yellow 100 */
$color-y-200: #f6dc7a; /* Yellow 200 */
$color-y-300: #f3d041; /* Yellow 300 */
$color-y-400: #f1c400; /* Yellow 400 */
$color-y-500: #f0ba00; /* Yellow 500 */
$color-y-600: #f1ac00; /* Yellow 600 */
$color-y-700: #f29900; /* Yellow 700 */
$color-y-800: #f28800; /* Yellow 800 */
$color-y-900: #f36800; /* Yellow 900 */
$color-r-50: #ffebee; /* Red 50 */
$color-r-100: #ffcdd1; /* Red 100 */
$color-r-200: #f79a97; /* Red 200 */
$color-r-300: #ef736e; /* Red 300 */
$color-r-400: #f95248; /* Red 400 */
$color-r-500: #fe4129; /* Red 500 */
$color-r-600: #f0372a; /* Red 600 */
$color-r-700: #de2b25; /* Red 700 */
$color-r-800: #d1231d; /* Header */
$color-r-900: #c3120e; /* Red 900 */
$color-p-50: #ffe9f3; /* Pink 50 */
$color-p-100: #ffc7e2; /* Pink 100 */
$color-p-200: #ffa3cf; /* Pink 200 */
$color-p-300: #ff7fbb; /* Pink 300 */
$color-p-400: #ff63a8; /* Pink 400 */
$color-p-500: #ff4f95; /* Pink 500 */
$color-p-600: #ee4c89; /* Pink 600 */
$color-p-700: #de3e80; /* Pink 700 */
$color-p-800: #cf357b; /* Pink 800 */
$color-p-900: #b62979; /* Pink 900 */
$color-v-50: #f9e6f6; /* Violet 50 */
$color-v-100: #eec1e9; /* Violet 100 */
$color-v-200: #e297da; /* Violet 200 */
$color-v-300: #d56dca; /* Violet 300 */
$color-v-400: #ca4abe; /* Violet 400 */
$color-v-500: #be27b2; /* Violet 500 */
$color-v-600: #b023ac; /* Violet 600 */
$color-v-700: #9d1ca5; /* Violet 700 */
$color-v-800: #8d189e; /* Violet 800 */
$color-v-900: #6f0f91; /* Violet 900 */
$color-b-50: #e8edfa; /* Blue 50 */
$color-b-100: #c6d1f3; /* Blue 100 */
$color-b-200: #9fb3ec; /* Blue 200 */
$color-b-300: #7595e4; /* Blue 300 */
$color-b-400: #517bde; /* Blue 400 */
$color-b-500: #2763d6; /* Blue 500 */
$color-b-600: #1e5bcb; /* Blue 600 */
$color-b-700: #0c50be; /* Blue 700 */
$color-b-800: #0046b2; /* Blue 800 */
$color-b-900: #003087; /* Blue 900 */
$color-c-50: #e0f4fa; /* Cyan 50 */
$color-c-100: #b2e2f3; /* Cyan 100 */
$color-c-200: #80cfeb; /* Cyan 200 */
$color-c-300: #52bce3; /* Cyan 300 */
$color-c-400: #31afdf; /* Cyan 400 */
$color-c-500: #00a1dc; /* Cyan 500 */
$color-c-600: #0094cf; /* Cyan 600 */
$color-c-700: #0082bc; /* Cyan 700 */
$color-c-800: #0071a9; /* Cyan 800 */
$color-c-900: #005289; /* Cyan 900 */
$color-t-50: #e4fdf0; /* Teal 50 */
$color-t-100: #bef9d9; /* Teal 100 */
$color-t-200: #8ef5c0; /* Teal 200 */
$color-t-300: #48f1a5; /* Teal 300 */
$color-t-400: #00eb8e; /* Teal 400 */
$color-t-500: #00e47b; /* Teal 500 */
$color-t-600: #00d36f; /* Teal 600 */
$color-t-700: #00bf60; /* Teal 700 */
$color-t-800: #00ad54; /* Teal 800 */
$color-t-900: #14892c; /* Teal 900 */`;
const cssCodeString = `
--color-black: #23241f; /* Black */
--color-white: #ffffff; /* White */
--color-g-50: #fafafa; /* Gray 50 */
--color-g-100: #e6e6e6; /* Gray 100 */
--color-g-200: #d9d9d9; /* Gray 200 */
--color-g-300: #c0c1ba; /* Gray 300 */
--color-g-400: #a1a29c; /* Gray 400 */
--color-g-500: #787973; /* Gray 500 */
--color-g-600: #63655f; /* Gray 600 */
--color-g-700: #424242; /* Gray 700 */
--color-g-800: #37383b; /* Gray 800 */
--color-g-900: #303030; /* Gray 900 */
--color-y-50: #fdf7df; /* Yellow 50 */
--color-y-100: #faeaae; /* Yellow 100 */
--color-y-200: #f6dc7a; /* Yellow 200 */
--color-y-300: #f3d041; /* Yellow 300 */
--color-y-400: #f1c400; /* Yellow 400 */
--color-y-500: #f0ba00; /* Yellow 500 */
--color-y-600: #f1ac00; /* Yellow 600 */
--color-y-700: #f29900; /* Yellow 700 */
--color-y-800: #f28800; /* Yellow 800 */
--color-y-900: #f36800; /* Yellow 900 */
--color-r-50: #ffebee; /* Red 50 */
--color-r-100: #ffcdd1; /* Red 100 */
--color-r-200: #f79a97; /* Red 200 */
--color-r-300: #ef736e; /* Red 300 */
--color-r-400: #f95248; /* Red 400 */
--color-r-500: #fe4129; /* Red 500 */
--color-r-600: #f0372a; /* Red 600 */
--color-r-700: #de2b25; /* Red 700 */
--color-r-800: #d1231d; /* Header */
--color-r-900: #c3120e; /* Red 900 */
--color-p-50: #ffe9f3; /* Pink 50 */
--color-p-100: #ffc7e2; /* Pink 100 */
--color-p-200: #ffa3cf; /* Pink 200 */
--color-p-300: #ff7fbb; /* Pink 300 */
--color-p-400: #ff63a8; /* Pink 400 */
--color-p-500: #ff4f95; /* Pink 500 */
--color-p-600: #ee4c89; /* Pink 600 */
--color-p-700: #de3e80; /* Pink 700 */
--color-p-800: #cf357b; /* Pink 800 */
--color-p-900: #b62979; /* Pink 900 */
--color-v-50: #f9e6f6; /* Violet 50 */
--color-v-100: #eec1e9; /* Violet 100 */
--color-v-200: #e297da; /* Violet 200 */
--color-v-300: #d56dca; /* Violet 300 */
--color-v-400: #ca4abe; /* Violet 400 */
--color-v-500: #be27b2; /* Violet 500 */
--color-v-600: #b023ac; /* Violet 600 */
--color-v-700: #9d1ca5; /* Violet 700 */
--color-v-800: #8d189e; /* Violet 800 */
--color-v-900: #6f0f91; /* Violet 900 */
--color-b-50: #e8edfa; /* Blue 50 */
--color-b-100: #c6d1f3; /* Blue 100 */
--color-b-200: #9fb3ec; /* Blue 200 */
--color-b-300: #7595e4; /* Blue 300 */
--color-b-400: #517bde; /* Blue 400 */
--color-b-500: #2763d6; /* Blue 500 */
--color-b-600: #1e5bcb; /* Blue 600 */
--color-b-700: #0c50be; /* Blue 700 */
--color-b-800: #0046b2; /* Blue 800 */
--color-b-900: #003087; /* Blue 900 */
--color-c-50: #e0f4fa; /* Cyan 50 */
--color-c-100: #b2e2f3; /* Cyan 100 */
--color-c-200: #80cfeb; /* Cyan 200 */
--color-c-300: #52bce3; /* Cyan 300 */
--color-c-400: #31afdf; /* Cyan 400 */
--color-c-500: #00a1dc; /* Cyan 500 */
--color-c-600: #0094cf; /* Cyan 600 */
--color-c-700: #0082bc; /* Cyan 700 */
--color-c-800: #0071a9; /* Cyan 800 */
--color-c-900: #005289; /* Cyan 900 */
--color-t-50: #e4fdf0; /* Teal 50 */
--color-t-100: #bef9d9; /* Teal 100 */
--color-t-200: #8ef5c0; /* Teal 200 */
--color-t-300: #48f1a5; /* Teal 300 */
--color-t-400: #00eb8e; /* Teal 400 */
--color-t-500: #00e47b; /* Teal 500 */
--color-t-600: #00d36f; /* Teal 600 */
--color-t-700: #00bf60; /* Teal 700 */
--color-t-800: #00ad54; /* Teal 800 */
--color-t-900: #14892c; /* Teal 900 */`;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <main className={custom.content}>
            <ScrollToTopController />
            <div className={custom.toolbar} />
            <div className='content'>
                <h2>Colors</h2>
                <Paper className={custom.tabs}>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="Toggle JS / JSON"
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
import color from '@edma/design-tokens/js/color';

//ES6 color module
const color = ${jsCodeString}

export default color;

` : value=== 3 ? `
${jsonCodeString}

` :
value === 1 ? `
//Import
@import '~@edma/design-tokens/_scss/variables';

//SCSS color variables${scssCodeString}

` : value === 2 ? `
${cssCodeString}

` : `
${jsonCodeString}

`}
                </SyntaxHighlighter>
                <Grid container spacing={4} justify='space-between' className={custom.grid}>
                    {
                        Object.keys(color).map((key, index) => (
                            <Grid item xs={5} sm={4} md={3} lg={3} className={custom.flexCards} key={key}>
                                <Paper className={custom.colorContainer}>
                                    <div style={{background: color[key]}} className={custom.colorBackground}>
                                        <span className={`${custom.wcag} ${custom.wcagLeft}`} style={{color: jsonColor.color[key]['against']}}>
                                            { jsonColor.color[key]['compliance'] }<br />
                                            { jsonColor.color[key]['ratio'] }
                                        </span>
                                        {
                                            jsonColor.color[key]['lightAgainst'] ?
                                            <span className={`${custom.wcag} ${custom.wcagRight}`} style={{color: jsonColor.color[key]['lightAgainst']}}>
                                                { jsonColor.color[key]['lightCompliance'] }<br />
                                                { jsonColor.color[key]['lightRatio'] }
                                            </span>
                                            :
                                            <span />
                                        }
                                    </div>
                                    <div className={custom.colorName}>
                                        {
                                            jsonColor.color[key]['comment']
                                        }
                                    </div>
                                    {
                                        value === 0 ?
                                            <div className={custom.colorVal}>
                                                {
                                                    'color.' + key
                                                }
                                            </div>
                                        : value === 1 ?
                                            <div className={custom.colorVal}>
                                                {
                                                    key.toLowerCase() !== 'black' && key.toLowerCase() !== 'white'
                                                        ? '$color-' + key.split(/([0-9]+)/)[0]
                                                            + '-' + key.split(/([0-9]+)/)[1]
                                                        : '$color-' + key
                                                }
                                            </div>
                                        : value === 2 ?
                                            <div className={custom.colorVal}>
                                                {
                                                    key.toLowerCase() !== 'black' && key.toLowerCase() !== 'white'
                                                        ? '--color-' + key.split(/([0-9]+)/)[0]
                                                            + '-' + key.split(/([0-9]+)/)[1]
                                                        : '--color-' + key
                                                }
                                            </div>
                                        : value === 3 ?
                                            <div>
                                                <Tooltip title="RGBA" placement='top' enterDelay={200} leaveDelay={200}>
                                                    <div className={custom.colorVal}>{color[key]}</div>
                                                </Tooltip>
                                                <Tooltip title="Hex" placement='top' enterDelay={200} leaveDelay={200}>
                                                    <div className={custom.colorVal}>
                                                        {
                                                            rgbaToHex(
                                                                Number(Object.values(color)[index]
                                                                    .split('(')[1].split(')')[0].split(',')[0]),
                                                                Number(Object.values(color)[index]
                                                                    .split('(')[1].split(')')[0].split(',')[1]),
                                                                Number(Object.values(color)[index]
                                                                    .split('(')[1].split(')')[0].split(',')[2]),
                                                                1
                                                            )
                                                        }
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        : null
                                    }
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </main>
    );
}

export default Colors;
