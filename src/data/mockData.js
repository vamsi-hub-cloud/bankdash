export const weekly = [
  { day: 'Sat', deposit: 240, withdraw: 480 }, { day: 'Sun', deposit: 130, withdraw: 340 },
  { day: 'Mon', deposit: 260, withdraw: 310 }, { day: 'Tue', deposit: 370, withdraw: 480 },
  { day: 'Wed', deposit: 240, withdraw: 150 }, { day: 'Thu', deposit: 240, withdraw: 390 },
  { day: 'Fri', deposit: 350, withdraw: 400 },
]
export const balanceHistory = [
  { m: 'Jul', v: 120 }, { m: 'Aug', v: 320 }, { m: 'Sep', v: 480 }, { m: 'Oct', v: 780 },
  { m: 'Nov', v: 210 }, { m: 'Dec', v: 560 }, { m: 'Jan', v: 640 },
]
export const expenseShare = [
  { name: 'Entertainment', value: 30 }, { name: 'Bill Expense', value: 15 },
  { name: 'Investment', value: 20 }, { name: 'Others', value: 35 },
]
export const recentTransactions = [
  { id: 1, title: 'Deposit from my Card', date: '28 January 2021', amount: -850, icon: 'card', tone: 'gold' },
  { id: 2, title: 'Deposit Paypal', date: '25 January 2021', amount: 2500, icon: 'wallet', tone: 'sky' },
  { id: 3, title: 'Jemi Wilson', date: '21 January 2021', amount: 5400, icon: 'coins', tone: 'brand' },
]
export const contacts = [
  { name: 'Livia Bator', role: 'CEO', img: 'livia' }, { name: 'Randy Press', role: 'Director', img: 'randy' },
  { name: 'Workman', role: 'Designer', img: 'workman' }, { name: 'Ana Ruiz', role: 'Manager', img: 'ana' }, { name: 'Tom Lee', role: 'Engineer', img: 'tom' },
]
export const cards = [
  { id: 1, variant: 'brand', balance: 5756, holder: 'Eddy Cusuma', valid: '12/22', number: '3778 **** **** 1234' },
  { id: 2, variant: 'dark', balance: 5756, holder: 'Eddy Cusuma', valid: '12/22', number: '3778 **** **** 1234' },
  { id: 3, variant: 'light', balance: 5756, holder: 'Eddy Cusuma', valid: '12/22', number: '3778 **** **** 1234' },
]
const baseTx = [
  { desc: 'Spotify Subscription', type: 'Shopping', date: '28 Jan, 12.30 AM', amount: -2500 },
  { desc: 'Freepik Sales', type: 'Transfer', date: '25 Jan, 10.40 PM', amount: 750 },
  { desc: 'Mobile Service', type: 'Service', date: '20 Jan, 10.40 PM', amount: -150 },
  { desc: 'Wilson', type: 'Transfer', date: '15 Jan, 03.29 PM', amount: -1050 },
  { desc: 'Emilly', type: 'Transfer', date: '14 Jan, 10.40 PM', amount: 840 },
]
export const transactions = Array.from({ length: 20 }, (_, i) => ({
  ...baseTx[i % 5], id: `#${12548796 + i}`, card: '1234 ****',
}))
export const monthlyExpense = [
  { m: 'Aug', v: 7800 }, { m: 'Sep', v: 10400 }, { m: 'Oct', v: 6200 },
  { m: 'Nov', v: 3900 }, { m: 'Dec', v: 12500 }, { m: 'Jan', v: 5600 },
]
export const accountStats = [
  { label: 'My Balance', value: '$12,750', icon: 'wallet', tone: 'gold' },
  { label: 'Income', value: '$5,600', icon: 'hand', tone: 'sky' },
  { label: 'Expense', value: '$3,460', icon: 'receipt', tone: 'coral' },
  { label: 'Total Saving', value: '$7,920', icon: 'piggy', tone: 'brand' },
]
export const lastTransactions = [
  { title: 'Spotify Subscription', date: '25 Jan 2021', type: 'Shopping', card: '1234 ****', status: 'Pending', amount: -150, icon: 'refresh', tone: 'brand' },
  { title: 'Mobile Service', date: '25 Jan 2021', type: 'Service', card: '1234 ****', status: 'Completed', amount: -340, icon: 'wrench', tone: 'sky' },
  { title: 'Emilly Wilson', date: '25 Jan 2021', type: 'Transfer', card: '1234 ****', status: 'Completed', amount: 780, icon: 'user', tone: 'coral' },
]
export const debitCredit = [
  { d: 'Sat', debit: 30, credit: 45 }, { d: 'Sun', debit: 22, credit: 36 }, { d: 'Mon', debit: 18, credit: 26 },
  { d: 'Tue', debit: 46, credit: 22 }, { d: 'Wed', debit: 34, credit: 44 }, { d: 'Thu', debit: 32, credit: 20 }, { d: 'Fri', debit: 38, credit: 45 },
]
export const invoices = [
  { name: 'Apple Store', when: '5h ago', amount: '$450', icon: 'apple', tone: 'brand' },
  { name: 'Michael', when: '2 days ago', amount: '$160', icon: 'user', tone: 'gold' },
  { name: 'Playstation', when: '5 days ago', amount: '$1085', icon: 'game', tone: 'sky' },
  { name: 'William', when: '10 days ago', amount: '$90', icon: 'user', tone: 'coral' },
]
export const investStats = [
  { label: 'Total Invested Amount', value: '$150,000', icon: 'bag', tone: 'brand' },
  { label: 'Number of Investments', value: '1,250', icon: 'pie', tone: 'coral' },
  { label: 'Rate of Return', value: '+5.80%', icon: 'repeat', tone: 'sky' },
]
export const yearlyInvestment = [
  { y: '2016', v: 5500 }, { y: '2017', v: 24000 }, { y: '2018', v: 16500 },
  { y: '2019', v: 37500 }, { y: '2020', v: 21500 }, { y: '2021', v: 29500 },
]
export const monthlyRevenue = [
  { y: '2016', v: 11000 }, { y: '2017', v: 19500 }, { y: '2018', v: 28500 },
  { y: '2019', v: 22000 }, { y: '2020', v: 26000 }, { y: '2021', v: 35000 },
]
export const myInvestments = [
  { name: 'Apple Store', kind: 'E-commerce, Marketplace', value: '$54,000', ret: 16, icon: 'apple', tone: 'coral' },
  { name: 'Samsung Mobile', kind: 'E-commerce, Marketplace', value: '$25,300', ret: -4, icon: 'phone', tone: 'sky' },
  { name: 'Tesla Motors', kind: 'Electric Vehicles', value: '$8,200', ret: 25, icon: 'car', tone: 'gold' },
]
export const trendingStock = [
  { no: '01.', name: 'Trivago', price: '$520', ret: 5 }, { no: '02.', name: 'Canon', price: '$480', ret: 10 },
  { no: '03.', name: 'Uber Food', price: '$350', ret: -3 }, { no: '04.', name: 'Nokia', price: '$940', ret: 2 },
  { no: '05.', name: 'Tiktok', price: '$670', ret: -12 },
]
export const cardList = [
  { id: 1, type: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', name: 'William', tone: 'sky' },
  { id: 2, type: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', name: 'Michel', tone: 'coral' },
  { id: 3, type: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', name: 'Edward', tone: 'gold' },
]
export const bankShare = [
  { name: 'DBL Bank', value: 30 }, { name: 'ABM Bank', value: 25 }, { name: 'BRC Bank', value: 25 }, { name: 'MCP Bank', value: 20 },
]
export const serviceHighlights = [
  { title: 'Life Insurance', sub: 'Unlimited protection', icon: 'heart', tone: 'sky' },
  { title: 'Shopping', sub: 'Buy. Think. Grow.', icon: 'bag', tone: 'gold' },
  { title: 'Safety', sub: 'We are your allies', icon: 'shield', tone: 'brand' },
]
const meta = (a, b, c) => [['Rate', a], ['Approval', b], ['Fees', c]]
export const bankServices = [
  { id: 1, name: 'Business loans', sub: 'Funding to grow your company', icon: 'hand', tone: 'coral', meta: meta('From 5% APR', '2 business days', 'No setup fee'), about: 'Flexible business financing from $10,000 up to $500,000 with terms of up to 36 months.' },
  { id: 2, name: 'Checking accounts', sub: 'Everyday spending made simple', icon: 'briefcase', tone: 'gold', meta: meta('0.10% APY', 'Instant', 'No monthly fee'), about: 'A free everyday account with a debit card, mobile deposits and instant transfers.' },
  { id: 3, name: 'Savings accounts', sub: 'Grow your money steadily', icon: 'chart', tone: 'coral', meta: meta('3.80% APY', 'Instant', 'No monthly fee'), about: 'High-yield savings with no minimum balance and automatic round-up deposits.' },
  { id: 4, name: 'Debit and credit cards', sub: 'Pay anywhere, stay in control', icon: 'user', tone: 'sky', meta: meta('From 12% APR', '1 business day', 'No annual fee'), about: 'Choose Classic, Gold or Platinum cards with instant freeze and mobile wallet support.' },
  { id: 5, name: 'Life Insurance', sub: 'Protection for the people you love', icon: 'shield', tone: 'brand', meta: meta('From $9 / month', '3 business days', 'No hidden fees'), about: 'Term and whole-life cover with a simple online application and no medical exam up to $250,000.' },
  { id: 6, name: 'Business loans', sub: 'Funding to grow your company', icon: 'hand', tone: 'coral', meta: meta('From 5% APR', '2 business days', 'No setup fee'), about: 'Flexible business financing from $10,000 up to $500,000 with terms of up to 36 months.' },
]
export const loanStats = [
  { label: 'Personal Loans', value: '$50,000', icon: 'user', tone: 'sky' },
  { label: 'Corporate Loans', value: '$100,000', icon: 'briefcase', tone: 'gold' },
  { label: 'Business Loans', value: '$500,000', icon: 'chart', tone: 'coral' },
  { label: 'Custom Loans', value: 'Choose Money', icon: 'wrench', tone: 'brand' },
]
export const activeLoans = [
  { id: 1, money: 100000, left: 40500, months: 8, rate: 12, installment: 2000 },
  { id: 2, money: 500000, left: 250000, months: 36, rate: 10, installment: 8000 },
  { id: 3, money: 900000, left: 40500, months: 12, rate: 12, installment: 5000 },
  { id: 4, money: 50000, left: 40500, months: 25, rate: 5, installment: 2000 },
  { id: 5, money: 50000, left: 40500, months: 5, rate: 16, installment: 10000 },
  { id: 6, money: 80000, left: 25500, months: 14, rate: 8, installment: 2000 },
  { id: 7, money: 12000, left: 5500, months: 9, rate: 13, installment: 500 },
  { id: 8, money: 160000, left: 100800, months: 3, rate: 12, installment: 900 },
]
