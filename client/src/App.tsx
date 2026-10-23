import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardPage from './pages/DashboardPage'

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">
        {title}
      </h1>

      <p className="mt-2 text-slate-500">
        This module will be implemented in an upcoming lesson.
      </p>
    </div>
  );
}

function App() {

  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route
          index
          element={<Navigate to="/dashboard" replace />}
        />

        <Route path="dashboard" element={<DashboardPage />} />

        <Route
          path="patients"
          element={<PlaceholderPage title="Patients" />}
        />

        <Route
          path="appointments"
          element={<PlaceholderPage title="Appointments" />}
        />

        <Route
          path="medical-records"
          element={<PlaceholderPage title="Medical Records" />}
        />

        <Route
          path="*"
          element={<PlaceholderPage title="Page Not Found" />}
        />
      </Route>
    </Routes>
  )
}

export default App
