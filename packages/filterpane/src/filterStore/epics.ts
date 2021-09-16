import { combineEpics } from '@equinor/fusion';
import { StatefulObserver } from '@equinor/fusion/lib/epic';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import FilterStoreState from '../types/FilterStoreState';
import actions, { Actions } from './actions';

const updateFilterEpic = <TSelections extends Record<string, unknown> = Record<string, unknown>, TData = unknown>(
  action$: Observable<Actions>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  state$: StatefulObserver<FilterStoreState<TSelections, TData>>
) => action$.pipe(filter(isActionOf(actions.selection.clearSingle)));

const epics = combineEpics<Actions, Actions, FilterStoreState>(updateFilterEpic);

export default epics;