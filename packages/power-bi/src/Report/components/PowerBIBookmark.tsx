import { useContext, FunctionComponent, useState, useEffect } from 'react';
import { context, PowerBIEmbedEvents, PowerBIEmbedEventEntry } from '../context';
import { Report } from 'powerbi-client';
import { filter, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { useSelector } from '@equinor/fusion';
// import { BookmarksManager } from '@equinor/fusion-components';

const BookmarksManager = (_props: {
  capturePayload: unknown;
  applyBookmark?: unknown;
  hasContext: unknown;
  anchorId: unknown;
  name: unknown;
}) => {
  console.error('no bookmark manager defined!');
  return null;
};

type Props = {
  hasContext: boolean;
};

const nextRender = (event$: Observable<PowerBIEmbedEventEntry>) => {
  return event$.pipe(
    filter((x) => x.type === PowerBIEmbedEvents.rendered),
    first()
  );
};

export const PowerBIBookmark: FunctionComponent<Props> = ({ hasContext }: Props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const pbiContext = useContext(context);

  if (!pbiContext) return null;
  const { component, store, event$ } = pbiContext;

  /**
   * @eskil - seems like the bookmark sidesheet does not display if the AppSettingsManager is rendered to early
   * this only triggers re-render when status of the store changes
   */
  useSelector(store, 'status');

  const report = component?.current as Report;

  const captureBookmark = async () => {
    if (!report) return '';

    try {
      const bookmark = await report.bookmarksManager.capture();
      return bookmark.state || '';
    } catch (err) {
      console.error(err);
      return '';
    }
  };

  /**
   * @todo - test if this can be applied on next load
   */
  const applyBookmark = async (bookmark: string, awaitForContextSwitch: boolean) => {
    awaitForContextSwitch
      ? nextRender(event$).subscribe(() => report.bookmarksManager.applyState(bookmark))
      : report.bookmarksManager.applyState(bookmark);
  };
  applyBookmark;
  useEffect(() => {
    const loaded$ = event$.pipe(
      filter((x) => x.type === PowerBIEmbedEvents.Loaded),
      first()
    );
    const subscription = loaded$.subscribe(() => setIsLoaded(true));

    return () => {
      subscription.unsubscribe();
    };
  }, [event$]);
  return isLoaded ? (
    <BookmarksManager
      capturePayload={captureBookmark}
      // applyBookmark={(bookmark, awaitForContextSwitch) => applyBookmark(bookmark.payload, awaitForContextSwitch)}
      hasContext={hasContext}
      anchorId="pbi-bookmarks-btn"
      name="Power BI bookmarks"
    />
  ) : null;
};

export default PowerBIBookmark;