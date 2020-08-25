import React from 'react';
import Theme from './Theme';
import FlatList from './FlatList';
import Divider from './Divider';
import Text from './Text';
import { styleHelpers, array } from '../utils';

function Indicator({
  selected,
  color
}: {
  selected: boolean,
  color?: string
}) {
  const styles = Theme.useStyleCreator(styleCreator);
  console.log(styles)
  return (
    <div 
      style={{
        ...styles.indicator,
        ...(color ? { borderColor: color } : null)
      }}
     >
      <div
        style={{
          ...(selected ? styles.indicatorInside : null),
          backgroundColor: color
        }}
      />
    </div>
  );
}

function Option({
  value,
  selected,
  onClick,
  isAnswer
}: {
  value: string,
  selected: boolean,
  onClick: () => any,
  isAnswer: boolean
}) {
  const styles = Theme.useStyleCreator(styleCreator);
  const theme = Theme.useTheme();
  const color = isAnswer ? theme.colors.green : theme.colors.red;
  return (
    <div 
      style={styles.option}
      onClick={onClick}
    >
      <Indicator
        selected={selected}
        color={selected ? color : undefined}
      />
      <Text 
        variant='p' 
        noPadding
        style={selected ? {
          color
        } : undefined}
      >{value}</Text>
      <div style={styles.grow}/>
      {selected ? (
        <Text 
          variant='p' 
          noPadding
          style={{
            color
          }}
        >({isAnswer ? 'correct' : 'incorrect'})</Text>
      ) :  null}
    </div>
  );
}

export function MultipleChoice({
  options,
  answer,
  value,
  onChange,
  style,
  disabled = false
}: {
  style?: React.CSSProperties,
  options: string[],
  answer: string,
  value: string | null,
  onChange: (string) => any,
  disabled: boolean
}) {
  const styles = Theme.useStyleCreator(styleCreator);
  const [scrambledOptions, setScrambledOptions] = React.useState<string[]>([]);

  React.useEffect(() => {
    setScrambledOptions(array.shuffle(options));
  }, [options.join()]);
  
  return (
    <FlatList 
      style={{ ...style, ...styles.multipleChoice }}
      data={scrambledOptions}
      keyExtractor={item => item}
      renderItem={item => (
        <Option
          value={item}
          onClick={() => {
            if (!disabled) {
              onChange(item);
            }
          }}
          selected={item === value}
          isAnswer={item === answer}
        />
      )}
      ItemSeparatorComponent={<Divider/>}
    />
  );
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  multipleChoice: {
    ...styleHelpers.lockWidth('100%'),
    userSelect: 'none'
  },
  option: {
    ...styleHelpers.flex('row'),
    padding: theme.spacing(2),
    cursor: 'pointer',
    alignItems: 'center'
  },
  indicator: {
    display: 'flex',
    ...styleHelpers.lockWidth(20),
    ...styleHelpers.lockHeight(20),
    border: `1px solid ${theme.colors.text}`,
    marginRight: theme.spacing(2),
    borderRadius: '100%',
    overflow: 'hidden'
  },
  indicatorInside: {
    backgroundColor: theme.colors.text,
    borderRadius: '100%',
    margin: 2,
    flex: 1
  },
  grow: {
    flex: 1
  }
}));

export default MultipleChoice;