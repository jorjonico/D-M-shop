import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart3 } from 'react-bootstrap-icons';
import Badge from "react-bootstrap/Badge";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <Button variant="light" as={Link} to={`/cart`}>
        <Cart3 className='card-ico'/> <Badge bg="danger">2</Badge>
        <span className="visually-hidden">unread messages</span>
        </Button>
    );
}
export default CartWidget;