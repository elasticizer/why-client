import useSWR from "swr";
import { fetcher } from "@/utils/utils";

export default function FormFieldGroup({
  groups,
  setGroups,
  subgroups,
  setSubGroups,
}) {
  const { data, error, isLoading } = useSWR("/api/art/group", fetcher);
  const handler = (e) => {
    const group = e.target.value;
    if (groups.includes(group)) {
      setGroups(groups.filter((v) => v !== group));
      const { [group]:removedGroup, ...newSubgroups } = subgroups;
      console.log(newSubgroups);
      setSubGroups(newSubgroups);
      return;
    }
    setGroups([...groups, group]);
    console.log({ ...subgroups, [group]: [] });

    setSubGroups({ ...subgroups, [group]: [] });
  };

  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div className=" flex gap-x-5 gap-y-2 flex-wrap pl-4">
        {data.data.map((v) => {
          return (
            <input
              type="checkbox"
              aria-label={v.title}
              className="btn rounded-full text-xl form-field-input"
              key={v._id}
              value={v.sort}
              onChange={handler}
            />
          );
        })}
      </div>
    </>
  );
}
