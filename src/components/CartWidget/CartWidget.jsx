import cartIcon from '../../assets/shopping_cart_icon.png';

function CartWidget () 
{
  return (
    <div>
      <img src={cartIcon} alt="Cart icon" />
      <span>3</span>
    </div>
  );
};

export default CartWidget;
