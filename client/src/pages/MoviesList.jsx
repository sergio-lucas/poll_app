import React, { useState, useEffect } from 'react'
import { useTable } from 'react-table'
import api from '../api'

import styled from 'styled-components'


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

function MoviesList() {

    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(false)

    const loadAsyncData = async () => {
        const movies = await api.getAllMovies()
        setMovies(movies.data.data)
        setLoading(false)
    }

    useEffect(() => {
    
        loadAsyncData();
        
    }, []);
    

    const columns = [
        {
            Header: 'ID',
            accessor: '_id',
            filterable: true,
        },
        {
            Header: 'Name',
            accessor: 'name',
            filterable: true,
        },
        {
            Header: 'Time',
            accessor: 'dates',
            Cell: props => <span>{props.value.join(' / ')}</span>,
        },
    ]

    let showTable = true
    // if (!movies.length) {
    //     showTable = false
    // }
    // const tableInstance = useTable({ columns, data: movies })

    return (
        <Styles>
            {showTable && <Table columns={columns} data={movies} />
            }
        </Styles>
    )
}

export default MoviesList

