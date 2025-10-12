import React from 'react';

const App = () => {
  return (
    <div style={{ width: '100vw',      // full width of the window
    height: '100vh',     // full height of the window
    backgroundColor: '#496068',
    padding: '20px'}}>
      {/* Top bar */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginTop: '0px',
          marginBottom: '20px'
        }}
      >
        <h1 style={{color: 'white', display: 'flex'}}>Welcome back, "Name"!</h1>
        <button style = {{marginRight: "70px", marginTop: "40px", padding: "20px"}}>Create new document</button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '20px', height: '70vh'}}>
        <div style={{ flex: 2, backgroundColor: '#f0f0f0', padding: '20px'}}>
         View documents
        </div>
        <div style={{ flex: 1, backgroundColor: '#d0d0d0', padding: '20px' }}>
          View upcoming assignments
        </div>
      </div>
    </div>
  );
};





export default App;
