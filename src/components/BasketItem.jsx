import { useContext } from "react";
import { ShopContext } from "../context";


function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity
  } = props;

    const {removeFromBasket, incQuantity, decQuantity}  = useContext(ShopContext)


  return(
    <li  className="collection-item" id={id}>
      {name} <i onClick={() => decQuantity(id)} className="material-icons basket-quantity">remove</i> x {quantity}{' '}<i onClick={() => incQuantity(id)}  className="material-icons basket-quantity">add</i>  = {price * quantity}руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">
          close
        </i>
      </span>
    </li>
  )
}
export {BasketItem}