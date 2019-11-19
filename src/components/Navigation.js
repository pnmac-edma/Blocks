import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import OpenInNew from '@material-ui/icons/OpenInNew';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import color from '@edma/design-tokens/js/color';

const navStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
    fontWeight: 'regular',
  },
  anchor: {
    textDecoration: 'none',
    color: theme.palette.type === 'light' ? color.g600 : lighten(color.g400, 0.4),
    '&:hover, & .Mui-selected': {
      color: theme.palette.type === 'light' ? color.black : color.white,
    },
    transition: theme.transitions.create(
      ['background-color', 'color'],
      { duration: theme.transitions.duration.complex }
    ),
  },
  anchorOpen: {
    textDecoration: 'none',
    color: theme.palette.type === 'light' ? color.black : color.white,
  },
  anchorHover: {
    color: color.g200,
  }
}));

export default function Navigation(props) {
  const custom = navStyles();

  // Hooks! <3
  //const [componentsOpen, setComponentsOpen] = useState(false);
  //const handleComponentsClick = () => setComponentsOpen(!componentsOpen);

  const [tokensOpen, setTokensOpen] = useState(false);
  const handleTokensClick = () => setTokensOpen(!tokensOpen);

  const [selectedIndex, setSelectedIndex] = useState(props.index);

  useEffect (
    () => {
      setSelectedIndex(props.index);
    },[props.index]
  );

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Link className={custom.anchor} key='0' to='/'>
        <ListItem button selected={selectedIndex === 0}>
          <ListItemText primary="Getting Started" className={custom.listButton} />
        </ListItem>
      </Link>
      <Link className={custom.anchor} key='1' to='/principles/'>
        <ListItem button selected={selectedIndex === 1}>
          <ListItemText primary="Design Principles" className={custom.listButton} />
        </ListItem>
      </Link>
      <a className={custom.anchor} key='2' href='https://www.figma.com/file/k9LG6iA4oKNiCyIc9TrNmD/Material-Components?node-id=0%3A1950' target='_blank' rel="noopener noreferrer">
        <ListItem button selected={selectedIndex === 2}>
          <ListItemText primary="Figma Library" className={custom.listButton} />
          <OpenInNew />
        </ListItem>
      </a>
      <ListItem button onClick={handleTokensClick} className={tokensOpen ? custom.anchorOpen : custom.anchor}>
        <ListItemText primary="Design Tokens" />
        {tokensOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={tokensOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Border Radius', 'Border Size', 'Breakpoint', 'Color', 'Font Family', 'Font Size', 'Font Weight', 'Line Height', 'Shadow', 'Spacing', 'Z-index'].map((text, index) => (
            <Link className={custom.anchor} key={index + 4} to={'/tokens/' + text.replace(/\s+/g, '-').toLowerCase() + '/'}>
              <ListItem button key={text} className={custom.nested} selected={selectedIndex === index + 4}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
      <a className={custom.anchor} key='3' href='https://material-ui.com/' target='_blank' rel="noopener noreferrer">
        <ListItem button selected={selectedIndex === 3}>
          <ListItemText primary="Material Components" className={custom.listButton} />
          <OpenInNew />
        </ListItem>
      </a>
    </List>
  )
}
