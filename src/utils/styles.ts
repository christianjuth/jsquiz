import { Theme } from '../types';

function lockWidth<N extends number | string>(width: N): {
  minWidth: N
  width: N
  maxWidth: N
} {
  return {
    minWidth: width,
    width,
    maxWidth: width
  }
}

function lockHeight<N extends number | string>(height: N): {
  minHeight: N
  height: N
  maxHeight: N
} {
  return {
    minHeight: height,
    height,
    maxHeight: height
  }
}

function hideLink() {
  return {
    textDecoration: 'none',
    color: 'unset'
  } as const;
}

function centerBackgroundImage() {
  return {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  } as const;
}

function aspectRatioFullHeight(aspectRatio: number) {
  return {
    height: '100%',
    paddingTop: `${100 / aspectRatio}%`
  } as const;
}

function aspectRatioFullWidth(aspectRatio: number) {
  return {
    width: '100%',
    paddingTop: `${100 / aspectRatio}%`
  } as const;
}

function page(theme: Theme, mode: 'compact' | 'normal' = 'normal') {
  if(mode == 'compact') {
    return {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  }
  
  return {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6)
  };
}

type Flex<D> = {
  display: 'flex'
  flexDirection: D
}

function flex(direction: 'row'): Flex<'row'>
function flex(direction?: 'column'): Flex<'column'>
function flex(direction: string = 'column'): Flex<string>
{
  return {
    display: 'flex',
    flexDirection: direction
  };
}

function textCenter() {
  return {
    textAlign: 'center',
    justifyContent: 'center'
  } as const;
}

function absoluteFill() {
  return {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  } as const;
}

function card(theme: Theme) {
  return {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.roundness(1),
    overflow: 'hidden'
  } as const;
}

function cardBody(theme: Theme) {
  return {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing(2)
  } as const;
}

function unstyle() {
  return {
    border: 'none',
    outline: 'none',
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent'
  } as const;
}

export const styleHelpers = {
  lockWidth,
  lockHeight,
  hideLink,
  centerBackgroundImage,
  aspectRatioFullHeight,
  aspectRatioFullWidth,
  page,
  flex,
  textCenter,
  absoluteFill,
  card,
  cardBody,
  unstyle
}