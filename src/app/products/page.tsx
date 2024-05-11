import {Products} from '../../components/Product/Products';
import logo from '../../../public/images/logo.png';

export default function Product() {
   
    return (<div className="container mx-auto -m-4">
                <div className="flex flex-col container mx-auto mb-10">
                    <div className="divider divider-start divider-accent container">PRODUTOS</div>
                </div>
                <Products/>
            </div>
    )
}