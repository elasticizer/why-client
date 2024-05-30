import useSWR from "swr";
import { fetcher } from "@/utils/utils";

export default function ArtSubGroupPill({ sub_group_id }) {
  const { data, error, isLoading } = useSWR(
    `/api/art/group/${sub_group_id}/check`,
    fetcher
  );
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <button className="btn btn-sm rounded-full tag-badge bg-blue-200 border-none">
        {data.title}
      </button>
      <button className="btn btn-sm rounded-lg tag-badge bg-orange-200 border-none">
        {data.group}
      </button>
    </>
  );
}
