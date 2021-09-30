import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Product, Shipper, Supplier } from "../types";

//-----------Styled Components------------------

const Table = styled.table`
  background-color: ${(props) => props.theme.sidebar.backgroundColor};
  border-radius: 10px;

  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const HeaderContainer = styled.thead`
  background-color: ${(props) => props.theme.sidebar.themeSwitcherBackground};
  color: ${(props) => props.theme.table.headerColor};

  tr {
    th {
      padding: 0.5rem;
    }
  }
`;

const BodyContainer = styled.tbody`
  padding: 1rem;

  tr {
    td {
      padding: 0.5rem;
    }
    &:nth-of-type(even) {
      background-color: ${(props) => props.theme.sidebar.hoverBackground};
    }
  }
`;

//==============================================

function DataTable({ data }: { data: Product[] | Shipper[] | Supplier[] }) {
  const [columns, setColumns] = useState("");
  const [rows, setRows] = useState("");

  useEffect(() => {
    var header = "";
    var body = "";

    // TODO: the following html string doesn't contain styled components classnames
    Object.keys(data[0] || []).map((key) => {
      header += `<th> ${key} </th>`;
    });

    data.forEach((item) => {
      body += "<tr>";
      Object.values(item).map((value) => {
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
