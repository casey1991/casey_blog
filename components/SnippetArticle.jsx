import Link from "next/link";
import React from "react";

const SnippetArticle = ({ slug, title, excerpt, cover, tags = [] }) => {
  return (
    <Link href={`/articles/${slug}`}>
      <div className="flex flex-col gap-3 p-3 border border-transparent rounded-md cursor-pointer hover:border-gray-100">
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col flex-1 gap-3">
            <h3 className="text-2xl text-gray-700">{title}</h3>
            <p className="text-gray-500">{excerpt}</p>
          </div>
          <img
            src={cover}
            className="object-cover w-32 bg-gray-300 border border-gray-100 rounded-md aspect-square"
          />
        </div>
        <div className="flex flex-row items-center gap-3">
          {Array.from(tags).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default SnippetArticle;
