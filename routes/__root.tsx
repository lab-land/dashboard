import { createRootRoute, Link, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/example'>
          Example
        </Link>
      </div>
      <hr />
      <ScrollRestoration />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
