import React from 'react'
import { SkyAlert, SkyCard, SkyCheckbox, SkyDropdown } from 'react-skyux'
import 'react-skyux/dist/index.css'
import '@skyux/theme/css/sky.css'

const App = () => {
  return (
    <div>
      <SkyAlert closeable={true} onClose={() => { alert("You closed me!"); }}>This is an alert</SkyAlert>
      <SkyCard title="This is a card">
        <SkyCard.Content>
          Here is some card content
        </SkyCard.Content>
        <SkyCard.Actions>
          <button className="sky-btn sky-btn-default">Here is an action button</button>
        </SkyCard.Actions>
      </SkyCard>
      <SkyCheckbox checked label="This is a checkbox" />
      <SkyDropdown>
        <SkyDropdown.Item name="Option 1" onClick={() => {}} />
        <SkyDropdown.Item name="Option 2" onClick={() => {}} />
      </SkyDropdown>
    </div>
  )
    
}

export default App
