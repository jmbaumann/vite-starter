import { Link, Outlet } from '@tanstack/react-router';

function Layout() {
  return (
    <main className="min-h-screen">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </main>
  );
}

export default Layout;
