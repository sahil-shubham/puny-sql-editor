import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../types";

//-----------Styled Components------------------

const Table = styled.table``;

const HeaderContainer = styled.thead``;

const Header = styled.th``;

const BodyContainer = styled.tbody``;

const Row = styled.tr``;

const Cell = styled.td``;

//==============================================

function DataTable({ data }: { data: Product[] }) {
  const [columns, setColumns] = useState("");
  const [rows, setRows] = useState("");

  useEffect(() => {
    var header = "";
    var body = "";

    Object.keys(data[0] || []).map((key, value) => {
      header += `<th> ${key} </th>`;
    });

    data.forEach((item) => {
      body += "<tr>";
      Object.keys(item).map((key, value) => {
        body += `<td> ${value} </td>`;
      });
      body += "</tr>";
    });

    setColumns(header);
    setRows(body);
  }, [data]);

  return (
    <Table>
      <HeaderContainer
        dangerouslySetInnerHTML={{ __html: columns }}
      ></HeaderContainer>

      <BodyContainer dangerouslySetInnerHTML={{ __html: rows }}></BodyContainer>
    </Table>
  );
}

export default DataTable;
