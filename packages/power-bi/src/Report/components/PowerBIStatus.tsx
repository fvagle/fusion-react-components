import { useContext } from 'react';
import { context } from '../context';
import { useSelector } from '@equinor/fusion/lib/epic';
import { Status } from '../store/state';

import { StarProgress } from '@equinor/fusion-react-progress-indicator';

const statusText = (status: Status) => {
  switch (status) {
    case Status.LoadingEmbedInfo:
      return 'Loading embed info';

    case Status.AcquiringAccessToken:
      return 'Acquiring access token';

    case Status.AccessCheck:
      return 'Checking context access';
  }
};

export const PowerBIStatus = () => {
  const pbiStatus = useContext(context);

  if (!pbiStatus) return null;

  const { store } = pbiStatus;
  const status = useSelector(store, 'status');
  const title = status?.map(statusText).join(',');
  // TODO
  return title ? <StarProgress title={title} /> : null;
};

export default PowerBIStatus;
