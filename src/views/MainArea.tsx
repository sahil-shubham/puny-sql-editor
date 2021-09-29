import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QueryRunner from "../components/QueryRunner";
import supabase from "../components/supabase";
import DataTable from "../shared/DataTable";
import { Heading, Title } from "../shared/Typography";
import { Product, Shipper, Supplier } from "../types";

//-----------------Styled Components--------------------

const Container = styled.div`
  margin: 1rem;
`;

//======================================================

function MainArea({
  tableName,
  showQueryRunner,
}: {
  tableName: string;
  showQueryRunner: boolean;
}) {
  const [data, setData] = useState<Product[] | Shipper[] | Supplier[]>([]);

  useEffect(() => {
    async function getTable() {
      try {
        const { data } = await supabase.from(tableName).select("*");

        if (data) {
          setData(data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    getTable();
  }, [tableName]);

  return (
    <Container>
      <Title> Dashboard </Title>
      <Heading> {tableName} table </Heading>

      <DataTable data={data} />
      {showQueryRunner && <QueryRunner />}
    </Container>
  );
}

export default MainArea;
