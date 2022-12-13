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
    console.log("handle", page);
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
                      .map((element) => <li>{element + 1}&nbsp;</li>)
                  : null}
                <li>
                  <span>
                    {currentPage < paginationEnd ? (
                      <>{currentPage}&nbsp;</>
                    ) : null}
                  </span>
                </li>
                {Array.from(Array(paginationEnd - 1).keys())
                  .slice(currentPage, paginationEnd - 1)
                  .map((element) => (
                    <li>{element + 1}&nbsp;</li>
                  ))}
              </>
            );
          } else if (paginationEnd > 10) {
            if (currentPage <= 7) {
              return (
                <>
                  {Array.from(Array(7).keys())
                    .slice(0, currentPage - 1)
                    .map((element) => (
                      <li>{element + 1}&nbsp;</li>
                    ))}
                  <li>
                    <span>{currentPage}</span>&nbsp;
                  </li>
                  {Array.from(Array(7).keys())
                    .slice(currentPage, 7)
                    .map((element) => (
                      <li>{element + 1}&nbsp;</li>
                    ))}
                  <li>...</li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(-2)
                    .map((element) => (
                      <li>{element + 1}&nbsp;</li>
                    ))}
                </>
              );
            } else if (currentPage > 7 && paginationEnd - currentPage < 6) {
              return (
                <>
                  {Array.from(Array(3).keys()).map((element) => (
                    <li>{element + 1}&nbsp;</li>
                  ))}
                  <li>...&nbsp;</li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(currentPage - 3, currentPage - 1)
                    .map((element) => (
                      <li>{element + 1}&nbsp;</li>
                    ))}
                  <li>
                    <span>
                      {currentPage < paginationEnd ? (
                        <>{currentPage}&nbsp;</>
                      ) : null}
                    </span>
                  </li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(currentPage, paginationEnd - 1)
                    .map((element) => (
                      <li>{element + 1}&nbsp;</li>
                    ))}
                </>
              );
            } else {
              return (
                <>
                  {Array.from(Array(3).keys()).map((element) => (
                    <li>{element + 1}&nbsp;</li>
                  ))}
                  <li>...&nbsp;</li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(currentPage - 3, currentPage - 1)
                    .map((element) => (
                      <li>{element + 1}&nbsp;</li>
                    ))}
                  <li>
                    <span>{currentPage}</span>&nbsp;
                  </li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(currentPage, currentPage + 2)
                    .map((element) => (
                      <li>{element + 1}&nbsp;</li>
                    ))}
                  <li>...&nbsp;</li>
                  {Array.from(Array(paginationEnd - 1).keys())
                    .slice(-2)
                    .map((element) => (
                      <li>{element + 1}&nbsp;</li>
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
