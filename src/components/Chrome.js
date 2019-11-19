import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/img/logo.blocks.svg';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import Slide from '@material-ui/core/Slide';
import color from '@edma/design-tokens/js/color';
import fontSize from '@edma/design-tokens/js/fontSize';
import { ReactComponent as Lightbulb } from '@edma/design-tokens/img/lightbulbIcon.svg';
import { ReactComponent as LightbulbOutline } from '@edma/design-tokens/img/lightbulbOutlineIcon.svg';
import Navigation from '../components/Navigation';

// Set width of side nav
const navWidth = 240,
  headerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: theme.secondary,
  },
  appBar: {
    //background: `linear-gradient(90deg, ${color.b300}, ${color.p400})`,
    background: theme.palette.type === 'light' ? color.white : color.g700,
    color: theme.palette.type === 'light' ? color.g800 : color.g100,
    marginLeft: navWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${navWidth}px)`,
    },
  },
  logo: {
    maxHeight: 40,
    mixBlendMode: theme.palette.type === 'light' ? 'darken' : 'lighten',
    margin: 11,
  },
  buttonContainer: {
    marginRight: theme.spacing(2),
    position: `absolute`,
    right: `0`,
  },
  iconButton: {
    marginRight: theme.spacing(0),
  },
  hiddenButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  logoContainer: {
    textAlign: 'left',
    maxHeight: 63,
  },
  app: {
    display: 'block',
    position: 'relative',
    top: -55,
    left: 66,
    maxWidth: '60%',
    fontSize: fontSize['1'],
  },
  appVersion: {
    fontSize: fontSize['0'],
    color: theme.palette.type === 'light' ? color.g600 : color.g300,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    fontWeight: 'regular',
  },
  drawerPaper: {
    width: navWidth,
    background: theme.palette.type === 'light' ? color.white : color.g700,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: navWidth,
      flexShrink: 0,
    },
  },
  bottomDiv: {
    marginBottom: '30vh',
  },
  lightbulb: {
    '& path': {
      fill: color.black,
    },
  },
  lightbulbOutline: {
    '& path': {
      fill: color.white,
    },
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Chrome(props) {
  const theme = useTheme(),
    custom = headerStyles(),
    { container } = props,
    [anchorEl, setAnchorEl] = useState(null),
    [mobileOpen, setMobileOpen] = useState(false);

  let modeIcon;

  function handleClose() {
    setAnchorEl(null);
  }

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const renderLogo = (
    <div className={custom.logoContainer}>
      <img srcSet={logo} alt={logo} className={custom.logo} />
      <span className={custom.app}>
        Blocks
        <div className={custom.appVersion}>v{props.version ? props.version : ''}</div>
      </span>
    </div>
  );

  if (theme.palette.type === 'light') {
    modeIcon = <Lightbulb className={custom.lightbulb} />;
  } else {
    modeIcon = <LightbulbOutline className={custom.lightbulbOutline} />;
  }

  return (
    <div>
      <HideOnScroll {...props} >
        <AppBar position="fixed" className={custom.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={custom.hiddenButton}
            >
              <MoreVertIcon />
            </IconButton>
            <Typography variant="h6" className={custom.title}>
              {props.headline ? props.headline : ''}
            </Typography>
            <div className={custom.buttonContainer}>
              <Tooltip title="Toggle dark/light mode" enterDelay={500} leaveDelay={200}>
                <IconButton
                  className={custom.iconButton}
                  edge="end"
                  color="inherit"
                  aria-label="Toggle dark/light mode"
                  onClick={props.onToggle}
                >
                  {modeIcon}
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>API Keys</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <nav className={custom.drawer} aria-label="Side navigation">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: custom.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {renderLogo}
            <Divider />
              <Navigation index={props.index} />
            <Divider className={custom.bottomDiv} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: custom.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {renderLogo}
            <Divider />
              <Navigation index={props.index} />
            <Divider className={custom.bottomDiv} />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}
