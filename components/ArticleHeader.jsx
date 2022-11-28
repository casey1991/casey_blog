import React from "react";

export const ArticleHeader = ({ title = "", coverImage = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-4xl">{title}</h3>
      <img src={coverImage} className="w-full aspect-video object-cover" />
    </div>
  );
};

export default ArticleHeader;
