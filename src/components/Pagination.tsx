import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilteringResponse } from "../types/shared";
const left: string = require("../assets/icons/left.svg").default;
const right: string = require("../assets/icons/right.svg").default;

type Props = {
  data: FilteringResponse;
};

export const Pagination = ({ data }: Props) => {
  const [, setSearchParams] = useSearchParams();
  const [paginationEnd, setPaginationEnd] = useState<number>(0);

  useEffect(() => {
    setPaginationEnd(Math.ceil(data.total / data.itemsPerPage));
  }, [data]);

  function handleRedirect(event: React.MouseEvent, page: number) {
    event.preventDefault();
    setSearchParams({ page: String(page) });
  }

  function mapPaginationItems(item: number[]) {
    return item.map((element, index) => (
      <li key={index}>
        <a
          href={`/search?page=${element + 1}`}
          onClick={(e) => handleRedirect(e, element + 1)}
        >
          {element + 1}
        </a>
      </li>
    ));
  }

  return (
    <ul className="pagination">
      <li>
        <a
          href={`/search?page=${data.page > 1 ? data.page - 1 : 1}`}
          onClick={(e) => handleRedirect(e, data.page > 1 ? data.page - 1 : 1)}
        >
          <img src={left} alt="left arrow" />
        </a>
      </li>
      <>
        {(() => {
          if (paginationEnd > 0 && paginationEnd <= 10) {
            return (
              <>
                {data.page > 1
                  ? Array.from(Array(paginationEnd - 1).keys())
                      .slice(0, data.page - 1)
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
                {data.page < paginationEnd ? (
                  <li>
                    <a href={`/search?page=${data.page}`}>
                      <span>{data.page}</span>
                    </a>
                  </li>
                ) : null}
                {Array.from(Array(paginationEnd - 1).keys())
                  .slice(data.page, paginationEnd - 1)
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
            if (data.page <= 7) {
              return (
                <>
                  {mapPaginationItems(
                    Array.from(Array(7).keys()).slice(0, data.page - 1)
                  )}
                  <li>
                    <a href={`/search?page=${data.page}`}>
                      <span>{data.page}</span>
                    </a>
                  </li>
                  {mapPaginationItems(
                    Array.from(Array(7).keys()).slice(data.page, 7)
                  )}
                  <li>...</li>
                  {mapPaginationItems(
                    Array.from(Array(paginationEnd - 1).keys()).slice(-2)
                  )}
                </>
              );
            } else if (data.page > 7 && paginationEnd - data.page < 6) {
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
                  {mapPaginationItems(
                    Array.from(Array(paginationEnd - 1).keys()).slice(
                      data.page - 3,
                      data.page - 1
                    )
                  )}
                  {data.page < paginationEnd ? (
                    <li>
                      <a href={`/search?page=${data.page}`}>
                        <span>{data.page}</span>
                      </a>
                    </li>
                  ) : null}
                  {mapPaginationItems(
                    Array.from(Array(paginationEnd - 1).keys()).slice(
                      data.page,
                      paginationEnd - 1
                    )
                  )}
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
                  {mapPaginationItems(
                    Array.from(Array(paginationEnd - 1).keys()).slice(
                      data.page - 3,
                      data.page - 1
                    )
                  )}
                  <li>
                    <a href={`/search?page=${data.page}`}>
                      <span>{data.page}</span>
                    </a>
                  </li>
                  {mapPaginationItems(
                    Array.from(Array(paginationEnd - 1).keys()).slice(
                      data.page,
                      data.page + 2
                    )
                  )}
                  <li>...</li>
                  {mapPaginationItems(
                    Array.from(Array(paginationEnd - 1).keys()).slice(-2)
                  )}
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
          {paginationEnd === data.page ? (
            <span>{paginationEnd}</span>
          ) : (
            paginationEnd
          )}
        </a>
      </li>
      <li>
        <a
          href={`/search?page=${
            data.page === paginationEnd ? paginationEnd : data.page + 1
          }`}
          onClick={(e) =>
            handleRedirect(
              e,
              data.page === paginationEnd ? paginationEnd : data.page + 1
            )
          }
        >
          <img src={right} alt="right arrow" />
        </a>
      </li>
    </ul>
  );
};
