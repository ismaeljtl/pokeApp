import { useEffect, useState } from "react";
import { IPokemon } from "@/state/pokemon/pokemon.types";

export const usePagination = (data: IPokemon[]) => {
  const itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const [currentItems, setCurrentItems] = useState(
    data && data.slice(itemOffset, endOffset)
  );
  const [pageCount, setPageCount] = useState(
    data && Math.ceil(data.length / itemsPerPage)
  );
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handlePageClick = (event: { selected: number }) => {
    const pageIndex = event.selected;
    const newOffset = data && (pageIndex * itemsPerPage) % data.length;
    setItemOffset(newOffset!);
  };

  useEffect(() => {
    filteredData && setCurrentItems(filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
  }, [itemOffset, filteredData]);

  const filterPagination = (value: string) => {
    if (data && data.length !== 0) {
      if (value === "") {
        setFilteredData(data);
        setPageCount(Math.ceil(data.length / itemsPerPage));
      } else {
        const filtered = data
          .filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
          })
          .sort();
        setFilteredData(filtered);
        setPageCount(Math.ceil(filtered.length / itemsPerPage));
        setItemOffset(0);
      }
    }
  };

  return {
    handlePageClick,
    filterPagination,
    pageCount,
    itemOffset,
    itemsPerPage,
    currentItems,
  };
};
