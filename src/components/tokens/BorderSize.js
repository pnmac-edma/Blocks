import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import color from '@edma/design-tokens/js/color';
import borderSize from '@edma/design-tokens/js/borderSize';
import jsonBorderSize from '@edma/design-tokens/json/borderSize';
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
    flexCards: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        flexWrap: 'no-wrap',
        maxWidth: '100%',
        flexBasis: '50%',
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
    borderSize: {
        textAlign: 'center',
        padding: 20,
        width: '100%',
    },
    borderSizeName: {
        color: theme.palette.type === 'light' ? color.b400 : color.b200,
        fontFamily: font.mono,
    },
    mono: {
        fontFamily: font.mono,
    }
}));

const BorderSize = () => {
    const custom = useStyles();
    const jsCodeString = JSON.stringify(borderSize, null, 1);
    const jsonCodeString = JSON.stringify(jsonBorderSize, null, 1);
    const scssCodeString = `
$border-size-1: 1px;
$border-size-2: 2px;`;
    const cssCodeString = `
--border-size-1: 1px;
--border-size-2: 2px;`;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <main className={custom.content}>
            <ScrollToTopController />
            <div className={custom.toolbar} />
            <div className='content'>
                <h2>Border Size</h2>
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
import borderSize from '@edma/design-tokens/js/borderSize';

//ES6 border size module
const borderSize = ${jsCodeString}

export default borderSize;

` : value=== 3 ? `
${jsonCodeString}

` :
value === 1 ? `
//Import
@import '~@edma/design-tokens/_scss/variables';

//SCSS border size variables
${scssCodeString}

` : value === 2 ? `
${cssCodeString}

` : `
${jsonCodeString}

`}
                </SyntaxHighlighter>
                <Grid container spacing={2}>
                    {
                        Object.keys(borderSize).map((key, index) => (
                            <Grid item xs={1} sm={1} md={1} lg={1} className={custom.flexCards} key={key}>
                                <Paper className={custom.borderSize} style={{borderWidth: borderSize[key], borderStyle: 'solid'}}>
                                    {
                                        value === 0 ?
                                            <>
                                                <div className={custom.borderSizeName}>borderSize[{key}]</div>
                                            </>
                                        : value === 1 ?
                                            <>
                                                <div className={custom.borderSizeName}>$border-size-{key}</div>
                                            </>
                                        : value === 2 ?
                                            <>
                                                <div className={custom.borderSizeName}>--border-size-{key}</div>
                                            </>
                                        :
                                            <>
                                                <div className={custom.borderSizeName}>borderSize[{key}].value</div>
                                            </>
                                    }
                                    <div className={custom.mono}>({borderSize[key]})</div>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </main>
    );
}

export default BorderSize;
