import { useState } from 'react'
import { Pencil } from 'lucide-react'
import Avatar from '../ui/Avatar'
import SaveButton from '../ui/SaveButton'
import useSaved from '../../hooks/useSaved'

const initial = { name: 'Charlene Reed', username: 'Charlene Reed', email: 'charlenereed@gmail.com', password: 'password12', dob: '1990-01-25', present: 'San Jose, California, USA', permanent: 'San Jose, California, USA', city: 'San Jose', postal: '45962', country: 'USA' }
const fields = [
  ['name', 'Your Name'], ['username', 'User Name'], ['email', 'Email', 'email'], ['password', 'Password', 'password'],
  ['dob', 'Date of Birth', 'date'], ['present', 'Present Address'], ['permanent', 'Permanent Address'], ['city', 'City'],
  ['postal', 'Postal Code'], ['country', 'Country'],
]

export default function EditProfileForm() {
  const [form, setForm] = useState(initial)
  const [photo, setPhoto] = useState(null)
  const [saved, flash] = useSaved()

  return (
    <form onSubmit={(e) => { e.preventDefault(); flash() }} className="flex flex-col gap-8 md:flex-row">
      <div className="relative mx-auto h-28 w-28 shrink-0 md:mx-0 md:h-32 md:w-32">
        <Avatar name={form.name} src={photo} imageKey="charlene" size="h-full w-full text-3xl" />
        <label className="absolute bottom-0 right-0 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-brand-700 text-white shadow-soft ring-2 ring-white transition hover:bg-brand-800">
          <Pencil size={15} /><span className="sr-only">Change photo</span>
          <input type="file" accept="image/*" hidden onChange={(e) => e.target.files[0] && setPhoto(URL.createObjectURL(e.target.files[0]))} />
        </label>
      </div>
      <div className="flex-1">
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map(([key, label, type = 'text']) => (
            <label key={key} className="space-y-2 text-sm font-medium">{label}
              <input type={type} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="input" />
            </label>
          ))}
        </div>
        <div className="mt-8 flex justify-end"><SaveButton saved={saved} /></div>
      </div>
    </form>
  )
}
