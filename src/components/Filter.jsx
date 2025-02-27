import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { FiArrowDown, FiArrowUp, FiRefreshCcw, FiSearch } from 'react-icons/fi';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const Filter = ({ categories }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathName = location.pathname;

    const [category, setCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const currentCategory = params.get('category') || 'all';
        const currentSortOrder = params.get('sortBy') || 'asc';
        const currentSearchTerm = params.get('keyword') || '';
        setCategory(currentCategory);
        setSortOrder(currentSortOrder);
        setSearchTerm(currentSearchTerm);
    }, [searchParams]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if (selectedCategory === 'all') {
            params.delete('category');
        } else {
            params.set('category', selectedCategory);
        }
        navigate(`${pathName}?${params.toString()}`);
        setCategory(selectedCategory);
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => {
            const newOrder = prevOrder === 'asc' ? 'desc' : 'asc';
            params.set('sortBy', newOrder);
            navigate(`${pathName}?${params.toString()}`);
            return newOrder;
        });
    };

    const handleCleanFilters = () => {
        navigate(`${pathName}`);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchTerm) {
                params.set('keyword', searchTerm);
            } else {
                params.delete('keyword');
            }
            navigate(`${pathName}?${params.toString()}`);
        }, 700);

        return () => clearTimeout(handler);
    }, [searchTerm, navigate, pathName]);

    return (
        <div className='flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center items-center gap-4 justify-center'>
            <div className='relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full'>
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder='Search Products'
                    className='border border-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 w-full text-slate-800'
                />
                <FiSearch className='absolute left-3 text-slate-800 size-5' />
            </div>

            <div className='flex sm:flex-row flex-col items-center gap-4'>
                <FormControl variant='outlined' size='small' className='text-slate-800 border-slate-700'>
                    <InputLabel htmlFor='category' id='category-select-label'>
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
                            <MenuItem key={category.id} value={category.name}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Tooltip title='sorted by price'>
                    <Button variant='contained' color='primary' size='small' className='flex items-center gap-2 h-10' onClick={toggleSortOrder}>
                        Sort by
                        {sortOrder === 'asc' ? (
                            <FiArrowUp size={20} />
                        ) : (
                            <FiArrowDown size={20} />
                        )}
                    </Button>
                </Tooltip>

                <button className='flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 hover:bg-rose-800 shadow-md focus:outline-none cursor-pointer' onClick={handleCleanFilters}>
                    <FiRefreshCcw size={20} />
                    <span className='font-semibold'>Clear filter</span>
                </button>
            </div>
        </div>
    );
};