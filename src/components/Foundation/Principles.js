import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Divider,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import { color, fontSize } from '@edma/design-tokens/';
import ScrollToTopController from '../ScrollToTopController';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    background: theme.palette.type === 'light' ? color.white : color.black,
    textAlign: 'left'
  },
  divider: {
    height: 4,
    color: theme.palette.type === 'light' ? color.g100 : color.g700
  },
  listItem: {
    display: 'block',
    marginBottom: '3rem',
    '& .MuiListItemText-primary': {
      fontSize: fontSize['1'],
      color: theme.palette.type === 'light' ? color.v700 : color.y300,
    },
  }
}));

export default function Principles(props) {
  const custom = useStyles();
    return (
      <Box className={`Content-inner ${custom.content}`} boxShadow={16}>
        <ScrollToTopController />

        <div className="inner-content">
          <Typography variant="h1" gutterBottom>
            Design Principles
          </Typography>
          <Typography variant="h2">
            Usable - Intentional - Effortless - Unbreakable
          </Typography>
          <Box mt={7} mb={7}>
            <Divider className={custom.divider} />
          </Box>
          <List>
            <ListItem className={custom.listItem}>
              <Typography variant="h3">
                User Needs Supercede
              </Typography>
              <Typography variant="body1">
                Make no assumptions. Only through research and analysis can we truly understand our users. Talk to them. We need to appreciate their needs in order to design usable products.
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h3">
                Design With Intent
              </Typography>
              <Typography variant="body1">
                Every design element, from the largest to the smallest, must have a purpose, and contribute to the purpose of a larger element that it is a part of. If you can’t explain what an element is for, most likely it shouldn’t be there. Use motion to provide meaning, rather than just for aesthetic value. Why does a thing move the way that it does?
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h3">
                Effortless Usability
              </Typography>
              <Typography variant="body1">
                Users should be presented with a singular visual priority on any given screen. What do you want the user to do first? They should be able to effortlessly move throughout the app. Remove all obstacles for the user. Interactions should be intuitive and obvious.
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h3">
                Effortless Style
              </Typography>
              <Typography variant="body1">
                Designs should have a relaxed, uncomplicated aesthetic. Although deeply considered, things like color choices and typography should feel seamless and simple to users.
              </Typography>
            </ListItem>
            <ListItem className={custom.listItem}>
              <Typography variant="h3">
                Make It Unbreakable
              </Typography>
              <Typography variant="body1">
                Designs should be unbreakable by the user. Like a children’s toy, make sure it’s designed for exploration and impossible to misuse. Make sure designs can scale as applications grow and evolve over time.
              </Typography>
            </ListItem>
          </List>
        </div>
      </Box>
    );
};
