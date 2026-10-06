import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import TransactionsPage from './pages/TransactionsPage'
import AccountsPage from './pages/AccountsPage'
import InvestmentsPage from './pages/InvestmentsPage'
import CreditCardsPage from './pages/CreditCardsPage'
import LoansPage from './pages/LoansPage'
import ServicesPage from './pages/ServicesPage'
import SettingsPage from './pages/SettingsPage'
import ComingSoonPage from './pages/ComingSoonPage'

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
        <Route path="accounts" element={<AccountsPage />} />
        <Route path="investments" element={<InvestmentsPage />} />
        <Route path="credit-cards" element={<CreditCardsPage />} />
        <Route path="loans" element={<LoansPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Route>
    </Routes>
  )
}
