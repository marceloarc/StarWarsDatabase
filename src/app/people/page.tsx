import {Cards} from '../../components/Card/Cards';
import logo from '../../../public/images/logo.png';

export default function People() {
   
    return (<div className="container mx-auto">
                <div className="flex flex-col container mx-auto mb-10">
                    <div className="divider divider-start divider-secondary">PERSONAGENS</div>
                </div>
                <Cards/>
            </div>
    )
}