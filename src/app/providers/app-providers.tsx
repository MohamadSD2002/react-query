import { ReactQueryProvider } from "./react-query-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ReactQueryProvider>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryProvider>
  );
}