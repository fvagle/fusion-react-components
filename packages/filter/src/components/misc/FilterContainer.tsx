import { clsx, createStyles, makeStyles, theme } from '@equinor/fusion-react-styles';
import React from 'react';

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: ({ spacing }: StyleProps) => ({
        display: 'flex',
        gap: theme.spacing.comfortable[spacing || 'medium'].getVariable('padding'),
      }),
    }),
  { name: 'fusion-filter-container' }
);

type StyleProps = {
  spacing?: keyof typeof theme.spacing.comfortable;
};

export type FilterContainerProps = JSX.IntrinsicElements['div'] & StyleProps;

/**
 *  Components for displaying filters
 */
export const FilterContainer = (props: React.PropsWithChildren<FilterContainerProps>): JSX.Element => {
  const { children, className, spacing, ...args } = props;
  const styles = useStyles({ spacing });
  return (
    <div className={clsx(styles.root, className)} {...args}>
      {children}
    </div>
  );
};

export default FilterContainer;
