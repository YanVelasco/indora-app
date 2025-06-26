import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ProductViewModal from './ProductViewModal';
import { truncateText } from '../../util/truncateText';

const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const ProductCart = ({ product }) => {

    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const [selectedProductViewModal, setSelectedProductViewModal] = useState(null);
    const btnLoader = false;
    const isAvailable = product.quantity > 0;

    const handleProductViewModal = (product) => {
        setSelectedProductViewModal(product);
        setOpenProductViewModal(true);
    }

    // Adiciona o produto ao carrinho no localStorage
    const [showCartModal, setShowCartModal] = useState(false);
    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem("indora-cart")) || [];
        cart.push({
            id: product.id,
            title: product.name,
            image: product.image,
            specialPrice: product.specialPrice
        });
        localStorage.setItem("indora-cart", JSON.stringify(cart));
        setShowCartModal(true);
        setTimeout(() => setShowCartModal(false), 1800);
    }

    return (
        <div className="h-full relative">
            {/* Modal de produto adicionado ao carrinho */}
            {showCartModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-[#18132a] border-4 border-[#00fff7] rounded-2xl shadow-[0_0_30px_8px_#00fff7,0_0_60px_12px_#ff00ea44] px-8 py-6 flex flex-col items-center animate-pulse" style={{minWidth: 260, maxWidth: 340}}>
                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#00fff7" opacity="0.2"/><path d="M7 13l3 3 7-7" stroke="#00fff7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="#ff00ea" strokeWidth="2"/></svg>
                        <h3 className="text-lg font-extrabold text-[#00fff7] mt-2 mb-1 drop-shadow-[0_0_8px_#00fff7]">Produto adicionado!</h3>
                        <p className="text-pink-400 text-base text-center">O produto foi adicionado ao carrinho.</p>
                    </div>
                </div>
            )}
            <motion.div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow-lg hover:shadow-xl h-full flex-col"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div onClick={() => handleProductViewModal(product)} className='w-full overflow-hidden aspect-[3/2] relative'>
                    <img className="cursor-pointer w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 break-all" src={product.image} alt={truncateText(product.name, 20)} />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800 break-all">{truncateText(product.name, 40)}</h2>
                    <div className='min-h-20 max-h-20 overflow-hidden'>
                        <p className="text-gray-600 text-sm mt-2 flex-grow break-all">{truncateText(product.description, 70)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center justify-between">
                            {product.price ? (
                                <div className='flex flex-col gap-0.5'>
                                    <span className="text-lg font-semibold line-through text-gray-700">${product.price.toFixed(2)}</span>
                                    <span className="text-xl font-bold text-red-600">${product.specialPrice.toFixed(2)}</span>
                                </div>
                            ) : (
                                <span className="text-xl font-semibold text-gray-800">${product.price.toFixed(2)}</span>
                            )}
                        </div>
                        <button
                            className={`px-4 py-2 text-white font-semibold rounded-lg ${isAvailable ? "bg-blue-500 hover:bg-blue-600 cursor-pointer" : "bg-red-400 opacity-75 cursor-not-allowed"}`}
                            disabled={!isAvailable || btnLoader}
                            onClick={isAvailable ? handleAddToCart : undefined}
                        >
                            <div className='flex items-center justify-center'>
                                <FaShoppingCart className="inline-block mr-2" />
                                {isAvailable ? "Add to Cart" : "Out of Stock"}
                            </div>
                        </button>
                    </div>
                </div>
            </motion.div>
            {selectedProductViewModal && (
                <ProductViewModal
                    isOpen={openProductViewModal}
                    onClose={() => setOpenProductViewModal(false)}
                    product={selectedProductViewModal}
                    isAvailable={isAvailable}
                />
            )}
        </div>
    );
}

ProductCart.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        specialPrice: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCart;