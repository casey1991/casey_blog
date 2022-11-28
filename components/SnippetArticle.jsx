import Link from "next/link";
import React from "react";

const SnippetArticle = ({ slug, title, excerpt, cover, tags = [] }) => {
  return (
    <Link href={`/articles/${slug}`}>
      <div className="flex flex-col gap-3 p-3 hover:bg-gray-50 cursor-pointer">
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-1 flex-col gap-3">
            <h3 className="text-gray-700 text-2xl">{title}</h3>
            <p className="text-gray-500">{excerpt}</p>
          </div>
          <img
            src={cover}
            className="aspect-square w-32 border border-gray-100 bg-gray-300 rounded-md object-cover"
          />
        </div>
        <div className="flex flex-row items-center gap-3">
          {tags.map((tag) => (
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
