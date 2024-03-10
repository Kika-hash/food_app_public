import { useEffect, useState } from "react";
import Orders from "../components/Admin/OrdersList";
import useHttp from "../hooks/use-http";


const Admin = () => {
  const [orders, setOrders] = useState([]);
  const { isLoading, error, sendRequest: fetchOrders } = useHttp();

  useEffect(() => {
    const transformOrders = (orderObj) => {
      const loadedOrders = [];
    
      for (const orderKey in orderObj) {
        const loadedOrderMeals = orderObj[orderKey].orderedItems.map(meal => ({
          id: meal.id,
          name: meal.name,
          amount: meal.amount,
          price: meal.price
        }));
    
        loadedOrders.push({
          id: orderKey,
          orderTime: orderObj[orderKey].orderTime,
          userName: orderObj[orderKey].user.name,
          postalCode: orderObj[orderKey].user.postalCode,
          city: orderObj[orderKey].user.city,
          street: orderObj[orderKey].user.street,
          orderedItems: loadedOrderMeals,
        });
      }
    
      setOrders(loadedOrders);
    };
    fetchOrders( 
      { url: "https://movies-c0212-default-rtdb.firebaseio.com/orders.json?orderBy=%22orderTime%22" },
      transformOrders
    );
  }, [fetchOrders]);


  return (

       <Orders
        items={orders}
        loading={isLoading}
        error={error}
        onFetch={fetchOrders}
      />
  );
};

export default Admin;
