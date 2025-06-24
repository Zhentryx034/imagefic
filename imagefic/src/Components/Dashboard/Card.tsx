import React from 'react';
import { Link } from 'react-router-dom';

const Card: React.FC<{ img: string; title: string; link: string }> = ({ img, title, link }) => (
    <Link to={link} className='block overflow-hidden'>
        <img src={img} alt={title} className='w-[100%] h-68 object-cover rounded-lg shadow-md hover:scale-105' />
        <div className='p-4'>
            <h2 className='text-[26px] font-semibold text-gray-800'>{title}</h2>
        </div>
    </Link>
);

export default Card;