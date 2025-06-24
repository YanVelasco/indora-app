import { FaExclamationTriangle } from 'react-icons/fa';
import ProductCard from '../shared/ProductCart';
import { useDispatch, useSelector } from 'react-redux';

import { Filter } from './Filter';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/actions';
import { Loader } from '../shared/Loader';
import { CustomPagination } from '../shared/CustomPagination';
import { useProductFilter } from '../hooks/userProductFilter';

// Mock de produtos (indies e AAA)
const mockProducts = [
    {
        id: '1',
        name: 'Hollow Knight',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg',
        description: 'Explore cavernas, cidades antigas e enfrente criaturas em um metroidvania indie aclamado.',
        quantity: 10,
        price: 59.99,
        discount: 30,
        specialPrice: 41.99,
    },
    {
        id: '2',
        name: 'Celeste',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg',
        description: 'Ajude Madeline a superar seus desafios internos em uma montanha cheia de plataformas precisas.',
        quantity: 7,
        price: 39.99,
        discount: 25,
        specialPrice: 29.99,
    },
    {
        id: '3',
        name: 'The Witcher 3: Wild Hunt',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
        description: 'Viva uma aventura épica em um mundo aberto como Geralt de Rívia, caçador de monstros.',
        quantity: 5,
        price: 149.99,
        discount: 50,
        specialPrice: 74.99,
    },
    {
        id: '4',
        name: 'Stardew Valley',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg',
        description: 'Construa sua fazenda, faça amigos e explore cavernas neste indie de simulação.',
        quantity: 12,
        price: 29.99,
        discount: 10,
        specialPrice: 26.99,
    },
    {
        id: '5',
        name: 'God of War',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg',
        description: 'Kratos retorna em uma jornada épica com seu filho Atreus em terras nórdicas.',
        quantity: 3,
        price: 199.99,
        discount: 40,
        specialPrice: 119.99,
    },
    {
        id: '6',
        name: 'Hades',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg',
        description: 'Escape do submundo neste premiado roguelike indie da Supergiant Games.',
        quantity: 8,
        price: 79.99,
        discount: 35,
        specialPrice: 51.99,
    },
    {
        id: '7',
        name: 'Red Dead Redemption 2',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
        description: 'Viva o Velho Oeste em um dos maiores AAA de mundo aberto já feitos.',
        quantity: 4,
        price: 249.99,
        discount: 60,
        specialPrice: 99.99,
    },
    {
        id: '8',
        name: 'Undertale',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg',
        description: 'Um RPG indie único onde suas escolhas realmente importam.',
        quantity: 15,
        price: 19.99,
        discount: 0,
        specialPrice: 19.99,
    },
];

const Products = () => {
    const { products, categories, pagination } = useSelector((state) => state.product);
    const { isLoading, errorMessage } = useSelector((state) => state.errors);
    const dispatch = useDispatch();

    useProductFilter();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            <Filter categories={categories || []} />
            {isLoading && (
                <Loader text={"Fetching products..."} />
            )}
            {!isLoading && errorMessage && (
                <div className="flex items-center justify-center h-screen">
                    <FaExclamationTriangle className="text-slate-800 text-4xl mr-2" />
                    <span className='text-slate-800 text-lg font-medium'>{errorMessage}</span>
                </div>
            )}
            {!isLoading && !errorMessage && (
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        {mockProducts.map((product) =>
                            <ProductCard key={product.id} product={product} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;