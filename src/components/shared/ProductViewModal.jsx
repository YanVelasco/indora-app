import { Dialog, DialogBackdrop, Transition, DialogTitle, DialogPanel, TransitionChild, Button } from '@headlessui/react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@mui/material';
import { MdClose, MdDone } from 'react-icons/md';
import Status from './Status';

function ProductViewModal({ isOpen, onClose, product, isAvailable }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle transition-all">
                <div >
                  <div className='w-full overflow-hidden aspect-[3/2] relative' >
                    <img className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" src={product.image} alt={product.name} />
                  </div>
                  <div className='p-6 flex flex-col gap-4'>
                    <DialogTitle
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 break-all"
                    >
                      {product.name}
                    </DialogTitle>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        {product.price ? (
                          <div className='flex flex-col gap-0.5'>
                            <span className="text-lg font-semibold line-through text-gray-700">${product.price.toFixed(2)}</span>
                            <span className="text-xl font-bold text-red-600">${product.specialPrice.toFixed(2)}</span>
                          </div>
                        ) : (
                          <span className="text-xl font-semibold text-gray-800">${product.price.toFixed(2)}</span>
                        )}
                      </div>
                      <div>
                        {isAvailable ? (
                          <Status
                            text="In Stock"
                            icon={MdDone}
                            color="text-teal-900"
                            bg="bg-teal-200"
                          />
                        ) : (
                          <Status
                            text="Out of Stock"
                            icon={MdClose}
                            color="text-rose-700"
                            bg="bg-rose-200"
                          />
                        )}
                      </div>
                    </div>
                    <Divider />

                    <div className='min-h-20 max-h-20'>
                      <p className="text-gray-600 text-sm mt-2 flex-grow break-all ">{product.description}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                      <Button className="w-22 rounded-lg justify-end py-3 text-white font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer" onClick={onClose}>
                        Close
                      </Button>
                    </div>
                  </div>

                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

ProductViewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
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
  isAvailable: PropTypes.bool.isRequired,
};

export default ProductViewModal;