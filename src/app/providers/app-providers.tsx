import { ReactQueryProvider } from "./react-query-provider";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  );
}