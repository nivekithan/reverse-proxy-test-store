import { LoaderArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = ({ request }: LoaderArgs) => {
  const url = request.url;

  return json({ url });
};

export default function StatusSplatRoute() {
  const { url } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Store Route</h1>
      <p>URL: {url}</p>
    </div>
  );
}
