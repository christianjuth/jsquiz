import React from 'react';
import Theme from './Theme';

export function Divider({
  style
}: {
  style?: React.CSSProperties
}) {
  const styles = Theme.useStyleCreator(styleCreator);
  return (
    <div 
      style={{
        ...style, 
        ...styles.divider
      }}
    />
  );
}

function Vertical({
  style
}: {
  style: React.CSSProperties
}) {
  const styles = Theme.useStyleCreator(styleCreator);
  return (
    <div 
      style={{
        ...style, 
        ...styles.dividerVertical
      }}
    />
  );
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.divider
  },
  dividerVertical: {
    width: 1,
    height: '100%',
    backgroundColor: theme.colors.divider
  }
}));

Divider.Vertical = Vertical;
export default Divider;