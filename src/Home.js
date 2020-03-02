import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Box,
  Divider,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import { Link } from "react-router-dom";
import borderRadius from '@edma/design-tokens/js/borderRadius';
import color from '@edma/design-tokens/js/color';
import fontSize from '@edma/design-tokens/js/fontSize';
import ScrollToTopController from './components/ScrollToTopController';
import { ReactComponent as GettingStartedLight } from './assets/img/graphic.gettingstarted.light.svg';
import { ReactComponent as GettingStartedDark } from './assets/img/graphic.gettingstarted.dark.svg';
import { ReactComponent as ComponentsLight } from './assets/img/graphic.components.light.svg';
import { ReactComponent as ComponentsDark } from './assets/img/graphic.components.dark.svg';
import { ReactComponent as HouseLight } from './assets/img/graphic.house.light.svg';
import { ReactComponent as HouseDark } from './assets/img/graphic.house.dark.svg';
import { ReactComponent as FoundationIcon } from './assets/img/icon.foundation.svg';
import { ReactComponent as DesignIcon } from './assets/img/icon.design.svg';
import { ReactComponent as ComponentsIcon } from './assets/img/icon.components.svg';
import { ReactComponent as PatternsIcon } from './assets/img/icon.patterns.svg';

const useStyles = makeStyles(theme => ({
  content: {
    background: theme.palette.type === 'light' ? color.white : color.black,
    borderRadius: 10
  },
  caption: {
    fontFamily: 'Open Sans',
    color: theme.palette.type === 'light' ? color.g700 : color.g300,
    minWidth: 260
  },
  divider: {
    height: 4,
    color: theme.palette.type === 'light' ? color.g100 : color.g700
  },
  updates: {
    display: 'table-cell',
    background: theme.palette.type === 'light' ? color.g100 : color.g800,
    borderRadius: borderRadius[1],
    padding: 32
  },
  resources: {
    display: 'table-cell',
    padding: 32
  },
  anchor: {
    color: theme.palette.type === 'light' ? color.b700 : color.b200,
  },
  inlineCode: {
    background: theme.palette.type === 'light' ? color.g200 : color.g700,
    fontSize: fontSize['0'],
  }
}));

let captions = require('./captions.json'),
  caption = captions[Math.floor(Math.random()*captions.length)];

export default function Home(props) {
  const custom = useStyles();
  const theme = useTheme();

  return (
    <main className="Main">
      <ScrollToTopController />
      <div className="Main__header">
        <div className="Main__left-header">
          <Typography variant="h1" className="Main__right-header">
            Home
          </Typography>
          <Typography variant="h3">
            {caption}
          </Typography>
        </div>
        <div className={`Main__right-header${props.transitioning ? " is-transitioning" : ""}`}>
          {
            theme.palette.type === 'light' ?
              <HouseLight />
            :
              <HouseDark />
          }
        </div>
      </div>

      <Box className={`Content ${custom.content}`} boxShadow={16}>
        <div className="Content__wrapper">
          <div className="Content__section">
            <Typography variant="h2">
              Getting Started
            </Typography>
            <Typography variant="h3">
              These guides will show you how Home can help you design for PennyMac platforms.
            </Typography>
            <List className="Content__list">
              <ListItem>
                <Link key='0' to='/foundation/getting-started' className={custom.anchor}>Design Foundation</Link>
              </ListItem>
              <ListItem>
                <Link key='0' to='/brand/getting-started' className={custom.anchor}>Brand Guidelines</Link>
              </ListItem>
              <ListItem>
                <Link key='0' to='/tokens/getting-started' className={custom.anchor}>Using Design Tokens</Link>
              </ListItem>
              <ListItem>
                <Link key='0' to='/contribute' className={custom.anchor}>Contributing to Home</Link>
              </ListItem>
            </List>
          </div>
          <div className="Content__section">
          {
            theme.palette.type === 'light' ?
              <GettingStartedLight />
            :
              <GettingStartedDark />
          }
          </div>
        </div>
        <div className="Content__wrapper">
          <div className="Content__section">
          {
            theme.palette.type === 'light' ?
              <ComponentsLight />
            :
              <ComponentsDark />
          }
          </div>
          <div className="Content__section">
            <Typography variant="h2">
              Components
            </Typography>
            <Typography variant="h5" className={custom.caption}>
              Reusable building blocks that make it easy to rapidly create new product and features.
            </Typography>
            <List className="Content__list">
              <ListItem>
                <Link key='0' to='/components/getting-started' className={custom.anchor}>Using Components</Link>
              </ListItem>
              <ListItem>
                <Link key='0' to='/components/' className={custom.anchor}>Storybook Component Library</Link>
              </ListItem>
            </List>
          </div>
        </div>
        <Box mt={7}>
          <Divider className={custom.divider} />
        </Box>
        <Box>
          <div className="Content__bottom-section">
            <FoundationIcon />
            <Typography variant="h6">
              Foundation
            </Typography>
            <Typography variant="body2" className="Content__pg">
              Find out how we make sure that our design is accessible, user focused, and intentional.
            </Typography>
            <Typography variant="body2" className="Content__pg">
              <Link key='0' to='/content' className={custom.anchor}>View Core Principles</Link>
            </Typography>
          </div>
          <div className="Content__bottom-section">
            <DesignIcon />
            <Typography variant="h6">
              Brand
            </Typography>
            <Typography variant="body2" className="Content__pg">
              Learn how we use design to maintain a consistent and friendly brand image.
            </Typography>
            <Typography variant="body2" className="Content__pg">
            <Link key='0' to='/brand/getting-started' className={custom.anchor}>View Brand Guidelines</Link>
            </Typography>
          </div>
          <div className="Content__bottom-section">
            <PatternsIcon />
            <Typography variant="h6">
              Patterns
            </Typography>
            <Typography variant="body2" className="Content__pg">
              See how we put the pieces together to create meaningful product experiences.
            </Typography>
            <Typography variant="body2" className="Content__pg">
            <Link key='0' to='/patterns' className={custom.anchor}>View Pattern Library</Link>
            </Typography>
          </div>
          <div className="Content__bottom-section">
            <ComponentsIcon />
            <Typography variant="h6">
              Components
            </Typography>
            <Typography variant="body2" className="Content__pg">
              Use components as building blocks while you develop new products and features.
            </Typography>
            <Typography variant="body2" className="Content__pg">
              <Link key='0' to='/components' className={custom.anchor}>View Component Library</Link>
            </Typography>
          </div>
        </Box>
        <Box mb={8}>
          <Divider className={custom.divider} />
        </Box>
        <Box className="Content__wrapper">
          <div className={`Content__section ${custom.updates}`}>
            <Typography variant="h6">
              What's New
            </Typography>
            <Typography variant="h4">
              Home v0.0.1
            </Typography>
            <Typography variant="body2" className="Content__pg">
              A new and improved version of the PennyMac design system, now called Home! Upgrade to Home v0.0.1 to explore new possibilities for your apps and projects.
            </Typography>
            <Typography variant="body2" className="Content__pg">
              <Link key='0' to='/release' className={custom.anchor}>View Full Release Notes</Link>
            </Typography>
          </div>
          <div className={`Content__section ${custom.resources}`}>
            <Typography variant="h6">
              Resources
            </Typography>
            <Typography variant="body2" className="Content__pg">
              Downloads, links, and third-party tools to help you and your team design and build products for PennyMac.
            </Typography>
            <List className="Content__list">
              <ListItem>
                <Link key='0' to='/kirby-api' className={custom.anchor}>Kirby GraphQL API</Link>
              </ListItem>
              <ListItem>
                <Link key='0' to='/kirby-ui' className={custom.anchor}>Kirby UI Kit</Link>
              </ListItem>
              <ListItem>
                <Link key='0' to='/rubix-api' className={custom.anchor}>Rubix REST API</Link>
              </ListItem>
              <ListItem>
                <Link key='0' to='/rubix-ui' className={custom.anchor}>Rubix UI Kit</Link>
              </ListItem>
              <ListItem>
                <Link key='0' to='/rims-api' className={custom.anchor}>RIMS REST API</Link>
              </ListItem>
              <ListItem>
                <Link key='0' to='/rims-ui' className={custom.anchor}>RIMS UI Kit</Link>
              </ListItem>
            </List>
          </div>
        </Box>
      </Box>
    </main>
  )
};
