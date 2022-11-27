import SnippetArticle from "../components/SnippetArticle";
import { getAllArticles } from "../lib/api";

function HomePage({ articles = [] }) {
  return (
    <div className="container mx-auto">
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
