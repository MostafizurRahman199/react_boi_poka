import React, { useContext, useState } from 'react';
import { MyContext } from '../../utils/MyProvider';

export default function SortComponent({ readList, setReadList }) {
    const { handleSort } = useContext(MyContext);
    const [sortType, setSortType] = useState('Sort');

    const handleSortChange = (type) => {
        handleSort(type, readList, setReadList); // Perform the sorting
        setSortType(type); // Update the sort type state
    };

    return (
        <details className="dropdown">
            <summary className="btn m-1 bg-green-500 hover:bg-green-600 text-white">
                Sort by: {sortType}
            </summary>
            <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                    <a onClick={() => handleSortChange('No of pages')}>No of pages</a>
                </li>
                <li>
                    <a onClick={() => handleSortChange('Ratings')}>Ratings</a>
                </li>
                <li>
                    <a onClick={() => handleSortChange('Publish year')}>Publish year</a>
                </li>
            </ul>
        </details>
    );
}
