import { useState } from 'react'
import Card from '../components/ui/Card'
import SettingsTabs from '../components/settings/SettingsTabs'
import EditProfileForm from '../components/settings/EditProfileForm'
import PreferencesForm from '../components/settings/PreferencesForm'
import SecurityForm from '../components/settings/SecurityForm'

const panels = { 'Edit Profile': EditProfileForm, Preferences: PreferencesForm, Security: SecurityForm }

export default function SettingsPage() {
  const [tab, setTab] = useState('Edit Profile')
  const Panel = panels[tab]
  return (
    <Card className="!p-5 sm:!p-8">
      <SettingsTabs tabs={Object.keys(panels)} active={tab} onChange={setTab} />
      <Panel key={tab} />
    </Card>
  )
}
