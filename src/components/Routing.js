import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import { makeStyles } from '@material-ui/core/styles';

import NotFound from './NotFound';
import Chrome from './Chrome';
import Home from '../Home';
import Principles from '../Principles';
import Colors from '../components/tokens/Color';
import BorderRadius from '../components/tokens/BorderRadius';
import BorderSize from '../components/tokens/BorderSize';
import Breakpoints from '../components/tokens/Breakpoints';
import FontFamily from '../components/tokens/FontFamily';
import FontSize from '../components/tokens/FontSize';
import FontWeight from '../components/tokens/FontWeight';
import LineHeight from '../components/tokens/LineHeight';
import Shadow from '../components/tokens/Shadow';
import Spacing from '../components/tokens/Spacing';
import Zindex from '../components/tokens/Zindex';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
  }
}));

export default function Routing ({onToggle, version}) {
  const custom = useStyles();
  const [headline, setHeadline] = useState('null');
  const [index, setIndex] = useState('null');

  return (
    <Router>
      <Chrome onToggle={onToggle} version={version} headline={headline} index={index} />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route
          path="/"
          exact
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Blocks Design System')}
              {setIndex(0)}
              <Home {...props} />
            </div>
          }
        />
        <Route
          path="/principles/"
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Core Design Principles')}
              {setIndex(1)}
              <Principles {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/border-radius/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Border Radius')}
              {setIndex(4)}
              <BorderRadius {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/border-size/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Border Size')}
              {setIndex(5)}
              <BorderSize {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/breakpoint/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Breakpoints')}
              {setIndex(6)}
              <Breakpoints {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/color/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Color')}
              {setIndex(7)}
              <Colors {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/font-family/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Font Family')}
              {setIndex(8)}
              <FontFamily {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/font-size/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Font Size')}
              {setIndex(9)}
              <FontSize {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/font-weight/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Font Weight')}
              {setIndex(10)}
              <FontWeight {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/line-height/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Line Height')}
              {setIndex(11)}
              <LineHeight {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/shadow/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Shadow')}
              {setIndex(12)}
              <Shadow {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/spacing/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Spacing')}
              {setIndex(13)}
              <Spacing {...props} />
            </div>
          }
        />
        <Route
          path='/tokens/z-index/'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Design Tokens: Z-index')}
              {setIndex(14)}
              <Zindex {...props} />
            </div>
          }
        />
        <Route
          path='*'
          render={(props) =>
            <div className={custom.content}>
              {setHeadline('Page Not Found')}
              {setIndex('null')}
              <NotFound />
            </div>
          }
        />
      </AnimatedSwitch>
    </Router>
  )
}
