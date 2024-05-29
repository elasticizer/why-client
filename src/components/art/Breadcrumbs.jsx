import useSWR from "swr";
import { fetcher } from "@/utils/utils";

export default function Breadcrumbs({ sub_group_id, title }) {
  const { data, error, isLoading } = useSWR(
    `/api/art/group/${sub_group_id}/check`,
    fetcher
  );
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <a href="/art">Blog</a>
        </li>
        <li>
          <a>{data.title}</a>
        </li>
        <li>{data.group}</li>
      </ul>
    </div>
  );
}
