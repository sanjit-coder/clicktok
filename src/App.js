import {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Loader from 'components/Loader';
import './styles/scss/main.scss';
const Home = lazy(() => import('screens/Home'));
const ForgetPasswordScreen = lazy(() => import('screens/forgetPassword'));
const Dashboard = lazy(() => import('screens/dashboard'));
const PrivacyPolicyPage = lazy(() => import('screens/privacyPolicy'));
const CreateAdmin = lazy(() => import('screens/admin/create'));
const KPI = lazy(() => import('screens/kpi'));
const QueriesManagement = lazy(() => import('screens/queries'));
const ReportAbuseManagementManagement = lazy(() => import('screens/reports'));
const Notifications = lazy(() => import('screens/notifications'));
const CreatePushNotification = lazy(() =>
  import('screens/notifications/create'),
);
const Users = lazy(() => import('screens/users'));
const AdvertisementsList = lazy(() => import('screens/advertisements'));
const CreateAdvertisement = lazy(() => import('screens/advertisements/create'));

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{
          color: 'white',
        }}
        toastOptions={{
          className: 'reactHotToast',
          duration: 3000,
          success: {
            style: {
              background: 'rgba(82, 176, 98, 0.95)',
              color: 'white !important',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white !important',
            },
          },
        }}
      />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forgot-password" element={<ForgetPasswordScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
          <Route path="/admin">
            <Route path="add/*" element={<CreateAdmin isEdit={0} />} />
            <Route path="edit/*" element={<CreateAdmin isEdit={1} />} />
          </Route>
          <Route path="/kpi" element={<KPI />} />
          <Route path="/queries" element={<QueriesManagement />} />
          <Route
            path="/reports"
            element={<ReportAbuseManagementManagement />}
          />
          <Route path="/notifications">
            <Route path="list" element={<Notifications />} />
            <Route path="create" element={<CreatePushNotification />} />
          </Route>
          <Route path="/users" element={<Users />} />
          <Route path="/advertisements">
            <Route path="list" element={<AdvertisementsList />} />
            <Route path="create" element={<CreateAdvertisement />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
