import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button, Card, CardContent } from '@mui/material';


export function Product({ product }) {

  return (
    <Card className="product-container">
      
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-item">
      <CardContent>
        <p className="product-name">{product.name}</p>
        <p>{product.duration} <span>{product.price}</span></p>
      </CardContent>

        <div className="product-but">
        <Button variant="contained" color="secondary" className="product-button"><ShoppingCartCheckoutIcon/> Add to Cart</Button>
        </div>
      </div>
    </Card>
  );
}
