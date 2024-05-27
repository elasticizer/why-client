import React from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable();
export default function ArtContent({ content }) {
  const result = md.render(content);
  const markup = { __html: result };
  return <div dangerouslySetInnerHTML={markup}></div>;
}
