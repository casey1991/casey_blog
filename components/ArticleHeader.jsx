import React from "react";

export const ArticleHeader = ({ title = "", coverImage = "" }) => {
  return (
    <div className="flex flex-col">
      <h3 className="py-6 text-6xl">{title}</h3>
      <img src={coverImage} className="object-cover w-full aspect-video" />
    </div>
  );
};

export default ArticleHeader;
