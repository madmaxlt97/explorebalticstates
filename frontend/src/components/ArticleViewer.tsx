import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import { Helmet } from "react-helmet";
import "../styles/componentsStyles/CityTopicsStyles.css";
import Header from "./Header";

const articles = import.meta.glob("../content/city-topics/**/**/*.md", {
  query: "?raw",
  import: "default",
});

/*export default function ArticleViewer() {
  const { countryName, cityId, articleId } = useParams();
  const [articleContent, setArticleContent] = useState("");
  const [metadata, setMetadata] = useState<any>({});
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
}*/

export default function ArticleViewer() {
  const { countryName, cityId, articleId } = useParams();
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState<any>({}); // 2. State for SEO data
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchArticle() {
      const path = `../content/city-topics/${countryName}/${cityId}/${articleId}.md`;

      try {
        if (articles[path]) {
          const rawText = (await articles[path]()) as string;

          // 3. Parse the file
          const { data, content: body } = matter(rawText);

          setMetadata(data);
          setContent(body);

          // 4. Update the document title for Google/Users
          if (data.meta_title) {
            document.title = data.meta_title;
          }
        } else {
          setContent("# Article not found");
        }
      } catch (error) {
        console.error("Error loading article:", error);
        setContent("# Error loading article.");
      }
    }
    fetchArticle();
  }, [countryName, cityId, articleId]);

  return (
    <>
      {/* 5. SEO implementation: Google will now "see" your metadata */}
      <Helmet>
        <title>{metadata.meta_title || "Travel Guide"}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords?.join(", ")} />
      </Helmet>

      <Header />
      <div className="markdown-container">
        {/* Only the 'content' (without dashes) is passed here */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>

      <div className="actions">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go back
        </button>
        <button className="btn-to-main-page" onClick={() => navigate(`/`)}>
          Main page
        </button>
      </div>
    </>
  );
}
