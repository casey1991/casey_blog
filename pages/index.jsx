import SnippetArticle from "../components/SnippetArticle";
import { getAllArticles } from "../lib/api";

function HomePage({ articles = [] }) {
  return (
    <div className="flex flex-col gap-3 py-3">
      <div className="relative flex flex-row items-center gap-3">
        <span className="absolute ml-4 text-gray-500 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <input
          className="w-full h-12 px-12 border border-gray-500 rounded-full"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="divide-y divide-gray-100">
        {articles.map((item) => {
          return (
            <SnippetArticle
              slug={item.slug}
              title={item.title}
              excerpt={item.excerpt}
              cover={item.coverImage}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

export const getStaticProps = () => {
  const articles = getAllArticles([
    "slug",
    "title",
    "excerpt",
    "coverImage",
    "tags",
  ]);
  return {
    props: {
      articles: articles,
    },
  };
};
