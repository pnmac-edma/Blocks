import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { makeStyles } from '@material-ui/core/styles';

import NotFound from './NotFound';
import TopBar from './Chrome/TopBar';
import Home from '../Home';
import Principles from '../components/Foundation/Principles';
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
import Brand from '../components/Brand';
import Ethics from '../components/Brand/Ethics';
import Voice from '../components/Brand/Voice';
import Identity from '../components/Brand/Identity';
import Iconography from '../components/Brand/Iconography';
import Photography from '../components/Brand/Photography';
import CraftModal from '../components/Craft-Components/Modal/CraftModal';
import CraftSnackbar from '../components/Craft-Components/SnackBar/CraftSnackbar';
import Typography from '../components/Brand/Typography';
import Navigation from '../components/Navigation';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1
  }
}));

export default function Routing({ onToggle, transitioning, version }) {
  const custom = useStyles();
  const [headline, setHeadline] = useState('null');
  const [index, setIndex] = useState('null');

  return (
    <Router>
      <TopBar
        onToggle={onToggle}
        version={version}
        headline={headline}
        index={index}
      />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route
          path="/"
          exact
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Blocks Design System')}
              <Home
                {...props}
                onToggle={onToggle}
                transitioning={transitioning}
              />
            </div>
          )}
        />
        <Route
          path="/foundation/design-principles"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Core Design Principles')}
              <div className="Nav-container">
                <Navigation index={1} />
                <Principles {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/getting-started"
          render={(props) => (
            <div className={custom.content}>
              <div className="Nav-container">
                <Navigation index={4} />
                <Brand {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/core-values"
          render={(props) => (
            <div className={custom.content}>
              <div className="Nav-container">
                <Navigation index={5} />
                <Ethics {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/voice-&-tone"
          render={(props) => (
            <div className={custom.content}>
              <div className="Nav-container">
                <Navigation index={6} />
                <Voice {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/identity"
          render={(props) => (
            <div className={custom.content}>
              <div className="Nav-container">
                <Navigation index={7} />
                <Identity {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/iconography"
          render={(props) => (
            <div className={custom.content}>
              <div className="Nav-container">
                <Navigation index={8} />
                <Iconography {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/photography"
          render={(props) => (
            <div className={custom.content}>
              <div className="Nav-container">
                <Navigation index={9} />
                <Photography {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/brand/typography"
          render={(props) => (
            <div className={custom.content}>
              <div className="Nav-container">
                <Navigation index={10} />
                <Typography {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/getting-started"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Getting Started')}
              <div className="Nav-container">
                <Navigation index={11} />
                <Tokens {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/border-radius"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Border Radius')}
              <div className="Nav-container">
                <Navigation index={12} />
                <BorderRadius {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/border-size"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Border Size')}
              <div className="Nav-container">
                <Navigation index={13} />
                <BorderSize {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/breakpoint"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Breakpoints')}
              <div className="Nav-container">
                <Navigation index={14} />
                <Breakpoints {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/color"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Color')}
              <div className="Nav-container">
                <Navigation index={15} />
                <Colors {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/font-family"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Font Family')}
              <div className="Nav-container">
                <Navigation index={16} />
                <FontFamily {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/font-size"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Font Size')}
              <div className="Nav-container">
                <Navigation index={17} />
                <FontSize {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/font-weight"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Font Weight')}
              <div className="Nav-container">
                <Navigation index={18} />
                <FontWeight {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/line-height"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Line Height')}
              <div className="Nav-container">
                <Navigation index={19} />
                <LineHeight {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/shadow"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Shadow')}
              <div className="Nav-container">
                <Navigation index={20} />
                <Shadow {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/spacing"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Spacing')}
              <div className="Nav-container">
                <Navigation index={21} />
                <Spacing {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/tokens/z-index"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Design Tokens: Z-index')}
              <div className="Nav-container">
                <Navigation index={22} />
                <Zindex {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/components/modal"
          render={(props) => (
            <div className={custom.content}>
              <div className="Nav-container">
                <Navigation index={24} />
                <CraftModal {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="/components/snackbar"
          render={(props) => (
            <div className={custom.content}>
              <div className="Nav-container">
                <Navigation index={25} />
                <CraftSnackbar {...props} />
              </div>
            </div>
          )}
        />
        <Route
          path="*"
          render={(props) => (
            <div className={custom.content}>
              {setHeadline('Page Not Found')}
              {setIndex('null')}
              <NotFound />
            </div>
          )}
        />
      </AnimatedSwitch>
    </Router>
  );
}
