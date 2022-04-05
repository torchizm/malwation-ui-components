import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import style from "./Table.module.css";

export type TableOptions = {
  tableStyle?: CSSProperties;
  thStyle?: CSSProperties;
  tdStyle?: CSSProperties;
  trStyle?: CSSProperties;
};

interface Props {
  id?: string;
  onSelect?: React.MouseEventHandler<HTMLDivElement>;
  header?: any[];
  data?: any[][];
  ["data-type"]?: string;
  options?: TableOptions;
}

const Table: FunctionComponent<Props> = (props) => {
  const [headerList, setHeaderList] = useState<any[]>(
    props.header !== undefined ? props.header : []
  );

  const [dataList, setDataList] = useState<any[]>(
    props.data !== undefined ? props.data : []
  );

  useEffect(() => {
    setHeaderList(props.header !== undefined ? props.header : []);
    setDataList(props.data !== undefined ? props.data : []);
  }, [props.header, props.data]);

  return (
    <table
      data-type={props["data-type"]}
      className={style.table}
      style={props.options?.tableStyle}
    >
      <thead>
        <tr>
          {headerList.map((header, index) => (
            <th key={index.toString()} style={props.options?.thStyle}>
              <span>{header}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList.map((data, index) => {
          return (
            <tr key={index.toString()} style={props.options?.trStyle}>
              {data.map((row: any, index: number) => {
                return (
                  <td key={index.toString()} style={props.options?.tdStyle}>
                    {row}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.defaultProps = {
  "data-type": "custom-table",
};

export default Table;
