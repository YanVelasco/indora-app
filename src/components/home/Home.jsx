
import { Banner } from "./Banner";
import ProductCart from '../shared/ProductCart';


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

export const Home = () => {
    return (
        <div className="lgh:px-20 md:px-10 sm:px-5 px-2">
            <div className="py-6">
                <Banner />
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold text-slate-800 py-6 text-center">
                    <span>
                        Descubra nossa seleção de jogos indies e AAA, escolhidos especialmente para você!
                    </span>
                </h1>
            </div>
            <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {mockProducts.map((product) =>
                    <ProductCart key={product.id} product={product} />
                )}
            </div>
        </div>
    );
}