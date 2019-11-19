import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import color from '@edma/design-tokens/js/color';
import font from '@edma/design-tokens/js/font';
import z from '@edma/design-tokens/js/z';
import jsonZ from '@edma/design-tokens/json/z';
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
        flexBasis: '100%',
        margin: '-11px 0',
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
    zindex: {
        textAlign: 'center',
        padding: 20,
        width: '100%',
    },
    zindexName: {
        color: theme.palette.type === 'light' ? color.b400 : color.b200,
        fontFamily: font.mono,
    }
}));

const Zindex = () => {
    const custom = useStyles();
    const jsCodeString = JSON.stringify(z, null, 1);
    const jsonCodeString = JSON.stringify(jsonZ, null, 1);
    const scssCodeString = `
$z-0: 0;
$z-1: 1;
$z-2: 10;
$z-3: 100;
$z-4: 1000;
$z-5: 10000;
$z-back: -1;`;
    const cssCodeString = `
--z-0: 0;
--z-1: 1;
--z-2: 10;
--z-3: 100;
--z-4: 1000;
--z-5: 10000;
--z-back: -1;`;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <main className={custom.content}>
            <ScrollToTopController />
            <div className={custom.toolbar} />
            <div className='content'>
                <h2>Z-index</h2>
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
import z from '@edma/design-tokens/js/z';

//ES6 z-index module
const z = ${jsCodeString}

export default z;

` : value=== 3 ? `
${jsonCodeString}

` :
value === 1 ? `
//Import
@import '~@edma/design-tokens/_scss/variables';

//SCSS z-index variables${scssCodeString}

` : value === 2 ? `
${cssCodeString}

` : `
${jsonCodeString}

`}
                </SyntaxHighlighter>
                <Grid container spacing={2}>
                    {
                        Object.keys(z).map((key, index) => (
                            <Grid item xs={1} sm={1} md={1} lg={1} className={custom.flexCards} key={key}>
                                <Paper className={custom.zindex} style={{zIndex: z[key]}}>
                                    {
                                        value === 0 ?
                                            key === 'back' ?
                                                <>
                                                    <div className={custom.zindexName}>z['{key}']</div>
                                                </>
                                            :
                                                <>
                                                    <div className={custom.zindexName}>z[{key}]</div>
                                                </>
                                        : value === 1 ?
                                            <>
                                                <div className={custom.zindexName}>$z-{key}</div>
                                            </>
                                        : value === 2 ?
                                            <>
                                                <div className={custom.zindexName}>--z-{key}</div>
                                            </>
                                        :
                                            key === 'back' ?
                                                <>
                                                    <div className={custom.zindexName}>z['{key}'].value</div>
                                                </>
                                            :
                                                <>
                                                    <div className={custom.zindexName}>z[{key}].value</div>
                                                </>
                                    }
                                    <div>({z[key]})</div>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </main>
    );
}

export default Zindex;
