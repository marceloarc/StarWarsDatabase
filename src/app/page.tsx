import banner1 from '../../public/images/banner1.jpeg';
import banner2 from '../../public/images/banner2.jpeg';
import Image from 'next/image';
export default function Home() {

    return (
        <div className=' w-full'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image
                        src={banner2}
                        alt="banner2"

                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="divider divider-success mt-20 text-lg mb-10">Últimas Noticias</div>
            <div className="flex flex-wrap justify-center -m-4 items-stretch mx-auto">
                <div className="max-w-md bg-white  mx-5 my-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-mothers-day-gift-guide-collage_tall-ratios-bl_066dd47c.jpeg?region=0%2C0%2C1536%2C864" alt="" />
                    </a>
                    <div className="p-5 bg-zinc-800/75">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Star Wars Mother's Day Gift Guide 2024</h5>
                        </a>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800">
                            Ler mais
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-md bg-white mx-5 my-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://lumiere-a.akamaihd.net/v1/images/quiz-barriss-offee-or-morgan-elsbeth_article-feature_4a395190.jpeg?region=0%2C0%2C1600%2C900" alt="" />
                    </a>
                    <div className="p-5 bg-zinc-800/75">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quiz: Are You More Barriss Offee or Morgan Elsbeth?</h5>
                        </a>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800">
                            Ler mais
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-md bg-white mx-5 my-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-mothers-day-gift-guide-collage_tall-ratios-bl_066dd47c.jpeg?region=0%2C0%2C1536%2C864" alt="" />
                    </a>
                    <div className="p-5 bg-zinc-800/75">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Star Wars Mother's Day Gift Guide 2024</h5>
                        </a>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800">
                            Ler mais
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="divider divider-error mt-20 text-lg mb-5">Últimos Videos</div>
            <div className="flex flex-wrap justify-center pb-10">
                <div className="max-w-md  bg-white mx-5 my-5 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700">
                    <a href="#">
                        <img className="thumb" alt="Teaser Trailer | LEGO Star Wars: Rebuild the Galaxy" data-src="https://lumiere-a.akamaihd.net/v1/images/image_71c7f04d.jpeg?region=0,0,1920,1080" data-width="1920" data-height="1080" data-aspect_ratio="0.5625" data-orientation="landscape" data-legacy="true" src="https://lumiere-a.akamaihd.net/v1/images/image_71c7f04d.jpeg?region=0,0,1920,1080&amp;width=480" />
                    </a>
                    <div className="p-5 bg-zinc-800/75">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Teaser Trailer | LEGO Star Wars: Rebuild the Galaxy</h5>
                        </a>

                    </div>
                </div>
                <div className=" bg-zinc-800/75 max-w-md bg-white mx-5 my-5 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700">
                    <a href="#">
                        <img className="thumb" alt="Now THIS is a Star Wars Day Roundup! | This Week! in Star Wars Dispatch thumbnail" data-src="https://lumiere-a.akamaihd.net/v1/images/062_twdisp_mt4roundup_thumb_16x9_dcom_39edc181.jpeg?region=0,0,1920,1080" data-width="1920" data-height="1080" data-aspect_ratio="0.5625" data-orientation="landscape" data-legacy="true" src="https://lumiere-a.akamaihd.net/v1/images/062_twdisp_mt4roundup_thumb_16x9_dcom_39edc181.jpeg?region=0,0,1920,1080&amp;width=480" />
                    </a>
                    <div className="p-5 bg-zinc-800/75">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Now THIS is a Star Wars Day Roundup! | This Week! in Star Wars Dispatch</h5>
                        </a>

                    </div>
                </div>
                <div className="max-w-md bg-white mx-5 my-5 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700">
                    <a href="#">
                        <img className="thumb" alt="Official Trailer | The Acolyte thumbnail" data-src="https://lumiere-a.akamaihd.net/v1/images/image_88b6e151.jpeg?region=0%2C0%2C1920%2C1080" data-legacy="true" src="https://lumiere-a.akamaihd.net/v1/images/image_88b6e151.jpeg?region=0%2C0%2C1920%2C1080" />
                    </a>
                    <div className="p-5 bg-zinc-800/75">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Official Trailer | The Acolyte</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}