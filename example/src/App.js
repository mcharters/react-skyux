import React, { useState } from 'react'
import {
  SkyAlert, SkyCard, SkyCheckbox, SkyFluidGrid, SkyRow, SkyColumn,
  SkyWait, SkyGrid, SkyModal,
} from 'react-skyux'
import 'react-skyux/dist/index.css'
import '@skyux/theme/css/sky.css'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
      <SkyRow>
        <SkyColumn xs={12} sm={6} md={4}>
          <p>This is a waiting indicator</p>
          <SkyWait />
        </SkyColumn>
        <SkyColumn xs={12} sm={6} md={4}>
          <SkyGrid
            getId={d => d.id}
            data={[
              { id: 1, name: 'Niels Bohr', email: 'niels.bohr@example.com' },
              { id: 2, name: 'Ada Lovelace', email: 'ada.lovelace@example.com' },
              { id: 3, name: 'Marie Curie', email: 'marie.curie@example.com' },
            ]}
            columns={[
              {
                heading: 'Name',
                field: d => d.name,
                sort: 'name',
              },
              {
                heading: 'Email',
                field: d => d.email,
                sort: 'email',
              }
            ]}
            selected={[2]}
            onSelect={id => alert(`Selected ${id}!`)}
            sort={'name'}
            onSortChange={sort => alert(`Sorted ${sort}!`)}
          />
        </SkyColumn>
        <SkyColumn xs={12} sm={6} md={4}>
          <button type="button" className="sky-btn sky-btn-default" onClick={() => { setModalOpen(true); }}>
            This is a button that opens a modal
          </button>
          {modalOpen && (
            <SkyModal
              onClose={() => { setModalOpen(false); }}
              header="This is a modal"
              footer={(
                <button type="button" className="sky-btn sky-btn-primary" onClick={() => { setModalOpen(false); }}>
                  Close modal
                </button> 
              )}
            >
              Here is some modal content
            </SkyModal>
          )}
        </SkyColumn>
      </SkyRow>
    </SkyFluidGrid>
  )
    
}

export default App
