import React from 'react';
import Text from './Text';
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
  const classes = Theme.useStyleCreatorClassNames(styleCreator);
  const theme = Theme.useTheme();
  const [selected, setSelected] = React.useState<string | null>(null);
  const finishedProblem = useSelector(s => s.quiz.finishedProblem);
  
  React.useEffect(() => {
    if (selected !== null) {
      onSubmit(selected === answer);
    }
  }, [selected, answer]);
  
  return (
    <div className={classes.quiz}>
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
    ...styleHelpers.flex('column')
  },
  multipleChoice: {
    margin: theme.spacing(0, 0, 1)
  }
}));