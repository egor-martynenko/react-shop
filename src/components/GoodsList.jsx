import { useContext } from "react"
import { GoodsItem } from "./GoodsItem"
import { ShopContext } from "../context"

function GoodsList() {
  const {goods = []} = useContext(ShopContext)

  if(!goods.length){
    return <h3>Nothing here</h3>
  }

  return <div className="goods">
    {
    goods.slice(0, 10).map(item => (
      <GoodsItem key={item.id} {...item} />
    ))}
  </div>
}

export { GoodsList }

