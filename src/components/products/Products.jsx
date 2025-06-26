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
    {
        id: '9',
        name: 'Cyberpunk 2077',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
        description: 'Explore Night City em um RPG futurista de mundo aberto com visual cyberpunk.',
        quantity: 6,
        price: 199.99,
        discount: 55,
        specialPrice: 89.99,
    },
    {
        id: '10',
        name: 'Disco Elysium',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/632470/header.jpg',
        description: 'Um RPG inovador focado em narrativa e escolhas profundas.',
        quantity: 9,
        price: 99.99,
        discount: 40,
        specialPrice: 59.99,
    },
    {
        id: '11',
        name: 'DOOM Eternal',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg',
        description: 'Ação frenética e combate intenso no clássico shooter em primeira pessoa.',
        quantity: 7,
        price: 159.99,
        discount: 50,
        specialPrice: 79.99,
    },
    {
        id: '12',
        name: 'Cuphead',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg',
        description: 'Um run-and-gun com visual de desenho animado dos anos 30 e dificuldade elevada.',
        quantity: 11,
        price: 49.99,
        discount: 20,
        specialPrice: 39.99,
    },
    {
        id: '13',
        name: 'Ori and the Will of the Wisps',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg',
        description: 'Uma aventura visualmente deslumbrante e emocionante em um metroidvania premiado.',
        quantity: 10,
        price: 79.99,
        discount: 35,
        specialPrice: 51.99,
    },
    {
        id: '14',
        name: 'Dark Souls III',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg',
        description: 'Desafie-se em batalhas épicas e ambientes sombrios neste RPG de ação.',
        quantity: 5,
        price: 129.99,
        discount: 60,
        specialPrice: 51.99,
    },
    {
        id: '15',
        name: 'Slay the Spire',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg',
        description: 'Misture cartas e estratégia em um roguelike viciante.',
        quantity: 13,
        price: 49.99,
        discount: 30,
        specialPrice: 34.99,
    },
    {
        id: '16',
        name: 'It Takes Two',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg',
        description: 'Uma aventura cooperativa premiada para dois jogadores.',
        quantity: 8,
        price: 119.99,
        discount: 50,
        specialPrice: 59.99,
    },
    {
        id: '17',
        name: 'Persona 5 Royal',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/header.jpg',
        description: 'Viva a vida de estudante e lute contra a corrupção em Tóquio neste JRPG aclamado.',
        quantity: 6,
        price: 249.99,
        discount: 60,
        specialPrice: 99.99,
    },
    {
        id: '18',
        name: 'Baldur’s Gate 3',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
        description: 'Um RPG de fantasia épico baseado em Dungeons & Dragons.',
        quantity: 7,
        price: 299.99,
        discount: 40,
        specialPrice: 179.99,
    },
    {
        id: '19',
        name: 'The Legend of Heroes: Trails of Cold Steel IV',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1198090/header.jpg',
        description: 'O capítulo final de uma saga épica de JRPG.',
        quantity: 4,
        price: 199.99,
        discount: 50,
        specialPrice: 99.99,
    },
    {
        id: '20',
        name: 'Monster Hunter: World',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg',
        description: 'Cace monstros gigantes em um mundo vibrante e expansivo.',
        quantity: 9,
        price: 159.99,
        discount: 60,
        specialPrice: 63.99,
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