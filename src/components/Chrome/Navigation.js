import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import color from '@edma/design-tokens/js/color';

const navStyles = makeStyles(theme => ({
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '24vw',
    width: '100vw',
    minWidth: 250
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    marginTop: 48
  },
  nested: {
    paddingLeft: 5,
    fontWeight: 'normal',
    fontFamily: 'Gilroy',
    fontSize: 16,
    textAlign: 'left',
    margin: '24px 0'
  },
  menu: {
    display: 'none'
  },
  menuOpen: {
    display: 'block'
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
  },
  num: {
    display: 'inline-block',
    width: 16,
    marginRight: 24
  }
}));

export default function Navigation(props) {
  const classes = navStyles();

  // Hooks! <3
  const [componentsOpen, setComponentsOpen] = useState(false);
  const handleComponentsClick = () => setComponentsOpen(!componentsOpen);

  const [foundationOpen, setFoundationOpen] = useState(false);
  const handleFoundationClick = () => setFoundationOpen(!foundationOpen);

  const [brandOpen, setBrandOpen] = useState(false);
  const handleBrandClick = () => setBrandOpen(!brandOpen);

  const [tokensOpen, setTokensOpen] = useState(false);
  const handleTokensClick = () => setTokensOpen(!tokensOpen);

  const [selectedIndex, setSelectedIndex] = useState(props.index);

  useEffect (
    () => {
      if (props) {
        setSelectedIndex(props.index);

        if (props.index >= 0 && props.index < 4) {
          setFoundationOpen(true);
        }

        if (props.index > 3 && props.index < 11) {
          setBrandOpen(true);
        }

        if (props.index > 10 && props.index < 23) {
          setTokensOpen(true);
        }

        if (props.index > 26 && props.index < 30) {
          setComponentsOpen(true);
        }
      }
    },[props, props.index]
  );

  return (
    <div className={classes.navigation}>
      <div className={`home-wrapper`}>
        <div className={props.index === undefined ? `home` : `home-internal`}>
          Home
        </div>
      </div>
      <div className={classes.list}>
        <Link to='/foundation/getting-started/' className={`Rotate-link Rotate-link--foundation ${foundationOpen ? 'Rotate-link--is-active' : ''}`} data-text="Foundation" onClick={handleFoundationClick}>
          <span className={`Rotate-link__num`}>01.</span>
          <span className={`Rotate-link__title`}>Foundation</span>
        </Link>
        <div className={foundationOpen ? classes.menuOpen : classes.menu}>
          {[
            {'num': 'a.', 'title': 'Getting Started'},
            {'num': 'b.', 'title': 'Team Craft'},
            {'num': 'c.', 'title': 'Design Principles'},
            {'num': 'd.', 'title': 'Language'},
            {'num': 'e.', 'title': 'Accessibility'}
          ].map((text, index) => (
            <Link className={classes.anchor} key={index} to={'/foundation/' + text['title'].replace(/\s+/g, '-').toLowerCase() + '/'}>
              <div key={text['num']} className={classes.nested} data-selected={selectedIndex === index}>
                <div><span className={classes.num}>{text['num']}</span>{text['title']}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link to='/brand/getting-started/' className={`Rotate-link Rotate-link--brand ${brandOpen ? 'Rotate-link--is-active' : ''}`} data-text="Brand" onClick={handleBrandClick}>
          <span className={`Rotate-link__num`}>02.</span>
          <span className={`Rotate-link__title`}>Brand</span>
        </Link>
        <div className={brandOpen ? classes.menuOpen : classes.menu}>
          {[
            {'num': 'a.', 'title': 'Getting Started'},
            {'num': 'b.', 'title': 'Core Values'},
            {'num': 'c.', 'title': 'Voice & Tone'},
            {'num': 'd.', 'title': 'Identity'},
            {'num': 'e.', 'title': 'Iconography'},
            {'num': 'f.', 'title': 'Photography'},
            {'num': 'g.', 'title': 'Typography'}
          ].map((text, index) => (
            <Link className={classes.anchor} key={index + 4} to={'/brand/' + text['title'].replace(/\s+/g, '-').toLowerCase() + '/'}>
              <div key={text['num']} className={classes.nested} data-selected={selectedIndex === index + 5}>
                <div><span className={classes.num}>{text['num']}</span>{text['title']}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link to='/tokens/getting-started/' className={`Rotate-link Rotate-link--tokens ${tokensOpen ? 'Rotate-link--is-active' : ''}`} data-text="Design Tokens" onClick={handleTokensClick}>
          <span className={`Rotate-link__num`}>03.</span>
          <span className={`Rotate-link__title`}>Design Tokens</span>
        </Link>
        <div className={tokensOpen ? classes.menuOpen : classes.menu}>
          {[
            {'num': 'a.', 'title': 'Getting Started'},
            {'num': 'b.', 'title': 'Border Radius'},
            {'num': 'c.', 'title': 'Border Size'},
            {'num': 'd.', 'title': 'Breakpoint'},
            {'num': 'e.', 'title': 'Color'},
            {'num': 'f.', 'title': 'Font Family'},
            {'num': 'g.', 'title': 'Font Size'},
            {'num': 'h.', 'title': 'Font Weight'},
            {'num': 'i.', 'title': 'Line Height'},
            {'num': 'j.', 'title': 'Shadow'},
            {'num': 'k.', 'title': 'Spacing'},
            {'num': 'l.', 'title': 'Z-index'}
          ].map((text, index) => (
            <Link className={classes.anchor} key={index + 11} to={'/tokens/' + text['title'].replace(/\s+/g, '-').toLowerCase() + '/'}>
              <div key={text['num']} className={classes.nested} data-selected={selectedIndex === index + 12}>
                <div><span className={classes.num}>{text['num']}</span>{text['title']}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link to='/components/getting-started/' className={`Rotate-link Rotate-link--components ${componentsOpen ? 'Rotate-link--is-active' : ''}`} data-text="Components" onClick={handleComponentsClick}>
          <span className={`Rotate-link__num`}>04.</span>
          <span className={`Rotate-link__title`}>Components</span>
        </Link>
        <div className={componentsOpen ? classes.menuOpen : classes.menu}>
          {[
            {'num': 'a.', 'title': 'Getting Started'},
            {'num': 'b.', 'title': 'Figma Components'},
            {'num': 'c.', 'title': 'React Components'}
          ].map((text, index) => (
            <Link className={classes.anchor} key={index + 28} to={'/components/' + text['title'].replace(/\s+/g, '-').toLowerCase() + '/'}>
              <div key={text['num']} className={classes.nested} data-selected={selectedIndex === index + 28}>
                <div><span className={classes.num}>{text['num']}</span>{text['title']}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link to='/releases/' className={`Rotate-link Rotate-link--releases`} data-text="Releases">
          <span className={`Rotate-link__num`}>05.</span>
          <span className={`Rotate-link__title`}>Releases</span>
        </Link>
      </div>
    </div>
  )
}
