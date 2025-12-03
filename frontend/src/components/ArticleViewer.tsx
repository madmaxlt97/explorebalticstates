import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import "../styles/componentsStyles/CityTopicsStyles.css";
import Header from "./Header";

const articles = import.meta.glob("../content/city-topics/**/**/*.md", {
  query: "?raw",
  import: "default",
});

export default function ArticleViewer() {
  const { countryName, cityId, articleId } = useParams();
  const [articleContent, setArticleContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchArticle() {
      const path = `../content/city-topics/${countryName}/${cityId}/${articleId}.md`;

      try {
        if (articles[path]) {
          const content = (await articles[path]()) as string;
          setArticleContent(content);
        } else {
          setArticleContent(
            "# Article not found\nThe requested article could not be found."
          );
        }
      } catch (error) {
        console.error("Error loading article:", error);
        setArticleContent("# Error loading article.");
      }
    }
    fetchArticle();
  }, [countryName, cityId, articleId]);

  return (
    <>
      <Header />
      <div className="markdown-container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {articleContent}
        </ReactMarkdown>
      </div>
      <div className="actions">
        <button
          className="back-btn"
          onClick={() => navigate(`/country/${countryName}/cities/${cityId}`)}
        >
          Go back
        </button>
        <button className="btn-to-main-page" onClick={() => navigate(`/`)}>
          Go to main page
        </button>
      </div>
    </>
  );
}
