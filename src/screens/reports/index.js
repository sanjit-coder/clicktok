import React, {useState} from 'react';
import SideDrawer from 'components/SideDrawer';
import Table from 'components/Table';

const ReportAbuseManagement = () => {
  const [columns, setColumns] = useState([
    {
      name: 'Date',
      selector: row => row.date,
      format: row => <b>{row.date}</b>,
    },
    {
      name: 'Reason',
      selector: row => row.reason,
    },
    {
      name: 'Reported By',
      selector: row => row.reportedBy,
    },
    {
      name: 'Reported to',
      selector: row => row.reportedTo,
    },
  ]);
  const [data, setData] = useState([
    {
      id: 1,
      date: '22 June,2023',
      reason: 'Query Reason 1',
      reportedBy: 'Mohit',
      reportedTo: 'Sanjit',
    },
    {
      id: 2,
      date: '23 June,2023',
      reason: 'Query Reason 2',
      reportedBy: 'Sanjit',
      reportedTo: 'Brijesh',
    },
    {
      id: 3,
      date: '24 June,2023',
      reason: 'Query Reason 3',
      reportedBy: 'Brijesh',
      reportedTo: 'Mohit',
    },
    {
      id: 4,
      date: '25 June,2023',
      reason: 'Query Reason 4',
      reportedBy: 'Mohit',
      reportedTo: 'Rohit',
    },
  ]);
  return (
    <>
      <SideDrawer tabSelected="reports">
        <Table columns={columns} data={data} />
      </SideDrawer>
    </>
  );
};

export default ReportAbuseManagement;
