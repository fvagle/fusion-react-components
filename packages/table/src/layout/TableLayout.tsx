import { clsx } from '@equinor/fusion-react-styles';
import useStyles, { StyleProps } from './layout.style';
import { Layout, LayoutProps } from './types';
import { useTableContext } from '../TableProvider';

// import { useFlexLayout } from 'react-table';

const defaultStyleProps: StyleProps = {
  spacing: 'small',
};

export const TableLayoutTemplate = (props: LayoutProps): JSX.Element => {
  const { spacing = 'small', style, className, setTableRowProps } = props;
  const { instance } = useTableContext();
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, disablePagination = true } = instance;
  const rows = disablePagination ? instance.rows : instance.page;
  const styles = useStyles({ ...defaultStyleProps, spacing });
  return (
    <table {...getTableProps({ className: clsx(styles.root, className) })} style={style}>
      <thead className={styles.thead}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              const isGroupHeader = !!column.columns?.length;
              const renderer = isGroupHeader ? 'Header' : 'ColumnHeader';
              const className = clsx(isGroupHeader && styles.groupHeader, styles.cell);

              const style = {
                width: column.canResize ? column.width : undefined,
              };
              return <th {...column.getHeaderProps({ className, style })}>{column.render(renderer)}</th>;
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const additionalProps = setTableRowProps ? setTableRowProps(row) : {};
          return (
            <tr {...row.getRowProps({ className: clsx(styles.row, additionalProps?.className), ...additionalProps })}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps({ className: styles.cell })}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const TableLayout: Layout = {
  // plugins: [],
  Template: TableLayoutTemplate,
};

export default TableLayout;
