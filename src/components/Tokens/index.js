import React from 'react';
import Package from '../../../package.json';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { color, font } from '@edma/design-tokens/';
import ScrollToTopController from '../ScrollToTopController';
import Footer from '../Footer';
import SplitText from '../SplitText';

// Current version synced from package.json
const tokensVerRaw = Package.devDependencies["@edma/design-tokens"],
  tokensArray = tokensVerRaw.split('^'),
  tokensVer = tokensArray[1];

const useStyles = makeStyles (theme => ({
  huge: {
    color: theme.palette.type === 'light' ? color.r600 : color.r400
  },
  anchor: {
    color: theme.palette.type === 'light' ? color.r600 : color.r400,

    '&:hover': {
      textDecoration: 'underline'
    }
  },
  code: {
    color: theme.palette.type === 'light' ? color.black : color.white,
    background: theme.palette.type === 'light' ? color.r50 : '#3E1616',
    padding: '0.5rem 1rem',
    marginTop: 32,
    fontFamily: font.mono,
    fontSize: 15
  },
  note: {
    color: theme.palette.type === 'light' ? color.black : color.g50,
    background: theme.palette.type === 'light' ? color.g100 : color.g900,
    padding: '0.5rem 1rem',
    marginTop: 32,
    marginBottom: 32
  },
  section: {
    marginTop: 80
  }
}));

const Tokens = () => {
  const classes = useStyles();

  return (
    <>
      <ScrollToTopController />
      <div className='mask mask--huge'>
        <div className={`huge ${classes.huge}`}>03<span className='huge--num'>a</span></div>
      </div>
      <span className='mask'>
        <div className='internal-heading'>Design Tokens</div>
      </span>
      <div className='internal-intro'>
        <SplitText copy="In " /><a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank" rel="noopener noreferrer" className={classes.anchor}><SplitText copy="Atomic Design" /></a> <SplitText copy="terms, Design Tokens can be thought of like subatomic particles &mdash; they are the primitives (such as color and spacing) that make up" /> <a href="https://bradfrost.com/blog/post/atomic-web-design/#atoms" target="_blank" rel="noopener noreferrer" className={classes.anchor}><SplitText copy="atoms" /></a><SplitText copy=". Tokens allow us to translate preset values for those primitives between visual assets and code to maintain consistency across applications." />
        <br/><br/>
        <strong><SplitText copy="Current Version: " /><a href={`https://www.npmjs.com/package/@edma/design-tokens/v/${tokensVer}`} target="_blank" rel="noopener noreferrer" className={classes.anchor}><SplitText copy={tokensVer} /></a></strong>
      </div>
      <div className='internal-heading'>Installing Design Tokens</div>
      <div className='internal-paragraph'>
        Design Tokens are simple to install in any project <a href={`https://www.npmjs.com/package/@edma/design-tokens/`} target="_blank" rel="noopener noreferrer" className={classes.anchor}>via NPM</a>.
        <div className={classes.code}>
          npm i @edma/design-tokens --save-dev
        </div>
      </div>
      <div className='internal-heading'>Importing Design Tokens</div>
      <div className='internal-paragraph'>
        <div className={classes.note}>
          Note: Additional import commands can be found on the individual token pages.
        </div>
        <div className={classes.section}>
          <strong>Javascript / Typescript</strong><br/><br/>
          Design tokens can be modularly imported into any JavaScript or TypeScript application. The example below imports color, font, font size, and font weight tokens.
          <div className={classes.code}>
            import &#10100; color, font, fontSize, weight &#10101; from '@edma/design-tokens/';
          </div>
        </div>
        <div className={classes.section}>
          <strong>Sass (SCSS)</strong><br/><br/>
          All SCSS design tokens live in a single variables document, which can be imported into your SCSS stylesheets using the command below.
          <div className={classes.code}>
            @import '~@edma/design-tokens/_scss/variables';
          </div>
        </div>
        <div className={classes.section}>
          <strong>CSS</strong><br/><br/>
          All CSS design tokens live in a single CSS 3 variables document, which can be imported into your CSS stylesheets using the command below.
          <div className={classes.code}>
            @import '~@edma/design-tokens/css/variables';
          </div>
        </div>
      </div>
      <div className='internal-heading'>Contributing To Design Tokens</div>
      <div className='internal-paragraph'>
        Design Tokens at PennyMac begin their lives in our <a href={`https://www.figma.com/file/SKkSxha8LQG7lPvIJ2PWHf/Design-Tokens?node-id=0%3A1`} target="_blank" rel="noopener noreferrer" className={classes.anchor}>Figma component library</a>. Running an NPM script, npm run tokens, will transpile all existing tokens from Figma into 4 supported languages: JavaScript ES6 modules, CSS3 variables, SCSS variables, and raw JSON.
        <br/><br/>
        Once the token files have been generated and tested, they can then be reversioned and deployed to NPM for inclusion in your projects by running npm publish.
      </div>
      <Footer
        type='tokens'
        prevType='brand'
        prevUrl='/brand/typography/'
        prevNum='02g.'
        prevTitle='Typography'
        nextUrl='/tokens/border-radius/'
        nextNum='03b.'
        nextTitle='Border Radius'
      />
    </>
  );
}

export default Tokens;
