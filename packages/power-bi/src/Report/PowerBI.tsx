import { FunctionComponent, MutableRefObject } from 'react';

import { PowerBIReportProvider, PowerBIReportErrorBoundary, PowerBIBookmark, PowerBIStatus } from './components';
import { PowerBIReportContext, context } from './context';
import PowerBIReportView, { PowerBIComponentConfig } from './components/view/PowerBIReportView';
import { ApiClient } from '../types';

export type PowerBIProps = {
  reportId: string;
  hasContext?: boolean;
  reloadOnContextChange?: boolean;
  contextRef?: MutableRefObject<PowerBIReportContext>;
  config?: PowerBIComponentConfig;
  apiClient: ApiClient;
};

export const PowerBI: FunctionComponent<PowerBIProps> = ({
  reportId,
  hasContext = false,
  reloadOnContextChange = false,
  config,
  contextRef,
  apiClient,
}: PowerBIProps) => (
  <PowerBIReportProvider
    id={reportId}
    hasContext={hasContext}
    reloadOnContextChange={reloadOnContextChange}
    apiClient={apiClient}
  >
    <PowerBIStatus />
    <PowerBIReportErrorBoundary>
      <PowerBIReportView config={config}></PowerBIReportView>
    </PowerBIReportErrorBoundary>
    <PowerBIBookmark hasContext={hasContext} />
    <context.Consumer>
      {(value) => {
        if (contextRef && contextRef?.current !== value) {
          contextRef.current = value || undefined;
        }
        return null;
      }}
    </context.Consumer>
  </PowerBIReportProvider>
);

export default PowerBI;