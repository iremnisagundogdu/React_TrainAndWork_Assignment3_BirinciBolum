const CartCoupon = () => {
  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input type="text" className="input-text" placeholder="Coupon code" />
        <button className="btn">Kupon Uygula</button>
      </div>
      <div className="update-cart">
        <button className="btn">Sepet Güncelle</button>
      </div>
    </div>
  );
};

export default CartCoupon;
