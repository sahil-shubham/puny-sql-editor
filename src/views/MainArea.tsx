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
  setSelectedTable,
  showQueryRunner,
}: {
  tableName: string;
  setSelectedTable: (e: string) => void;
  showQueryRunner: boolean;
}) {
  const [data, setData] = useState<Product[] | Shipper[] | Supplier[]>([]);
  const [query, setQuery] = useState(`SELECT * FROM ${tableName} ;`);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function punyQueryParser(qString: string) {
      let matches = qString.match(
        /select\s+(.*)\sfrom\s(.*)\s(where (.*)=(.*))?\s*;/i
      );

      try {
        if (matches !== null) {
          let response;

          // Check if a "WHERE" clause has been used or not
          if (matches[3] === undefined) {
            response = await supabase.from(matches[2]).select(matches[1]);
          } else {
            response = await supabase
              .from(matches[2])
              .select(matches[1])
              .eq(matches[4], matches[5]);
          }

          setLoading(true);
          setSelectedTable(matches[2]);

          if (response.data) {
            setData(response.data);
          }
        }
      } catch (error) {
        console.log("error", error);
      }
      setLoading(false);
    }

    punyQueryParser(query);
  }, [query]);

  useEffect(() => {
    setQuery(`SELECT * FROM ${tableName} ;`);
  }, [tableName]);

  return (
    <Container>
      <Title> Dashboard </Title>
      <Heading> {tableName} table </Heading>

      <DataTable data={data} />
      <QueryRunner
        show={showQueryRunner}
        query={query}
        setQuery={setQuery}
        loading={loading}
      />
    </Container>
  );
}

export default MainArea;
