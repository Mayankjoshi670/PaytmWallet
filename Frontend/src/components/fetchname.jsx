import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Name = () => {
  const navigate = useNavigate();
  const [name , setName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = `Bearer ${localStorage.getItem('token')}`;
        const response = await axios.get("http://localhost:3000/api/v1/account/name", {
          headers: {
            'Authorization': token
          }
        });
          const name = response.data.Name;
          setName(name.toUpperCase([]));
        
      } catch (error) {
        console.error("Error fetching name:", error);
      }
    };
    fetchData();
  }, []); // Run useEffect only once on component mount
  return (
    <div>
      {name}
    </div>
  );
};
