import { Outlet } from "react-router-dom";
import { Header } from "../../shared/components/header/header";

export function RootLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
}