import React from 'react'
import { Fragment } from 'react'

const Table = ({data,config, keyFn}) => {

    const renderHeaders = config.map( (element)=> {
        if (element.header) {
            return <Fragment key={element.label}>{element.header()}</Fragment>;
        }
        return (
            <th key={element.label}>{element.label}</th>
        )
    } )

    

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map( (column) => {
            return <td className='p-2' key={column.label}>{column.render(rowData)}</td>
        } )
        return (
            <tr className='border-b' key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    })


  return (
    <table className='table-auto border-spacing-2'>
        <thead>
            <tr className='border-b-2'>
                {renderHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
  )
}

export default Table;