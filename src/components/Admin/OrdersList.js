import OrderItem from "./OrderItem";
import classes from "./Orders.module.css";

const Orders = (props) => {
  let orderList = <h2 className={classes.orders}>Nie znaleziono zamówień</h2>;


  if (props.items.length > 0) {
    orderList = (
      <div className={classes.orders}>
        {props.items.map((order) => (
          <p key={order.id} className={classes.order}>
            <OrderItem>
             <div>Zamówienie z dnia: {order.orderTime}</div> 
             <div>Kupujący: {order.userName} </div> 
             <div>Adres: {order.postalCode} {order.city} {order.street} </div>
             <p>Produkty:</p>
              <ul>
                {order.orderedItems.map((meal) => (
                  <li key={meal.id}>
                    <div className={classes.order_details_meals}>{meal.amount} x {meal.name}</div>
                    <div className={classes.order_details_price}>Cena: {meal.price} USD / szt. Razem: {meal.amount * meal.price} USD</div>
                  </li>
                ))}
              </ul>
          </OrderItem>
          </p>
        ))}
      </div>
    );
  }

  let content = orderList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading orders...";
  }

  return (
    <section className={classes.Orders}>
      {content}
    </section>

  );
};
export default Orders;
