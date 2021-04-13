import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { color } from '@edma/design-tokens/';
import ScrollToTopController from '../ScrollToTopController';
import Footer from '../Footer';
import SplitText from '../SplitText';

const useStyles = makeStyles(theme => ({
  huge: {
    color: theme.palette.type === 'light' ? color.y500 : color.y300
  }
}));

export default function Craft(props) {
  const classes = useStyles();

  return (
    <>
      <ScrollToTopController />
      <div className='mask mask--huge'>
        <div className={`huge ${classes.huge}`}>01<span className='huge--num'>b</span></div>
      </div>
      <span className='mask'>
        <div className='internal-heading'>Team Craft</div>
      </span>
      <div className='internal-intro'>
        <SplitText copy="Team Craft builds tools and services that make it easier for our coworkers to help people realize their dream of home." />
      </div>
      <div className='internal-heading'>Who we are</div>
      <div className='internal-paragraph'>
        Put the content here yo
      </div>
      <div className='internal-heading'>Team Principles</div>
      <div className='internal-paragraph'>
        Put the content here yo
      </div>
      <Footer
        type='foundation'
        prevUrl='/foundation/getting-started/'
        prevNum='01a.'
        prevTitle='Foundation'
        nextUrl='/foundation/design-principles/'
        nextNum='01c.'
        nextTitle='Design Principles'
      />
    </>
  );
};
