import React from 'react';
import DataTable from 'react-data-table-component';

const Table = ({columns, data}) => {
  return (
    <div className="datatable">
      <DataTable columns={columns} data={data} className="custom-data-table" />
    </div>
  );
};

export default Table;
