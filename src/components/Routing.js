import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { makeStyles } from '@material-ui/core/styles';

import NotFound from './NotFound';
import Navigation from './Chrome/Navigation';
import Home from '../Home';
import Foundation from './Foundation/Foundation';
import Craft from './Foundation/Craft';
import Principles from './Foundation/Principles';
import Language from './Foundation/Language';
import Accessibility from './Foundation/Accessibility';
import Tokens from './Tokens';
import Colors from './Tokens/Color';
import BorderRadius from './Tokens/BorderRadius';
import BorderSize from './Tokens/BorderSize';
import Breakpoints from './Tokens/Breakpoints';
import FontFamily from './Tokens/FontFamily';
import FontSize from './Tokens/FontSize';
import FontWeight from './Tokens/FontWeight';
import LineHeight from './Tokens/LineHeight';
import Shadow from './Tokens/Shadow';
import Spacing from './Tokens/Spacing';
import Zindex from './Tokens/Zindex';
import Brand from './Brand';
import Ethics from './Brand/Ethics';
import Voice from './Brand/Voice';
import Identity from './Brand/Identity';
import Iconography from './Brand/Iconography';
import Photography from './Brand/Photography';
import Typography from './Brand/Typography';
import Components from './React/React';
import Modal from './React/Modal/Modal';
import Snackbar from './React/SnackBar/SnackBar';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute'
  }
}));

export default function Routing({ onToggle, transitioning, version }) {
  const custom = useStyles();

  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 1 }}
        atLeave={{ opacity: 1 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route
          path="/Home"
          exact
          render={(props) => ( // Landing page for dh-pages
            <div className={custom.content}>
              <Navigation />
              <div className='content'>
                <Home
                  {...props}
                  onToggle={onToggle}
                  transitioning={transitioning}
                  version={version}
                />
              </div>
            </div>
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => ( // Landing page for dev
            <div className={custom.content}>
              <Navigation />
              <div className='content'>
                <Home
                  {...props}
                  onToggle={onToggle}
                  transitioning={transitioning}
                  version={version}
                />
              </div>
            </div>
          )}
        />
        <Route
          path="/foundation/getting-started"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={0} />
              <div className='content'>
                <Foundation {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/foundation/team-craft"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={1} />
              <div className='content'>
                <Craft {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/foundation/design-principles"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={2} />
              <div className='content'>
                <Principles {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/foundation/language"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={3} />
              <div className='content'>
                <Language {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/foundation/accessibility"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={4} />
              <div className='content'>
                <Accessibility {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/getting-started"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={5} />
              <div className='content'>
                <Brand {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/core-values"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={6} />
              <div className='content'>
                <Ethics {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/voice-&-tone"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={7} />
              <div className='content'>
                <Voice {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/identity"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={8} />
              <div className='content'>
                <Identity {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/iconography"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={9} />
              <div className='content'>
                <Iconography {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/photography"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={10} />
              <div className='content'>
                <Photography {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/typography"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={11} />
              <div className='content'>
                <Typography {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/guidelines"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={12} />
              <div className='content'>
                <Tokens {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/border-radius"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={13} />
              <div className='content'>
                <BorderRadius {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/border-size"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={14} />
              <div className='content'>
                <BorderSize {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/breakpoint"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={15} />
              <div className='content'>
                <Breakpoints {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/color"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={16} />
              <div className='content'>
                <Colors {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/font-family"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={17} />
              <div className='content'>
                <FontFamily {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/font-size"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={18} />
              <div className='content'>
                <FontSize {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/font-weight"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={19} />
              <div className='content'>
                <FontWeight {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/line-height"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={20} />
              <div className='content'>
                <LineHeight {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/shadow"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={21} />
              <div className='content'>
                <Shadow {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/spacing"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={22} />
              <div className='content'>
                <Spacing {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/z-index"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={23} />
              <div className='content'>
                <Zindex {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/components/getting-started"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={28} />
              <div className='content'>
                <Components {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/components/modal"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={29} />
              <div className='content'>
                <Modal {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/components/snackbar"
          render={(props) => (
            <div className={custom.content}>
              <Navigation index={30} />
              <div className='content'>
                <Snackbar {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="*"
          render={(props) => (
            <div className={custom.content}>
              <NotFound />
            </div>
          )}
        />
      </AnimatedSwitch>
    </Router>
  );
}
