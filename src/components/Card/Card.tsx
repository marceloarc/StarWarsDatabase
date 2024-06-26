import Image from 'next/image';
import { StaticImageData } from '../../../node_modules/next/image';
type Props = {
    title: string;
    image: string;
    description: string;
};
export function Card(props: Props) {

    return (
        <div className="p-4 sm:w-1/2 lg:w-1/4">
            <div className="card bg-zinc-800/75 shadow-xl">
                <figure>
                    <Image
                        src={props.image}
                        alt="card image"
                        width="0"
                        height="0"
                        style={{ width: '100%', height: 500, objectFit: "cover" }}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                </div>
            </div>
        </div>
    );

}