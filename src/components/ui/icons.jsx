import { Wallet, CreditCard, Coins, HandCoins, Receipt, PiggyBank, RefreshCw, Wrench, User, Apple, Gamepad2, Smartphone, Car, ShoppingBag, PieChart, Repeat, Ban, Lock, Store, Briefcase, BarChart3, ShieldCheck, HeartPulse } from 'lucide-react'

const map = { wallet: Wallet, card: CreditCard, coins: Coins, hand: HandCoins, receipt: Receipt, piggy: PiggyBank, refresh: RefreshCw, wrench: Wrench, user: User, apple: Apple, game: Gamepad2, phone: Smartphone, car: Car, bag: ShoppingBag, pie: PieChart, repeat: Repeat, ban: Ban, lock: Lock, store: Store, briefcase: Briefcase, chart: BarChart3, shield: ShieldCheck, heart: HeartPulse }

export const getIcon = (name) => map[name] || Wallet
