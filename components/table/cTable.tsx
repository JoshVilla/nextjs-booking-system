import React, { useEffect, useState } from "react";
import SearchForm from "../searchForm/searchForm";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import NoData from "../nodata/noData";
import { Loader2 } from "lucide-react";
interface IColumn {
  key: string;
  param: string;
  label: string;
}

interface CTableProps<T> {
  columns: IColumn[];
  searchProps: any;
  api: (params?: any) => Promise<{ data: T[] }>;
  lastColumn: (record: T) => React.ReactNode | undefined;
  getData: (data: T[]) => void;
}

const CTable: React.FC<any> = ({
  columns,
  searchProps,
  api,
  lastColumn,
  getData,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [newColumns, setNewColumns] = useState<IColumn[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api();
      if (response.data) {
        setLoading(false);
        setData(response.data);
        getData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    //if action was use at props, add action column
    //@ts-ignore
    if (lastColumn) {
      setNewColumns([
        ...columns,
        { label: "Action", key: "action", param: "" },
      ]);
    }
  }, []);
  return (
    <div className="mt-10 w-full">
      {searchProps && (
        <SearchForm searchProps={searchProps} api={api} result={setData} />
      )}

      <Table>
        <TableHeader>
          <TableRow>
            {newColumns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              {newColumns.map((column) => {
                if (column.key === "action") {
                  return (
                    <TableCell key={column.key}>{lastColumn(item)}</TableCell>
                  );
                }
                return (
                  <TableCell key={column.key}>{item[column.param]}</TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loading && data.length === 0 && (
        <div className="flex justify-center items-center mt-10 h-full">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      )}
      {data.length === 0 && !loading && (
        <div className="flex justify-center items-center h-full">
          <NoData />
        </div>
      )}
    </div>
  );
};

export default CTable;
//
