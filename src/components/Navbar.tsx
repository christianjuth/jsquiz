import React from 'react';
import Theme from './Theme';
import Text from './Text';
import Section from './Section';
import { styleHelpers } from '../utils';
import { useSelector } from '../store';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const NAVBAR_HEIGHT = 50;

function calculateGrade(grades: number[]) {
  const total = grades.reduce((overall, grade) => overall + grade, 0);
  return Math.round((100 * total) / grades.length);
}

export function Navbar() {
  const classes = Theme.useStyleCreatorClassNames(styleCreator);
  const grades = useSelector(s => s.quiz.grades);
 
  return (
    <div className={classes.navbar}>
      <Section classNameInside={classes.sectionInside}>
        <Text variant='h5' noPadding className={classes.text}><i>Quiz</i>.Underreacted</Text>
        
        {grades.length > 0 ? (
          <Fade duration={800}>
            <Text variant='p' noPadding className={classes.text}>Grade: {calculateGrade(grades)+''}%</Text>
          </Fade>
        ) : null}
      </Section>
    </div>  
  );
}

Navbar.Spacer = Spacer;
function Spacer() {
  const classes = Theme.useStyleCreatorClassNames(styleCreator);
  return (
    <div className={classes.spacer}/>
  );
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  spacer: {
    ...styleHelpers.lockHeight(NAVBAR_HEIGHT)
  },
  navbar: {
    ...styleHelpers.flex('row'),
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    ...styleHelpers.lockHeight(NAVBAR_HEIGHT),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.transparentBackground,
    backdropFilter: 'blur(30px)',
    zIndex: 2000,
    borderBottom: `1px solid ${theme.colors.divider}`
  },
  sectionInside: {
    ...styleHelpers.flex('row'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.textMuted
  }
}));