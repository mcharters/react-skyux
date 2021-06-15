import React, { useState } from 'react'
import {
  SkyAlert, SkyCard, SkyCheckbox, SkyFluidGrid, SkyRow, SkyColumn,
  SkyWait, SkyGrid, SkyModal, SkyPaging, SkyRepeater, SkySearch,
} from 'react-skyux'
import 'react-skyux/dist/index.css'
import '@skyux/theme/css/sky.css'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedItem, setExpandedItem] = useState(1);

  return (
    <SkyFluidGrid>
      <SkyRow>
        <SkyColumn xs={12}>
          <h1>react-skyux</h1>
        </SkyColumn>
      </SkyRow>
      <SkyRow>
        <SkyColumn xs={12} sm={6} md={4}>
          <h2>SkyAlert</h2>
          <SkyAlert closeable={true} onClose={() => { alert("You closed me!"); }}>This is an alert</SkyAlert>
        </SkyColumn>
        <SkyColumn xs={12} sm={6} md={4}>
          <h2>SkyCard</h2>
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
          <h2>SkyCheckbox</h2>
          <SkyCheckbox checked label="This is a checkbox" />
        </SkyColumn>
      </SkyRow>
      <SkyRow>
        <SkyColumn xs={12} sm={6} md={4}>
          <h2>SkyWait</h2>
          <SkyWait />
        </SkyColumn>
        <SkyColumn xs={12} sm={6} md={4}>
          <h2>SkyGrid</h2>
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
          <h2>SkyModal</h2>
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
      <SkyRow>
        <SkyColumn xs={12} sm={6} md={4}>
          <h2>SkyPaging</h2>
          <SkyPaging itemCount={20} currentPage={currentPage} onCurrentPageChange={(p) => { setCurrentPage(p); }} />
        </SkyColumn>
        <SkyColumn xs={12} sm={6} md={4}>
          <h2>SkyRepeater</h2>
          <SkyRepeater>
            <SkyRepeater.Item
              title="Call Robert Hernandez"
              content="Robert recently gave a very generous gift. We should call him to thank him."
              isExpanded={expandedItem === 1}
              onExpanded={() => { setExpandedItem(1); }}
            />
            <SkyRepeater.Item
              title="Send Invitation to Spring Ball"
              content="The Spring Ball is coming up soon. Let's get those invitations out!"
              isExpanded={expandedItem === 2}
              onExpanded={() => { setExpandedItem(2); }}
            />
          </SkyRepeater>
        </SkyColumn>
        <SkyColumn xs={12} sm={6} md={4}>
          <h2>SkySearch</h2>
          <SkySearch debounceTime={500} onChange={(term) => { alert(`Searched ${term}!`); }} />
        </SkyColumn>
      </SkyRow>
    </SkyFluidGrid>
  )
    
}

export default App
