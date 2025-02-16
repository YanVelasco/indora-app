import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ProductViewModal from './ProductViewModal';

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

    return (
        <div className="h-full">
            <motion.div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow-lg hover:shadow-xl h-full flex-col"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div onClick={() => handleProductViewModal(product)} className='w-full overflow-hidden aspect-[3/2]' >
                    <img className="cursor-pointer w-full transition-transform duration-300 transform hover:scale-105" src={product.image} alt={product.name} />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                    <div className='min-h-20 max-h-20 overflow-hidden'>
                        <p className="text-gray-600 text-sm mt-2 flex-grow">{product.description}</p>
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
                        <button className={`px-4 py-2 text-white font-semibold rounded-lg ${isAvailable ? "bg-blue-500 hover:bg-blue-600 cursor-pointer" : "bg-red-400 opacity-75 cursor-not-allowed"}`} disabled={!isAvailable || btnLoader}>
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