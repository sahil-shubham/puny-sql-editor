import React, { useEffect, useState } from "react";
import QueryRunner from "../components/QueryRunner";
import supabase from "../components/supabase";
import DataTable from "../shared/DataTable";
import { Product, Shipper, Supplier } from "../types";

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
    <div>
      <DataTable data={data} />
      {showQueryRunner && <QueryRunner />}
    </div>
  );
}

export default MainArea;
