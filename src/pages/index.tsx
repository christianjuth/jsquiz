import * as React from 'react';
import { Theme, Section, Quiz, Navbar } from '../components';
import { styleHelpers } from '../utils';
import { useSelector } from '../store';
import Div100vh from 'react-div-100vh';
import Confetti from 'react-dom-confetti';

function Index() {
  const classes = Theme.useStyleCreatorClassNames(styleCreator);
  const finishedProblem = useSelector(s => s.quiz.finishedProblem);
  const correct = useSelector(s => s.quiz.correct);
  
  return (
    <div style={{flex: 1}}>
      <Navbar/>
      <Div100vh className={classes.page}>
        <Section>
          <Quiz/>
        </Section>
      </Div100vh>
      <div className={classes.confettiWrap}>
        <Confetti 
          active={finishedProblem && correct}
          config={{
            spread: 360
          }}
        />
      </div>
    </div>
  );
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  page: {
    ...styleHelpers.flex('column'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  grade: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.colors.text
  },
  confettiWrap: {
    ...styleHelpers.absoluteFill(),
    ...styleHelpers.flex('column'),
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    overflow: 'hidden'
  }
}));

export default Index;