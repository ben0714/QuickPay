import React from 'react';
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const QueryClientProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
