import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  return <div className={classes.order}>{props.children}</div>;
};

export default OrderItem;