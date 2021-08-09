import { createStyles, makeStyles } from '@equinor/fusion-react-styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    FilterSectionContainer: {
      display: 'flex',
      flexDirection: 'column',
    },

    FilterSection: {
      display: 'flex',
      width: '100%',
      backgroundColor: theme.colors.ui.background__light.value.hex,
      boxSizing: 'border-box',
      borderBottom: `solid 1px ${theme.colors.ui.background__medium.value.hex}`,
      overflowY: 'auto',
    },

    FilterSectionEmptyText: {
      padding: '16px',
    },

    Resize: {
      width: '100%',
      zIndex: 2,
      height: '4px',
      left: '-16px',
      cursor: 'row-resize',
      opacity: 0,
      transition: 'opacity 0.2s',
      '&:hover': { opacity: 1 },
    },

    Resizing: {
      userSelect: 'none',
      transition: 'none',
    },

    ResizeBar: {
      width: '100%',
      position: 'relative',
      zIndex: 1,
      height: '4px',
      background: 'rgba(0, 0, 0, 0.1)',
    },

    ResizeIndicator: {
      position: 'relative',
      left: 'calc(50% - 12px)',
      top: '-14px',
      height: '24px',
      width: '24px',
      background: 'white',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      zIndex: 2,
    },
    Minimized: {
      display: 'none',
    },
  })
);

export default useStyles;
