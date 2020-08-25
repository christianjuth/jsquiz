import React from 'react';
import Text from './Text';
import Button from './Button';
import MultipleChoice from './MultipleChoice';
import Theme from './Theme';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { themes } from '../constants';
import { styleHelpers } from '../utils';
import { useSelector, useDispatch } from '../store';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { quizActions } from '../store/ducks/quiz';
import { AiFillInfoCircle } from 'react-icons/ai';

function Problem({
  title,
  code,
  helpLink,
  options,
  answer,
  onSubmit
}: {
  title: string,
  code: string,
  helpLink: string,
  options: string[],
  answer: string,
  onSubmit: (correct: boolean) => any
}) {
  const styles = Theme.useStyleCreator(styleCreator);
  const theme = Theme.useTheme();
  const [selected, setSelected] = React.useState<string | null>(null);
  const finishedProblem = useSelector(s => s.quiz.finishedProblem);
  const correct = useSelector(s => s.quiz.correct);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    if (selected !== null) {
      onSubmit(selected === answer);
    }
  }, [selected, answer]);
  
  return (
    <div style={styles.quiz}>
      <Text variant='h2'>
        {title}
        {helpLink ? (
          <a href={helpLink} target="_blank" rel="noopener">
            <AiFillInfoCircle
              size={22}
              color={theme.colors.text}
              style={{
                marginLeft: 5,
                opacity: 0.3
              }}
            />
          </a>
        ) : null}
      </Text>
      <SyntaxHighlighter language="jsx" style={themes.code}>
        {code}
      </SyntaxHighlighter>
      <MultipleChoice
        style={styles.multipleChoice}
        options={options}  
        value={selected}
        onChange={setSelected}
        answer={answer}
        disabled={finishedProblem}
      />
      <div 
        style={{
          ...styles.buttonWrap,
          ...((!correct && finishedProblem) ? null : styles.hide)
        }}
      >
        <Button onClick={() => dispatch(quizActions.loadNextProblem())}>
          Next
        </Button>
      </div>
    </div>
  );
}

export function Quiz() {
  const dispatch = useDispatch();
  const problem = useSelector(s => s.quiz.problem);
  const finishedProblem = useSelector(s => s.quiz.finishedProblem);
  const correct = useSelector(s => s.quiz.correct);
  
  React.useEffect(() => {
    dispatch(quizActions.loadNextProblem());
  }, []);
  
  React.useEffect(() => {
    if (finishedProblem && correct) {
      const id = setTimeout(() => {
        dispatch(quizActions.loadNextProblem());
      }, 1500);
      
      return () => {
        clearTimeout(id);
      }
    }
  }, [finishedProblem, correct]);
  
  return problem ? (
    <Fade 
      key={problem.id}
      duration={700} 
     >
      <Problem
        title={problem.title}
        code={problem.code}
        options={problem.options}
        answer={problem.answer}
        onSubmit={correct => {
          dispatch(quizActions.finishProblem(correct));
        }}
        helpLink={problem.helpLink}
      />
    </Fade>
  ) : null;
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  quiz: {
    ...styleHelpers.flex('column'),
    paddingTop: theme.spacing(3)
  },
  multipleChoice: {
    margin: theme.spacing(0, 0, 1)
  },
  buttonWrap: {
    ...styleHelpers.flex('row'),
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  },
  hide: {
    opacity: 0,
    cursorEvents: 'none'
  }
}));