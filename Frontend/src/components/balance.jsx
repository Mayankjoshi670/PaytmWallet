import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Balance = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = `Bearer ${localStorage.getItem('token')}`;
        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            'Authorization': token
          }
        });
        if (response.data.balance === '') {
          navigate('/signup');
        } else {
          const rupee = parseFloat(response.data.balance);
          const money = rupee.toFixed(2);
          setBalance(money);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
        navigate('/signup');
      }
    };
    fetchData();
  }, []); // Run useEffect only once on component mount
  return (
    <>
      {balance}
    </>
  );
};
