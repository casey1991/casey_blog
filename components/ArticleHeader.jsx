import React from "react";

export const ArticleHeader = ({ title = "", coverImage = "" }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-6xl py-6">{title}</h3>
      <img src={coverImage} className="w-full aspect-video object-cover" />
    </div>
  );
};

export default ArticleHeader;
