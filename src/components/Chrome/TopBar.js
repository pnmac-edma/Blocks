import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  AppBar,
  Slide,
  Toolbar,
  Tooltip,
  useScrollTrigger
} from '@material-ui/core';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import color from '@edma/design-tokens/js/color';
import { ReactComponent as Pennymac } from '@edma/design-tokens/img/pennymacLogo.svg';
import { ReactComponent as Lightbulb } from '@edma/design-tokens/img/lightbulbIcon.svg';
import { ReactComponent as LightbulbOutline } from '@edma/design-tokens/img/lightbulbOutlineIcon.svg';

const headerStyles = makeStyles(theme => ({
  appBar: {
    background: 'transparent',
    color: theme.palette.type === 'light' ? color.g800 : color.g100,
    boxShadow: 'none'
  },
  logo: {
    display: 'inline-block',
    height: 40,
    width: 'auto',
    margin: 8,
    padding: 8,
    transition: 'background .2s ease-in-out',
    '& path': {
      fill: theme.palette.type === 'light' ? color.black : color.white
    },
    '&:hover': {
      background: theme.palette.type === 'light' ? color.g100 : color.g700,
      borderRadius: 4
    }
  },
  buttonContainer: {
    marginRight: theme.spacing(2),
    position: `absolute`,
    right: `0`,
  },
  iconButton: {
    marginRight: theme.spacing(0),
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

export default function TopBar(props) {
  const theme = useTheme(),
    custom = headerStyles();

  let modeIcon;

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
            <Tooltip title="Return home" enterDelay={500} leaveDelay={200}>
              <Link key='0' to='/'>
                <Pennymac className={custom.logo} />
              </Link>
            </Tooltip>
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
    </div>
  )
}
