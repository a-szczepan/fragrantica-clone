import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllPerfumes } from "../utils/api";
const left: string = require("../assets/icons/left.svg").default;
const right: string = require("../assets/icons/right.svg").default;

type Props = {
  paginationLimit: number;
  currentPage: number;
};

export const Pagination = ({ paginationLimit, currentPage }: Props) => {
  const [, setSearchParams] = useSearchParams();
  const [paginationEnd, setPaginationEnd] = useState<number>(0);

  useEffect(() => {
    const fetchAllPerfumes = async () => {
      const res = await getAllPerfumes();
      setPaginationEnd(
        await res.json().then((doc) => Math.ceil(doc.length / paginationLimit))
      );
    };
    fetchAllPerfumes();
  }, [paginationLimit]);

  function handleRedirect(event: React.MouseEvent, page: number) {
    event.preventDefault();
    console.log("tu", page);
    setSearchParams({ page: String(page) });
  }

  return (
    <ul className="pagination">
      <li>
        <a
          href={`/search?page=${currentPage > 1 ? currentPage - 1 : 1}`}
          onClick={(e) =>
            handleRedirect(e, currentPage > 1 ? currentPage - 1 : 1)
          }
        >
          <img src={left} alt="left arrow" />
        </a>
      </li>
      <>
        {(() => {
          if (paginationEnd > 0 && paginationEnd <= 10) {
            return (
              <>
                {currentPage > 1
                  ? Array.from(Array(paginationEnd - 1).keys())
                      .slice(0, currentPage - 1)
                      .map((element, index) => (
                        <li key={index}>
                          <a
                            href={`/search?page=${element + 1}`}
                            onClick={(e) => handleRedirect(e, element + 1)}
                          >
                            {element + 1}
                          </a>
                        </li>
                      ))
                  : null}
                {currentPage < paginationEnd ? (
                  <li>
                    <a href={`/search?page=${currentPage}`}>
                      <span>{currentPage}</span>
                    </a>
                  </li>
                ) : null}
                {Array.from(Array(paginationEnd - 1).keys())
                  .slice(currentPage, paginationEnd - 1)
                  .map((element, index) => (
                    <li key={index}>
                      <a
                        href={`/search?page=${element + 1}`}
                        onClick={(e) => handleRedirect(e, element + 1)}
                      >
                        {element + 1}
                      </a>
                    </li>
                  ))}
              </>
            );
          } else if (paginationEnd > 10) {
            if (currentPage <= 7) {
              return (
                <>
                  {Array.from(Array(7).keys())
                    .slice(0, currentPage - 1)
                    .map((element, index) => (
                      <li key={index}>
                        <a
                          href={`/search?page=${element + 1}`}
                          onClick={(e) => handleRedirect(e, element + 1)}
                        >
                          {element + 1}
                        </a>
                      </li>
                    ))}
                  <li>
                    <a href={`/search?page=${currentPage}`}>
                      <span>{currentPage}</span>
                    </a>
                  </li>
                  {Array.from(Array(7).keys())
                    .slice(currentPage, 7)
                    .map((element, index) => (
                      <li key={index}>
                        <a
                          href={`/search?page=${element + 1}`}
                          onClick={(e) => handleRedirect(e, element + 1)}
                        >
                          {element + 1}
                        </a>
                      </li>
                    ))}
                  <li>...</li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(-2)
                    .map((element, index) => (
                      <li key={index}>
                        <a
                          href={`/search?page=${element + 1}`}
                          onClick={(e) => handleRedirect(e, element + 1)}
                        >
                          {element + 1}
                        </a>
                      </li>
                    ))}
                </>
              );
            } else if (currentPage > 7 && paginationEnd - currentPage < 6) {
              return (
                <>
                  {Array.from(Array(3).keys()).map((element, index) => (
                    <li key={index}>
                      <a
                        href={`/search?page=${element + 1}`}
                        onClick={(e) => handleRedirect(e, element + 1)}
                      >
                        {element + 1}
                      </a>
                    </li>
                  ))}
                  <li>...</li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(currentPage - 3, currentPage - 1)
                    .map((element, index) => (
                      <li key={index}>
                        <a
                          href={`/search?page=${element + 1}`}
                          onClick={(e) => handleRedirect(e, element + 1)}
                        >
                          {element + 1}
                        </a>
                      </li>
                    ))}
                  {currentPage < paginationEnd ? (
                    <li>
                      <a href={`/search?page=${currentPage}`}>
                        <span>{currentPage}</span>
                      </a>
                    </li>
                  ) : null}
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(currentPage, paginationEnd - 1)
                    .map((element, index) => (
                      <li key={index}>
                        <a
                          href={`/search?page=${element + 1}`}
                          onClick={(e) => handleRedirect(e, element + 1)}
                        >
                          {element + 1}
                        </a>
                      </li>
                    ))}
                </>
              );
            } else {
              return (
                <>
                  {Array.from(Array(3).keys()).map((element, index) => (
                    <li key={index}>
                      <a
                        href={`/search?page=${element + 1}`}
                        onClick={(e) => handleRedirect(e, element + 1)}
                      >
                        {element + 1}
                      </a>
                    </li>
                  ))}
                  <li>...</li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(currentPage - 3, currentPage - 1)
                    .map((element, index) => (
                      <li key={index}>
                        <a
                          href={`/search?page=${element + 1}`}
                          onClick={(e) => handleRedirect(e, element + 1)}
                        >
                          {element + 1}
                        </a>
                      </li>
                    ))}
                  <li>
                    <a href={`/search?page=${currentPage}`}>
                      <span>{currentPage}</span>
                    </a>
                  </li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(currentPage, currentPage + 2)
                    .map((element, index) => (
                      <li key={index}>
                        <a
                          href={`/search?page=${element + 1}`}
                          onClick={(e) => handleRedirect(e, element + 1)}
                        >
                          {element + 1}
                        </a>
                      </li>
                    ))}
                  <li>...</li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(-2)
                    .map((element, index) => (
                      <li key={index}>
                        <a
                          href={`/search?page=${element + 1}`}
                          onClick={(e) => handleRedirect(e, element + 1)}
                        >
                          {element + 1}
                        </a>
                      </li>
                    ))}
                </>
              );
            }
          } else {
            return null;
          }
        })()}
      </>
      <li>
        <a
          href={`/search?page=${paginationEnd}`}
          onClick={(e) => handleRedirect(e, paginationEnd)}
        >
          {paginationEnd === currentPage ? (
            <span>{paginationEnd}</span>
          ) : (
            paginationEnd
          )}
        </a>
      </li>
      <li>
        <a
          href={`/search?page=${
            currentPage === paginationEnd ? paginationEnd : currentPage + 1
          }`}
          onClick={(e) =>
            handleRedirect(
              e,
              currentPage === paginationEnd ? paginationEnd : currentPage + 1
            )
          }
        >
          <img src={right} alt="right arrow" />
        </a>
      </li>
    </ul>
  );
};
