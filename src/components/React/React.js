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

const Components = () => {
    const custom = useStyles();

    return (
        <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
            <ScrollToTopController />
            <div className='inner-content'>
                <Typography variant="h1">Component Library</Typography>
                <Typography variant="h3" className={custom.h2}>
                    Our Component Library a collection of interface elements that can be reused across PennyMac applications. This frees us up to focus on solving unique, innovative challenges; rather than reinventing interface elements that are already in use.
                </Typography>
                <Box mt={7} mb={7}>
                    <Divider className={custom.divider} />
                </Box>
                <Box mb={3}>
                    <Typography variant="h2">
                        Installing The Component Library
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        Components are simple to install in any project. All of our React Components can be accessed <a href="https://www.npmjs.com/package/@edma/craft-components" target="_blank" rel="noopener noreferrer" className={custom.anchor}>via NPM</a>.
                    </Typography>
                </Box>
                <Box mb={7}>
                    <Typography variant="body1">
                        On the command line, run <code className={custom.code}>npm i @edma/craft-components --save-dev</code> to install the components package into your project as a dev dependency. You can then import React components into your project as needed.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="h2">
                        Including Components In Your Project
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="h3">
                        JavaScript / TypeScript
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        React components can be imported modularly using JavaScript. The same import also works with TypeScript <code>.tsx</code> files. The example below imports the Modal and Snackbar components using a single import. Components can optionally be imported individually as well.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        <code className={custom.code}>import &#123; Modal, Snackbar &#125; from '@edma/react-components';</code>
                    </Typography>
                </Box>
                <Box mb={7}>
                    <Typography variant="body1" className={custom.callout}>
                        Note: specific import commands can be found on the individual component pages throughout this section.
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="h2">
                        Contributing Components To The Library
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Typography variant="body1">
                        React Components at PennyMac begin their lives in an actual application. We use this as our proving ground. Components that test well in the wild, and which present obvious reusable use cases, will eventually be promoted into the component library.
                        <br/><br/>
                        The best way to contribute new components to the library is to focus instead on creating great new designs for your apps, with a mind for ideas that might make good components down the line.
                    </Typography>
                </Box>
                <div className="Content__wrapper">
                    <div className="Content__section">
                        <Box className={custom.prev}>
                            <Typography variant="body2">
                                <Link to="/tokens/z-index"><ArrowBackIosIcon />Patterns: Figma Pattern Library</Link>
                            </Typography>
                        </Box>
                    </div>
                    <div className="Content__section">
                    <Box className={custom.next}>
                        <Typography variant="body2">
                            <Link to="/components/modal">Components: Modal<ArrowForwardIosIcon /></Link>
                        </Typography>
                    </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Components;
