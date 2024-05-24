import DashboardIcon from '@mui/icons-material/Dashboard';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import InsightsIcon from '@mui/icons-material/Insights';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ReportIcon from '@mui/icons-material/Report';
import PeopleIcon from '@mui/icons-material/People';
import AdsClickIcon from '@mui/icons-material/AdsClick';
export const navLinksData = [
  {
    tabIcon: <DashboardIcon />,
    tabName: 'dashboard',
    tabText: 'Dashboard',
    route: '/dashboard',
  },
  {
    tabIcon: <PrivacyTipIcon />,
    tabName: 'privacypolicy',
    tabText: 'Privacy Policy',
    route: '/privacypolicy',
  },
  {
    tabIcon: <InsightsIcon />,
    tabName: 'kpi',
    tabText: 'KPI / Stats',
    route: '/kpi',
  },
  {
    tabIcon: <NotificationsActiveIcon />,
    tabName: 'notifications',
    tabText: 'Push Notifications',
    route: '/notifications/list',
  },
  {
    tabIcon: <QueryStatsIcon />,
    tabName: 'queries',
    tabText: 'Queries Management',
    route: '/queries',
  },
  {
    tabIcon: <ReportIcon />,
    tabName: 'reports',
    tabText: 'Report Abuse Management',
    route: '/reports',
  },
  {
    tabIcon: <PeopleIcon />,
    tabName: 'users',
    tabText: 'User Management',
    route: '/users',
  },
  {
    tabIcon: <AdsClickIcon />,
    tabName: 'advertisements',
    tabText: 'Ads Management',
    route: '/advertisements/list',
  },
];

export const roles = [
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'superadmin',
    label: 'SuperAdmin',
  },
];

export const tableColumns = [
  {
    name: 'Name',
    selector: row => row.name,
    format: row => <b>{row.name}</b>,
  },
  {
    name: 'Role',
    selector: row => row.role,
  },
  {
    name: 'Created By',
    selector: row => row.createdBy,
  },
  {
    name: 'Read',
    selector: row => row.read,
    cell: row => {
      return (
        <div style={{color: row.read ? 'green' : 'red'}}>
          {row.read ? <DoneIcon /> : <CloseIcon />}
        </div>
      );
    },
  },
  {
    name: 'Write',
    selector: row => row.write,
    cell: row => {
      return (
        <div style={{color: row.write ? 'green' : 'red'}}>
          {row.write ? <DoneIcon /> : <CloseIcon />}
        </div>
      );
    },
  },
  {
    name: 'Delete',
    selector: row => row.delete,
    cell: row => {
      return (
        <div style={{color: row.delete ? 'green' : 'red'}}>
          {row.delete ? <DoneIcon /> : <CloseIcon />}
        </div>
      );
    },
  },
];

export const tableData = [
  {
    id: 1,
    name: 'Mohit',
    role: 'Admin',
    createdBy: 'Ashish Aggarwal',
    read: true,
    write: true,
    delete: false,
  },
  {
    id: 2,
    name: 'Sanjit',
    role: 'SuperAdmin',
    createdBy: 'Abhishek Gupta',
    read: true,
    write: true,
    delete: true,
  },
  {
    id: 3,
    name: 'Brijesh',
    role: 'Manager',
    createdBy: 'Abhinay Kansal',
    read: true,
    write: false,
    delete: false,
  },
  {
    id: 4,
    name: 'Virat',
    role: 'SuperAdmin',
    createdBy: 'Abhishek Gupta',
    read: true,
    write: true,
    delete: true,
  },
  {
    id: 5,
    name: 'Sachin',
    role: 'Admin',
    createdBy: 'Ashish Aggarwal',
    read: true,
    write: true,
    delete: false,
  },
  {
    id: 6,
    name: 'Yuvraj',
    role: 'Manager',
    createdBy: 'Abhinay Kansal',
    read: true,
    write: false,
    delete: false,
  },
];

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
