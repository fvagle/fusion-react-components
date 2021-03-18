import { TableOptions, useTable, useSortBy, PluginHook } from 'react-table';

import { makeStyles, createStyles, clsx } from '@equinor/fusion-react-styles';

import { useTableHeaders } from './ColumnHeader';
import { FusionColumn, TableData } from './types';

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        ...theme.typography.table.cell_text.style,
        borderCollapse: 'collapse',
      },
      thead: {
        background: theme.colors.interactive.table__header__fill_resting.value.hex,
        borderBottom: `2px solid ${theme.colors.ui.background__medium.value.hex}`,
        '& th:hover': {
          background: theme.colors.interactive.table__header__fill_hover.value.rgba,
        },
      },
      cell: {
        ...theme.spacing.comfortable.x_small.style,
      },
      row: {
        borderBottom: `1px solid ${theme.colors.ui.background__medium.value.hex}`,
        '&:hover': {
          background: theme.colors.interactive.table__cell__fill_hover.value.rgba,
        },
      },
    }),
  { name: 'fusion-table' }
);

export interface FusionTableProps<D extends TableData> extends TableOptions<D> {
  columns: Array<FusionColumn<D>>;
  plugins?: Array<PluginHook<D>>;
  sort?: boolean;
}

export const FusionTable = <D extends TableData>(props: FusionTableProps<D>): JSX.Element => {
  const { data, sort, plugins = [] } = props;

  const styles = useStyles();

  // TODO: check if sort is allready added?
  sort && plugins.push(useSortBy);

  const columns = useTableHeaders(props.columns, 'table');

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, ...plugins);

  return (
    <div>
      <table {...getTableProps()} className={styles.root}>
        <thead className={clsx(styles.thead)}>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <th {...column.getHeaderProps()} className={clsx(styles.cell)}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()} className={styles.row}>
                {row.cells.map((cell) => (
                  // eslint-disable-next-line react/jsx-key
                  <td {...cell.getCellProps()} className={clsx(styles.cell)}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FusionTable;
