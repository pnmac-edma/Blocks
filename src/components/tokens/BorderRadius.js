import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import color from '@edma/design-tokens/js/color';
import radius from '@edma/design-tokens/js/borderRadius';
import jsonRadius from '@edma/design-tokens/json/borderRadius';
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
    radius: {
        textAlign: 'center',
        padding: 20,
    },
    radiusName: {
        color: theme.palette.type === 'light' ? color.b400 : color.b200,
        fontFamily: font.mono,
    },
    mono: {
        fontFamily: font.mono,
    }
}));

const BorderRadius = () => {
    const custom = useStyles();
    const jsCodeString = JSON.stringify(radius, null, 1);
    const jsonCodeString = JSON.stringify(jsonRadius, null, 1);
    const scssCodeString = `$border-radius-1: 4px;`;
    const cssCodeString = `--border-radius-1: 4px;`;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <main className={custom.content}>
            <ScrollToTopController />
            <div className={custom.toolbar} />
            <div className='content'>
                <h2>Border Radius</h2>
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
import radius from '@edma/design-tokens/js/borderRadius';

//ES6 border radius module
const borderRadius = ${jsCodeString}

export default borderRadius;

` : value=== 3 ? `
${jsonCodeString}

` :
value === 1 ? `
//Import
@import '~@edma/design-tokens/_scss/variables';

//SCSS border radius variables
${scssCodeString}

` : value === 2 ? `
${cssCodeString}

` : `
${jsonCodeString}

`}
                </SyntaxHighlighter>
                <div>
                    {
                        Object.keys(radius).map((key, index) => (
                            <Paper className={custom.radius} key={key} style={{borderRadius: radius[key]}}>
                                {
                                    value === 0 ?
                                        <>
                                            <div className={custom.radiusName}>radius[{key}]</div>
                                        </>
                                    : value === 1 ?
                                        <>
                                            <div className={custom.radiusName}>$border-radius-{key}</div>
                                        </>
                                    : value === 2 ?
                                        <>
                                            <div className={custom.radiusName}>--border-radius-{key}</div>
                                        </>
                                    :
                                        <>
                                            <div className={custom.radiusName}>borderRadius[{key}].value</div>
                                        </>
                                }
                                <div className={custom.mono}>({radius[key]})</div>
                            </Paper>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}

export default BorderRadius;
