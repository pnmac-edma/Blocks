import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import color from '@edma/design-tokens/js/color';
import fontSize from '@edma/design-tokens/js/fontSize';
import ScrollToTopController from './components/ScrollToTopController';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    margin: 40,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItem: {
    marginBottom: '1rem',
    '& .MuiListItemText-primary': {
      fontSize: fontSize['1'],
      color: theme.palette.type === 'light' ? color.v700 : color.y300,
    },
  }
}));

export default function Principles(props) {
  const custom = useStyles();
    return (
      <main className={custom.content}>
        <ScrollToTopController />
        <div className={custom.toolbar} />

        <div className="content">
          <Typography variant="h2" gutterBottom>
            Core Design Principles
          </Typography>
          <Typography variant="h5">
            Usable - Intentional - Effortless - Unbreakable
          </Typography>
          <hr />
          <List>
            <ListItem className={custom.listItem}>
              <ListItemText
                primary="User Needs Supercede"
                secondary="Make no assumptions. Only through research and analysis can we truly understand our users. Talk to them. We need to appreciate their needs in order to design usable products."
              />
            </ListItem>
            <ListItem className={custom.listItem}>
              <ListItemText
                primary="Design With Intent"
                secondary="Every design element, from the largest to the smallest, must have a purpose, and contribute to the purpose of a larger element that it is a part of. If you can’t explain what an element is for, most likely it shouldn’t be there. Use motion to provide meaning, rather than just for aesthetic value. Why does a thing move the way that it does?"
              />
            </ListItem>
            <ListItem className={custom.listItem}>
              <ListItemText
                primary="Effortless Usability"
                secondary="Users should be presented with a singular visual priority on any given screen. What do you want the user to do first? They should be able to effortlessly move throughout the app. Remove all obstacles for the user. Interactions should be intuitive and obvious."
              />
            </ListItem>
            <ListItem className={custom.listItem}>
              <ListItemText
                primary="Effortless Style"
                secondary="Designs should have a relaxed, uncomplicated aesthetic. Although deeply considered, things like color choices and typography should feel seamless and simple to users."
              />
            </ListItem>
            <ListItem className={custom.listItem}>
              <ListItemText
                primary="Make It Unbreakable"
                secondary="Designs should be unbreakable by the user. Like a children’s toy, make sure it’s designed for exploration and impossible to misuse. Make sure designs can scale as applications grow and evolve over time."
              />
            </ListItem>
          </List>
        </div>
      </main>
    );
};
