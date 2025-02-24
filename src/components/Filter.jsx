import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import { useState } from 'react';
import { FiArrowUp, FiRefreshCcw, FiSearch } from 'react-icons/fi';

export const Filter = () => {
    const categories = [
        { categoryId: 1, categoryIName: 'Electronics' },
        { categoryId: 2, categoryIName: 'Books' },
        { categoryId: 3, categoryIName: 'Men\'s Clothing' },
        { categoryId: 4, categoryIName: 'Women\'s Clothing' }
    ];

    const [category, setCategory] = useState('all');


    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className='flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center items-center gap-4 justify-center'>
            <div className='relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full'>
                <input
                    type="text"
                    placeholder='Search Products'
                    className='border border-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 w-full text-slate-800'
                />
                <FiSearch className='absolute left-3 text-slate-800 size-5' />
            </div>

            <div className='flex sm:flex-row flex-col items-center gap-4'>
                <FormControl variant='outlined' size='small' className='text-slate-800 border-slate-700'>
                    <InputLabel htmlFor='category' id='category-select-label' >
                        Category
                    </InputLabel>
                    <Select
                        labelId='category-select-label'
                        value={category}
                        onChange={handleCategoryChange}
                        label='Category'
                        className='min-w-[120px] text-slate-800 border-slate-700'
                    >
                        <MenuItem value='all'>All</MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category.categoryId} value={category.categoryIName}>
                                {category.categoryIName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Tooltip title='sorted by price'>
                    <Button variant='contained' color='primary' size='small' className='flex items-center gap-2 h-10'>
                        Sort by
                        <FiArrowUp size={20} />
                    </Button>
                </Tooltip>
                <button className='flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 hover:bg-rose-800 shadow-md focus:outline-none cursor-pointer'>
                    <FiRefreshCcw size={20} />
                    <span className='font-semibold'>Clear filter</span>
                </button>
            </div>
        </div>
    );

};