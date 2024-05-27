import React from "react";

export default function OrderSelect({ setSortMethod }) {
  return (
    <select
      className="select select-lg select-ghost w-full max-w-xs focus:outline-none font-black text-xl"
      onChange={({ target }) => {
        setSortMethod(target.value);
      }}
      defaultValue={0}
    >
      <option value={0}>默認排序</option>
      <option value={1}>發布時間 遠到近</option>
      <option value={2}>發布時間 近到遠</option>
      <option value={3}>觀看人數 多到少</option>
      <option value={4}>觀看人數 少到多</option>
      <option value={5}>贊同數量 多到少</option>
      <option value={6}>贊同數量 少到多</option>
    </select>
  );
}
