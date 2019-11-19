import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import color from '@edma/design-tokens/js/color';
import font from '@edma/design-tokens/js/font';
import fontSize from '@edma/design-tokens/js/fontSize';
import shadow from '@edma/design-tokens/js/shadow';
import jsonShadow from '@edma/design-tokens/json/shadow';
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
}));

const Shadow = () => {
    const custom = useStyles();
    const jsCodeString = JSON.stringify(shadow, null, 1);
    const jsonCodeString = JSON.stringify(jsonShadow, null, 1);
    const scssCodeString = `
$shadow-1: 1px 1px 2px rgba(0, 0, 0, 0.25);
$shadow-2: 2px 2px 3px rgba(0, 0, 0, 0.25);`;
    const cssCodeString = `
--shadow-1: 1px 1px 2px rgba(0, 0, 0, 0.25);
--shadow-2: 2px 2px 3px rgba(0, 0, 0, 0.25);`;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <main className={custom.content}>
            <ScrollToTopController />
            <div className={custom.toolbar} />
            <div className='content'>
                <h2>Shadow</h2>
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
            </div>
        </main>
    );
}

export default Shadow;
