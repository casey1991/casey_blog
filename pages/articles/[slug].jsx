import React from "react";
import { ArticleHeader } from "../../components/ArticleHeader";
import { ArticleBody } from "../../components/ArticleBody";
import { getAllArticles, getArticleBySlug } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import Head from "next/head";

export const ArticlePage = ({ article }) => {
  return (
    <div>
      <Head>
        <title>{article.title}</title>
      </Head>
      <ArticleHeader title={article.title} coverImage={article.coverImage} />
      <ArticleBody content={article.content} />
    </div>
  );
};

export default ArticlePage;

export const getStaticProps = async ({ params }) => {
  const article = getArticleBySlug(params.slug, [
    "title",
    "coverImage",
    "content",
  ]);
  const content = await markdownToHtml(article.content || "");
  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  };
};

export const getStaticPaths = () => {
  const articles = getAllArticles(["slug"]);
  return {
    paths: articles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
};
