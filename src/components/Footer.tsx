import React from 'react';
import Theme from './Theme';
import Text from './Text';
import Section from './Section';
import { styleHelpers } from '../utils';

const NAVBAR_HEIGHT = 50;

export function Footer() {
  const classes = Theme.useStyleCreatorClassNames(styleCreator);
 
  return (
    <div className={classes.footer}>
      <Section classNameInside={classes.sectionInside}>
        <a 
          href='https://github.com/christianjuth/quiz-underreacted' 
          className={classes.link}
          target="_blank" rel="noopener"
        >
          <Text variant='h5' noPadding className={classes.text}>source</Text>
        </a>

        <a 
          href='https://github.com/christianjuth/quiz-underreacted/issues' 
          className={classes.link}
          target="_blank" rel="noopener"
        >
          <Text variant='h5' noPadding className={classes.text}>feedback</Text>
        </a>
        
        <a 
          href='https://twitter.com/christianjuth' 
          className={classes.link}
          target="_blank" rel="noopener"
        >
          <Text variant='h5' noPadding className={classes.text}>author</Text>
        </a>
      </Section>
    </div>  
  );
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  footer: {
    ...styleHelpers.flex('row'),
    ...styleHelpers.lockHeight(NAVBAR_HEIGHT),
    ...styleHelpers.lockWidth('100%'),
    alignItems: 'center',
    opacity: 0.5
  },
  sectionInside: {
    ...styleHelpers.flex('row'),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    ...styleHelpers.hideLink(),
  },
  text: {
    color: theme.colors.textMuted,
    fontSize: '0.9rem'
  }
}));