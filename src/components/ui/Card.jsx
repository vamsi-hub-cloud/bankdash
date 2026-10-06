export default function Card({ className = '', children }) {
  return <div className={`rounded-3xl bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-[0_16px_36px_-14px_rgba(15,122,108,.28)] ${className}`}>{children}</div>
}
