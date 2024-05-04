import { GoodsItem } from "./GoodsItem"

function GoodsList(props) {
  const {goods = [], addToBasket = Function.prototype} = props

  if(!goods.length){
    return <h3>Nothing here</h3>
  }

  return <div className="goods">
    {
    goods.slice(0, 10).map(item => (
      // if(){
        
      // }
      <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
    ))}
  </div>
}

export { GoodsList }

