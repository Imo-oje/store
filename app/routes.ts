import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/public_routes/home.tsx"),

  layout("routes/auth/layout.tsx", [
    route("auth/login", "routes/auth/login.tsx"),
    route("auth/register", "routes/auth/register.tsx"),
    route("auth/forgot-password", "routes/auth/forgot-password.tsx"),
    route("/auth/reset-password?", "routes/auth/reset-password.tsx"),
  ]),

  layout("routes/auth/auth-container.tsx", [
    route("admin", "routes/admin/dashboard.tsx", [
      index("routes/admin/overview.tsx"),
      route("settings", "routes/admin/settings/settings.tsx"),
      route("products", "routes/admin/products/products.tsx"),
      route("customers", "routes/admin/customers/customers.tsx"),
    ]),
    route("/dashboard", "routes/user/dashboard.tsx", [
      index("routes/user/overview.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
