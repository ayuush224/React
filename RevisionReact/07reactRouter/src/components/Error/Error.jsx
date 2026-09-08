import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Error(){
    const error = useRouteError();
    return (
        <>
            <Header />
            <div className='bg-[#212121] text-white'>
                <h1 className='text-3xl font-bold text-center py-4'>
                    An Error occured in your current Page loading
                </h1>
                <h2 className='text-xl font-medium text-red-500 text-center py-4'>
                    {error?.message}
                </h2>
            </div>
            <Footer />
        </>
    )
}