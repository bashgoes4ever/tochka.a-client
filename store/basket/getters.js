export default {
  basket: state => state.basket,
  totalPrice: state => state.basket.reduce((acc, item) => {
    return acc + item.product.price * item.quantity
  }, 0),
  totalDiscount: state => state.basket.reduce((acc, item) => {
    return item.product.old_price ? acc + (item.product.old_price - item.product.price) * item.quantity : acc
  }, 0),
  totalProducts: state => state.basket.length,
  hourRate: state => state.basket.length > 0 ? state.basket[0].product.hour_rate : false
}
