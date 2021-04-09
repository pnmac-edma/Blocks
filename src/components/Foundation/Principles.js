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

export default function Principles(props) {
  const classes = useStyles();

  return (
    <>
      <ScrollToTopController />
      <div className='mask mask--huge'>
        <div className={`huge ${classes.huge}`}>01<span className='huge--num'>c</span></div>
      </div>
      <span className='mask'>
        <div className='internal-heading'>Design Principles</div>
      </span>
      <div className='internal-intro'>
        <SplitText copy="Designing usable experiences with consistently repeatable results requires the right tools and the right state of mind." />
        <br/><br/>
        <SplitText copy="These principles are the core of how we design experiences on Team Craft." />
      </div>
      <div className='internal-heading'>Explore</div>
      <div className='internal-paragraph'>
        Embrace the unknown<br/>
        Experiment with fresh ideas and new technologies in order to solve problems<br/>
        Think boldly<br/>
        Dare to be innovative and disruptive<br/>
        Break things, and then fix them<br/>
        Have the uncomfortable conversations<br/>
        Stay honest<br/>
        Reject boundaries: “Not invented here” doesn’t exist<br/>
        Accept being misunderstood for long periods of time
      </div>
      <div className='internal-heading'>Learn</div>
      <div className='internal-paragraph'>
        Obsess over the people who use our products<br/>
        Make no assumptions<br/>
        Prioritize research, analysis, and testing with users<br/>
        Seek feedback early and often<br/>
        Validate all opinions, especially your own<br/>
        Bring data forward, even when it might be controversial or embarrassing<br/>
        Treat users like trusted partners<br/>
        Prioritize based on user needs<br/>
        Listen, ask questions, challenge assumptions, and stay humble<br/>
        Make sure every feature adds value for users and for the business
      </div>
      <div className='internal-heading'>Simplify</div>
      <div className='internal-paragraph'>
        Design products that are fundamentally useful for people<br/>
        Make sure that every design element works with, and contributes to, the larger whole<br/>
        Less is more<br/>
        Use motion to provide meaning<br/>
        Remove roadblocks for people<br/>
        Optimize required steps<br/>
        Auto-fill form fields<br/>
        Make unambiguous, easy to follow, and straight forward designs<br/>
        Respect our users’ time and the impact we have on their lives<br/>
        Ensure people always understand what is happening and why<br/>
        Prioritize content over chrome<br/>
        Reduce UI to its most essential ingredients<br/>
        Ensure interfaces have clear and visually prioritized calls to action<br/>
        Avoid reinventing the wheel
      </div>
      <div className='internal-heading'>Collaborate</div>
      <div className='internal-paragraph'>
        We are greater than the sum of our parts<br/>
        Step up every day to help the team do what needs to be done<br/>
        When an opportunity appears to make something better, do it<br/>
        “Not my job” doesn’t exist here<br/>
        Work together to achieve more<br/>
        Treat our users like our most important collaborators<br/>
        Embrace change<br/>
        Adopt new behaviors, values, and attitudes<br/>
        Learn from team mates and make decisions<br/>
        Treat people with respect and dignity<br/>
        Embrace open source<br/>
        Publish your work and share your ideas at every turn<br/>
        Work not just with each other, but with the world
      </div>
      <Footer
        type='foundation'
        prevUrl='/foundation/team-craft/'
        prevNum='01b.'
        prevTitle='Team Craft'
        nextUrl='/foundation/language/'
        nextNum='01d.'
        nextTitle='Language'
      />
    </>
  );
};
