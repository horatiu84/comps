import React from 'react'
import Table from './Table'
import { useState } from 'react';

const SortableTable = (props) => {
    const [sortOrder,setSortOrder] = useState(null);
    const [sortBy,setSortBy] = useState(null)

    const {config, data} = props;

    const handleClick = (label) => {
      if (sortOrder === null) {
        setSortOrder('asc');
        setSortBy(label);
      } else if (sortOrder === 'asc') {
        setSortOrder('desc');
        setSortBy(label);
      } else if (sortOrder === 'desc') {
        setSortOrder(null);
        setSortBy(null);
      }
    }

    const updatedConfig = config.map ((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th onClick={ () => handleClick(column.label)}>{column.label} IS SORTABLE</th>
        }
    })


    // we only sort date if sortOreder and sortBy are not null
    // Make a copy of the 'data' prop
    //Find the corect sortValue function and use it for sort

    let sortedData = data;
    if (sortOrder && sortBy) {
      console.log(sortBy,sortOrder)
     const {sortValue} =  config.find( (column) => column.label === sortBy )
      sortedData = [...data].sort((a,b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const reverseOrder = sortOrder === 'asc' ? 1 : -1;

        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else {
          return ( valueA - valueB ) * reverseOrder;
        }
    })
    console.log(sortedData);
    }

  return (
    <div>
      {sortOrder} - {sortBy}
      < Table {...props} data={sortedData}  config={updatedConfig}/>
    </div>
  )
}

export default SortableTable