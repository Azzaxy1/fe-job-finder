// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { articles } from "@/utils/local-data.js";
import { Pagination } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ListArticle = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlePerPage = 5;

  const totalPage = Math.ceil(articles.length / articlePerPage);

  const startIndex = (currentPage - 1) * articlePerPage;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlePerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <section className="flex flex-col items-center min-h-screen gap-10 px-10 py-12 md:px-28 2xl:px-72">
      <div className="flex flex-col gap-4">
        {currentArticles.map((article, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-4 lg:flex-row"
          >
            <img src={article.image} alt={article.title} className="w-40 " />
            <div>
              <h2 className="text-2xl font-semibold text-blue hover:underline">
                <Link to={`/tips/${article.id}`}>{article.title}</Link>
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: truncateDescription(article.description, 300),
                }}
              />
            </div>
          </article>
        ))}
      </div>
      <Pagination
        isCompact
        showControls
        total={totalPage}
        initialPage={1}
        onChange={handlePageChange}
      />
    </section>
  );
};

export default ListArticle;
