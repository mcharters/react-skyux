import React from 'react'
import { SkyAlert, SkyCard, SkyCheckbox, SkyFluidGrid, SkyRow, SkyColumn } from 'react-skyux'
import 'react-skyux/dist/index.css'
import '@skyux/theme/css/sky.css'

const App = () => {
  return (
    <SkyFluidGrid>
      <SkyRow>
        <SkyColumn xs={12} sm={6} md={4}>
          <SkyAlert closeable={true} onClose={() => { alert("You closed me!"); }}>This is an alert</SkyAlert>
        </SkyColumn>
        <SkyColumn xs={12} sm={6} md={4}>
          <SkyCard title="This is a card">
            <SkyCard.Content>
              Here is some card content
            </SkyCard.Content>
            <SkyCard.Actions>
              <button className="sky-btn sky-btn-default">Here is an action button</button>
            </SkyCard.Actions>
          </SkyCard>
        </SkyColumn>
        <SkyColumn xs={12} sm={6} md={4}>
          <SkyCheckbox checked label="This is a checkbox" />
        </SkyColumn>
      </SkyRow>
    </SkyFluidGrid>
  )
    
}

export default App
