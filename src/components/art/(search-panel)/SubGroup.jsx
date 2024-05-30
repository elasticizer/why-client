import useSWR from "swr";
import { fetcher } from "@/utils/utils";

export default function SubGroup({ sort, subgroups, setSubGroups }) {
  const { data, error, isLoading } = useSWR(`/api/art/group/${sort}`, fetcher);
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const handler = (e, sort) => {
    const group = e.target.value;
    if (subgroups[sort]?.includes(group)) {
      const newSubgroupsArr = subgroups[sort].filter((item) => item !== group);
      const newSubgroups = { ...subgroups };

      newSubgroups[sort] = newSubgroupsArr;
      setSubGroups(newSubgroups);
      console.log(newSubgroups);
      return;
    }
    let subgroupsArr = subgroups[sort] || [];
    let newSubgroupsArr = [...subgroupsArr, group];
    let newSubgroups = { ...subgroups, [sort]: newSubgroupsArr };
    console.log(newSubgroups);
    setSubGroups(newSubgroups);
  };
  // subgroups:{1:["1","2"],2:[]..}
  return (
    <>
      <div className="w-5/6 flex gap-x-5 gap-y-2 flex-wrap">
        {data.data.map((v) => {
          return (
            <input
              type="checkbox"
              aria-label={v.title}
              className="btn rounded-full text-xl form-field-input"
              key={v._id}
              value={v._id}
              onChange={(e) => {
                handler(e, v.sort);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
