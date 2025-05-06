import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/public_routes/home.tsx"),

  layout("./auth/layout.tsx", [
    route("auth/login", "auth/login.tsx"),
    route("auth/register", "auth/register.tsx"),
    route("auth/forgot-password", "auth/forgot-password.tsx"),
    route("/auth/reset-password?", "auth/reset-password.tsx"),
  ]),

  route("admin", "routes/admin_routes/dashboard.tsx", [
    index("routes/admin_routes/overview.tsx"),
  ]),
  route("dashboard", "routes/user_routes/dashboard.tsx", [
    index("routes/user_routes/overview.tsx"),
  ]),
] satisfies RouteConfig;
