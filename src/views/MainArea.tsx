import React, { useEffect, useState } from "react";
import supabase from "../components/supabase";
import { Product } from "../types";

function MainArea() {
  const [table, setTable] = useState<Product[]>([]);

  useEffect(() => {
    async function getTable() {
      try {
        const { data } = await supabase.from("products").select();

        if (data) {
          setTable(data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    getTable();
  }, []);

  return <h1>Hello, World!</h1>;
}

export default MainArea;
