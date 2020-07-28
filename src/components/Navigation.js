import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  Collapse,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import color from '@edma/design-tokens/js/color';

const navStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
    fontWeight: 'regular'
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
  const [componentsOpen, setComponentsOpen] = useState(false);
  const handleComponentsClick = () => setComponentsOpen(!componentsOpen);

  const [patternsOpen, setPatternsOpen] = useState(false);
  const handlePatternsClick = () => setPatternsOpen(!patternsOpen);

  const [foundationOpen, setFoundationOpen] = useState(false);
  const handleFoundationClick = () => setFoundationOpen(!foundationOpen);

  const [brandOpen, setBrandOpen] = useState(false);
  const handleBrandClick = () => setBrandOpen(!brandOpen);

  const [tokensOpen, setTokensOpen] = useState(false);
  const handleTokensClick = () => setTokensOpen(!tokensOpen);

  const [selectedIndex, setSelectedIndex] = useState(props.index);

  useEffect (
    () => {
      setSelectedIndex(props.index);

      if (props.index >= 0 && props.index < 3) {
        setFoundationOpen(true);
      }

      if (props.index > 2 && props.index < 11) {
        setBrandOpen(true);
      }

      if (props.index > 10 && props.index < 23) {
        setTokensOpen(true);
      }

      if (props.index > 22 && props.index < 24) {
        setPatternsOpen(true);
      }

      if (props.index > 23 && props.index < 26) {
        setComponentsOpen(true);
      }
    },[props.index]
  );

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="Nav"
    >
      <ListItem button onClick={handleFoundationClick} className={foundationOpen ? custom.anchorOpen : custom.anchor}>
        <ListItemText primary="Foundation" />
        {foundationOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={foundationOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Getting Started', 'Design Principles', 'Language', 'Accessibility'].map((text, index) => (
            <Link className={custom.anchor} key={index} to={'/foundation/' + text.replace(/\s+/g, '-').toLowerCase() + '/'}>
              <ListItem button key={text} className={custom.nested} selected={selectedIndex === index}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
      <ListItem button onClick={handleBrandClick} className={brandOpen ? custom.anchorOpen : custom.anchor}>
        <ListItemText primary="Brand" />
        {brandOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={brandOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Getting Started', 'Core Values', 'Voice & Tone', 'Identity', 'Iconography', 'Photography', 'Typography'].map((text, index) => (
            <Link className={custom.anchor} key={index + 4} to={'/brand/' + text.replace(/\s+/g, '-').toLowerCase() + '/'}>
              <ListItem button key={text} className={custom.nested} selected={selectedIndex === index + 4}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
      <ListItem button onClick={handleTokensClick} className={tokensOpen ? custom.anchorOpen : custom.anchor}>
        <ListItemText primary="Design Tokens" />
        {tokensOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={tokensOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Getting Started', 'Border Radius', 'Border Size', 'Breakpoint', 'Color', 'Font Family', 'Font Size', 'Font Weight', 'Line Height', 'Shadow', 'Spacing', 'Z-index'].map((text, index) => (
            <Link className={custom.anchor} key={index + 11} to={'/tokens/' + text.replace(/\s+/g, '-').toLowerCase() + '/'}>
              <ListItem button key={text} className={custom.nested} selected={selectedIndex === index + 11}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
      <ListItem button onClick={handlePatternsClick} className={patternsOpen ? custom.anchorOpen : custom.anchor}>
        <ListItemText primary="Patterns" />
        {patternsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={patternsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Getting Started', 'Figma Pattern Library'].map((text, index) => (
            <Link className={custom.anchor} key={index + 24} to={'/patterns/' + text.replace(/\s+/g, '-').toLowerCase() + '/'}>
              <ListItem button key={text} className={custom.nested} selected={selectedIndex === index + 24}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
      <ListItem button onClick={handleComponentsClick} className={componentsOpen ? custom.anchorOpen : custom.anchor}>
        <ListItemText primary="Components" />
        {componentsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={componentsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Getting Started', 'Modal', 'Storybook Component Library'].map((text, index) => (
            <Link className={custom.anchor} key={index + 27} to={'/components/' + text.replace(/\s+/g, '-').toLowerCase() + '/'}>
              <ListItem button key={text} className={custom.nested} selected={selectedIndex === index + 27}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </List>
  )
}
