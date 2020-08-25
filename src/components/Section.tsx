import React from 'react';
import { makeStyleCreator, useStyleCreator } from './Theme'
import { ReactChildren } from '../types';

export function Section({
  children,
  style,
  styleInside,
}: {
  children: ReactChildren,
  style?: React.CSSProperties,
  styleInside?: React.CSSProperties,
}) {
  const styles = useStyleCreator(styleCreator);
  return (
    <div 
      style={{
        ...styles.section,
        ...style
      }}
    >
      <div 
        style={{
          ...styles.inside,
          ...styleInside
        }}
      >
        {children}
      </div>
    </div>
  );
}

const styleCreator = makeStyleCreator(theme => ({
  section: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  inside: {
    width: 600,
    maxWidth: '100%'
  }
}));

export default Section;