import { Home, ArrowLeftRight, User, TrendingUp, CreditCard, HandCoins, Wrench, Crown, Settings } from 'lucide-react'

export const navItems = [
  { to: '/', label: 'Dashboard', title: 'Overview', icon: Home },
  { to: '/transactions', label: 'Transactions', title: 'Transactions', icon: ArrowLeftRight },
  { to: '/accounts', label: 'Accounts', title: 'Accounts', icon: User },
  { to: '/investments', label: 'Investments', title: 'Investments', icon: TrendingUp },
  { to: '/credit-cards', label: 'Credit Cards', title: 'Credit Cards', icon: CreditCard },
  { to: '/loans', label: 'Loans', title: 'Loans', icon: HandCoins },
  { to: '/services', label: 'Services', title: 'Services', icon: Wrench },
  { to: '/privileges', label: 'My Privileges', title: 'My Privileges', icon: Crown },
  { to: '/settings', label: 'Setting', title: 'Setting', icon: Settings },
]
