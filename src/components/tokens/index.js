import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
    Box,
    Divider,
    Typography
} from '@material-ui/core/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { color, borderRadius, spacing, fontSize } from '@edma/design-tokens/';
import ScrollToTopController from '../ScrollToTopController';

const useStyles = makeStyles (theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        background: theme.palette.type === 'light' ? color.white : color.black,
        textAlign: 'left'
    },
    h2: {
        lineHeight: 1.5
    },
    code: {
        background: theme.palette.type === 'light' ? color.c50 : color.g700
    },
    anchor: {
        color: theme.palette.type === 'light' ? color.b500 : color.b200,
    },
    callout: {
        background: theme.palette.type === 'light' ? color.p50 : color.g700,
        borderRadius: borderRadius[1],
        padding: spacing[2],
        fontSize: fontSize[0]
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

const Tokens = () => {
    const custom = useStyles();

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Design Tokens</Typography>
                <Typography variant="h3" className={custom.h2}>
                    In <a href="https://bradfrost.com/blog/post/atomic-web-design/#atoms" target="_blank" rel="noopener noreferrer" className={custom.anchor}>Atomic Design</a> terms, Design Tokens store our visual design Atoms, and translate them between visual assets and code. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain scalable and consistent UI.
                </Typography>
                <Box mt={7} mb={7}>
                    <Divider className={custom.divider} />
                </Box>
                <Box mb={3}>
                    <Typography variant="h2">
                        Including Design Tokens
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        Design Tokens are simple to include in any project. All of our design tokens can be accessed <a href="https://www.npmjs.com/package/@edma/design-tokens" target="_blank" rel="noopener noreferrer" className={custom.anchor}>via NPM</a>.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        On the command line, run <code className={custom.code}>npm i @edma/design-tokens --save-dev</code> to install the tokens package into your project as a dev dependency. You can then import tokens in the language that you need for your project.
                    </Typography>
                </Box>
                <Box mb={7}>
                    <Typography variant="body1" className={custom.callout}>
                        Note: specific import commands can be found on the individual token pages throughout this section.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="h2">
                        Contribution Workflow
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        Design Tokens at PennyMac begin their lives in our <a href="https://www.figma.com/file/SKkSxha8LQG7lPvIJ2PWHf/Design-Tokens?node-id=0%3A1" target="_blank" rel="noopener noreferrer" className={custom.anchor}>Figma document</a>. Running an NPM script, <code className={custom.code}>npm run tokens</code>, will transpile all existing tokens from Figma into 4 supported languages: JavaScript ES6 modules, CSS3 variables, SCSS variables, and raw JSON.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        Once the token files have been generated and tested, they can then be reversioned and deployed to NPM for inclusion in your projects by running <code className={custom.code}>npm publish</code>.
                    </Typography>
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/brand/typography"><ArrowBackIosIcon />Brand: Typography</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                    <Box className={custom.next}>
                        <Typography variant="body2">
                            <Link to="/tokens/border-radius">Design Tokens: Border Radius<ArrowForwardIosIcon /></Link>
                        </Typography>
                    </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Tokens;
