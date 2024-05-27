import SubGroup from "./SubGroup";
import useSWR from "swr";
import { fetcher } from "@/utils/utils";
import { Fragment } from "react";

export default function FormFieldSubGroup({ groups, subgroups, setSubGroups }) {
  const { data, error, isLoading } = useSWR(`/api/art/group`, fetcher);
  if (error || data?.error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const arr = data.data;
  const sort_title_obj = {};
  arr.forEach((obj) => {
    sort_title_obj[obj.sort] = obj.title;
  });
  return (
    <>
      {groups.map((sort) => (
        <Fragment key={sort}>
          <div className="flex flex-row">
            <span className="menu-title text-right text-xl text-nowrap text-orange-300 w-28">
              {sort_title_obj[sort]}
            </span>
            <SubGroup
              sort={sort}
              subgroups={subgroups}
              setSubGroups={setSubGroups}
            ></SubGroup>
          </div>
          <div className="divider my-2 px-4"></div>
        </Fragment>
      ))}
    </>
  );
}
