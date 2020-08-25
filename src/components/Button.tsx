import React from 'react';
import Theme from './Theme';

export function Button({
  children,
  onClick,
  style,
}: {
  children: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
  style?: React.CSSProperties
}) {
  const styles = Theme.useStyleCreator(styleCreator);
  return (
    <div 
      style={{
        ...styles.button,
        ...style
      }}
      onClick={onClick}
    >
      <span style={styles.buttonText}>{children}</span>
    </div>
  );
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  button: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.colors.accent,
    borderRadius: theme.roundness(1),
    cursor: 'pointer'
  },
  buttonText: {
    color: '#fff',
    fontSize: '1.3rem'
  }
}));

export default Button;