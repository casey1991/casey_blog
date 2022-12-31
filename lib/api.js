import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const articlesDirectory = join(process.cwd(), "_articles");

export const getArticleSlugs = () => {
  return fs.readdirSync(articlesDirectory);
};
export const getArticleBySlug = (slug, fields = []) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items = {};
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items;
};
export const getAllArticles = (fields = []) => {
  const slugs = getArticleSlugs();
  const articles = slugs.map((slug) => getArticleBySlug(slug, fields));
  return articles;
};
