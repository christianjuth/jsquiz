import React from 'react';
import Text from './Text';
import MultipleChoice from './MultipleChoice';
import Section from './Section';
import Button from './Button';
import Theme from './Theme';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { themes } from '../constants';
import { styleHelpers } from '../utils';
import { useSelector, useDispatch } from '../store';
import Fade from 'react-reveal/Fade';
import { quizActions } from '../store/ducks/quiz';

function Problem({
  title,
  code,
  options,
  answer,
  onSubmit,
  onNext
}: {
  title: string,
  code: string,
  options: string[],
  answer: string,
  onSubmit: (correct) => any,
  onNext: () => any
}) {
  const classes = Theme.useStyleCreatorClassNames(styleCreator);
  const [selected, setSelected] = React.useState<string | null>(null);
  const finishedProblem = useSelector(s => s.quiz.finishedProblem);
  
  React.useEffect(() => {
    if (selected !== null) {
      onSubmit(selected === answer);
    }
  }, [selected, answer]);
  
  return (
    <div className={classes.quiz}>
      <Text variant='h2'>{title}</Text>
      <SyntaxHighlighter language="jsx" style={themes.code}>
        {code}
      </SyntaxHighlighter>
      <MultipleChoice
        className={classes.multipleChoice}
        options={options}  
        value={selected}
        onChange={setSelected}
        answer={answer}
        disabled={finishedProblem}
      />
    </div>
  );
}

export function Quiz() {
  const dispatch = useDispatch();
  const problem = useSelector(s => s.quiz.problem);
  const finishedProblem = useSelector(s => s.quiz.finishedProblem);
  
  React.useEffect(() => {
    dispatch(quizActions.loadNextProblem());
  }, []);
  
  React.useEffect(() => {
    if (finishedProblem) {
      const id = setTimeout(() => {
        dispatch(quizActions.loadNextProblem());
      }, 1500);
      
      return () => {
        clearTimeout(id);
      }
    }
  }, [finishedProblem]);
  
  return problem ? (
    <Fade 
      key={problem.id}
      duration={600} 
     >
      <Problem
        title={problem.title}
        code={problem.code}
        options={problem.options}
        answer={problem.answer}
        onSubmit={correct => {
          dispatch(quizActions.finishProblem(correct));
        }}
        onNext={() => {}}  
      />
    </Fade>
  ) : null;
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  quiz: {
    ...styleHelpers.flex('column')
  },
  multipleChoice: {
    margin: theme.spacing(0, 0, 1)
  }
}));