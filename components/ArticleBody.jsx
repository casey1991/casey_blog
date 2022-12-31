import React from "react";

export const ArticleBody = ({ content }) => {
  return (
    <div
      className={"markdown"}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default ArticleBody;
