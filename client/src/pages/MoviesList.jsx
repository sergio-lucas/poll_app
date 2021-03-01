/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useState, useEffect,
} from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";
import styled from "styled-components";
import { getAllMovies } from "../api";


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
`;

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
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render("Cell")}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.isRequired,
  data: PropTypes.isRequired,
};

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadAsyncData = async () => {
    setLoading(true);
    const moviesData = await getAllMovies();

    setMovies(moviesData.data.data);
    setLoading(false);
  };

  useEffect(() => {
    loadAsyncData();
  }, []);


  const columns = [
    {
      Header: "ID",
      accessor: "_id",
      filterable: true,
    },
    {
      Header: "Name",
      accessor: "name",
      filterable: true,
    },
    {
      Header: "Time",
      accessor: "dates",
      // eslint-disable-next-line react/prop-types
      Cell: ({ value }) => <span>{value.join(" / ")}</span>,
    },
  ];

  const showTable = true;
  // if (!movies.length) {
  //     showTable = false
  // }
  // const tableInstance = useTable({ columns, data: movies })

  return (
    <Styles>
      {showTable && !isLoading && <Table columns={columns} data={movies} />}
    </Styles>
  );
}

export default MoviesList;

