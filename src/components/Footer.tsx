import React from 'react';
import Theme from './Theme';
import Text from './Text';
import Section from './Section';
import { styleHelpers } from '../utils';

const NAVBAR_HEIGHT = 50;

export function Footer() {
  const styles = Theme.useStyleCreator(styleCreator);
 
  return (
    <div style={styles.footer}>
      <Section styleInside={styles.sectionInside}>
        <a 
          href='https://github.com/christianjuth/quiz-underreacted' 
          style={styles.link}
          target="_blank" rel="noopener"
        >
          <Text variant='h5' noPadding style={styles.text}>source</Text>
        </a>

        <a 
          href='https://github.com/christianjuth/quiz-underreacted/issues' 
          style={styles.link}
          target="_blank" rel="noopener"
        >
          <Text variant='h5' noPadding style={styles.text}>feedback</Text>
        </a>
        
        <a 
          href='https://twitter.com/christianjuth' 
          style={styles.link}
          target="_blank" rel="noopener"
        >
          <Text variant='h5' noPadding style={styles.text}>author</Text>
        </a>
      </Section>
    </div>  
  );
}

Footer.Spacer = Spacer;
function Spacer() {
  const styles = Theme.useStyleCreator(styleCreator);
  return (
    <div style={styles.spacer}/>
  );
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  spacer: {
    ...styleHelpers.lockHeight(NAVBAR_HEIGHT)
  },
  footer: {
    ...styleHelpers.flex('row'),
    ...styleHelpers.lockHeight(NAVBAR_HEIGHT),
    ...styleHelpers.lockWidth('100%'),
    alignItems: 'center',
    marginBottom: 'env(safe-area-inset-bottom)',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.colors.transparentBackground,
    backdropFilter: 'blur(30px)',
    zIndex: 2000,
    borderTop: `1px solid ${theme.colors.divider}`
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