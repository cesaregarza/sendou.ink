import { createTRPCClient } from "@trpc/client";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "../server";

export const trpcClient = createTRPCClient<AppRouter>({
  url: `${import.meta.env.VITE_BACKEND_URL}/trpc`,
  fetch: (input, init) => fetch(input, { ...init, credentials: "include" }),
});

// export const trpcClient = createTRPCClient<AppRouter>({
//   fetch: (input, init) => fetch(input, { ...init, credentials: "include" }),
//   links: [
//     httpLink({
//       url: `${import.meta.env.VITE_BACKEND_URL}/trpc`,
//     }),
//   ],
// });

export type InferQueryOutput<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;
