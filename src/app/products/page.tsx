import { Products } from '../../components/Product/Products';
import logo from '../../../public/images/logo.png';

export default function Product() {

    return (<div className="container mx-auto -m-4 py-20 mt-5">
        <div className="flex flex-col -m-4 mx-5 mb-10">
            <div className="divider divider-start divider-warning container">PRODUTOS</div>
        </div>
        <Products />
    </div>
    )
}