import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { color } from '@edma/design-tokens/';
import ScrollToTopController from '../ScrollToTopController';
import Footer from '../Footer';
import SplitText from '../SplitText';

const useStyles = makeStyles(theme => ({
  anchor: {
    color: theme.palette.type === 'light' ? color.b600 : color.b300,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  },
  huge: {
    color: theme.palette.type === 'light' ? color.b600 : color.b300
  }
}));

export default function Brand(props) {
  const classes = useStyles();

  return (
    <>
      <ScrollToTopController />
      <div className='mask mask--huge'>
        <div className={`huge ${classes.huge}`}>02<span className='huge--num'>a</span></div>
      </div>
      <span className='mask'>
        <div className='internal-heading'>Brand</div>
      </span>
      <div className='internal-intro'>
        <SplitText copy="Welcome to the PennyMac Brand Guidelines! The goal of these guidelines is to help PennyMac present a single clear and compelling voice in everything we do. The totality of our logo, tagline, visual identity and the words we use will define who we are, both internally and externally." />
        <br/><br/>
        <SplitText copy="Think of these guidelines less as a set of rules and more as a tool that provides a range of ways to help a large, diverse group of people communicate with a common voice." />
      </div>
      <div className='internal-heading'>Our Purpose</div>
      <div className='internal-paragraph'>
        <strong>PennyMac helps fulfill the dream of home.</strong>
        <br/><br/>
        Our brand purpose is bigger than simply home loans. Helping to fulfill the dream of home speaks to how PennyMac provides value to customers at many stages of the their relationship with their homes. Whether they’re looking to buy their dream home or use their equity to meet the needs of their growing family, PennyMac can be a valuable partner to help achieve their unique dream of home.
      </div>
      <div className='internal-heading'>Our Tagline</div>
      <div className='internal-paragraph'>
        <strong>The lender you can call home.</strong>
        <br/><br/>
        Our tagline identifies who we are and what we do by connecting our identity to our purpose.
      </div>
      <Footer
        type='brand'
        prevType='foundation'
        prevUrl='/foundation/accessibility/'
        prevNum='01e.'
        prevTitle='Accessibility'
        nextUrl='/brand/core-values/'
        nextNum='02b.'
        nextTitle='Core Values'
      />
    </>
  );
};
