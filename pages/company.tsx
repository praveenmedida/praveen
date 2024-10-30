import { useEffect, useState } from "react";
import { company } from "../src/newfile";
const Company = () => {
  const [companyDetails, setCompanyDetails] = useState<company[]>([]);

  useEffect(() => {
    const fetchFunction = async () => {
      const request = await fetch("api", Option);
      const response = request.json();
    };
    fetchFunction();
  }, []);

  return <div></div>;
};
