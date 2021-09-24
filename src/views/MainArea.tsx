import React, { useEffect, useState } from "react";
import supabase from "../components/supabase";
import DataTable from "../shared/DataTable";
import { Product } from "../types";

function MainArea() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function getTable() {
      try {
        const { data } = await supabase.from("products").select();

        if (data) {
          setData(data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    getTable();
  }, []);

  return (
    <div>
      <DataTable data={data} />
    </div>
  );
}

export default MainArea;
