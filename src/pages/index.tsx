import * as React from 'react';
import { Theme, Section, Quiz, Navbar, Footer } from '../components';
import { styleHelpers } from '../utils';
import { useSelector } from '../store';
import Div100vh from 'react-div-100vh';
import Confetti from 'react-dom-confetti';

function Index() {
  const styles = Theme.useStyleCreator(styleCreator);
  const finishedProblem = useSelector(s => s.quiz.finishedProblem);
  const correct = useSelector(s => s.quiz.correct);
  
  return (
    <div style={{flex: 1}}>
      <Navbar/>
      <Footer/>

      <Div100vh>
        <div style={styles.page}>
          <Navbar.Spacer/>
          <div style={styles.grow}/>
          <Section>
            <Quiz/>
          </Section>
          <div style={styles.grow}/>
          <Footer.Spacer/>
        </div>
      </Div100vh>

      <div style={styles.confettiWrap}>
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
    flex: 1,
    minHeight: '100%'
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
  },
  grow: {
    flex: 1,
    maxWidth: '100%'
  }
}));

export default Index;