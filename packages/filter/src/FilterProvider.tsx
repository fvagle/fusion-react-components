import { useLayoutEffect, useState } from 'react';

import { BehaviorSubject } from 'rxjs';

import { useObservable, useSubscription } from '@equinor/fusion-react-observable';

import { createSelectionReducer, createDataReducer, createFilterReducer } from './reducers';

import { Provider } from './context';
import { Filter, FilterContext } from './types';
import { actions } from './actions';
import { filterData } from './hooks/useFilterData';

export type FilterProviderProps<TSelections extends Record<string, unknown>, TData> = {
  data: TData[];
  initialSelection?: TSelections;
  initialFilters?: Record<string, Filter<TData, TSelections>>;
};

export const FilterProvider = <
  TSelections extends Record<string, any>,
  TData extends Record<string, any> = Record<string, any>
>(
  props: React.PropsWithChildren<FilterProviderProps<TSelections, TData>>
): JSX.Element => {
  const {
    data,
    initialSelection = {} as TSelections,
    initialFilters = {} as Record<string, Filter<TData, unknown>>,
    children,
  } = props;
  const source$ = useObservable(createDataReducer(data), data);
  const selection$ = useObservable(createSelectionReducer(initialSelection), initialSelection);
  const filter$ = useObservable(createFilterReducer({}), initialFilters);

  const [data$] = useState(new BehaviorSubject<TData[]>(data));
  useSubscription(filterData(source$, filter$, selection$), data$);

  const context = {
    source$,
    filter$,
    selection$,
    data$,
    /** type issues, might fix later */
  } as unknown as FilterContext;

  useLayoutEffect(() => {
    source$.next(actions.source.update(data));
  }, [source$, data]);

  return <Provider value={context}>{children}</Provider>;
};

export default FilterProvider;
