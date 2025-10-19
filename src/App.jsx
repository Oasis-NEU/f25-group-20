import React, {useState, useEffect} from 'react';

const App = () => {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <div style={{ width: '100vw',
    height: '100vh',
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
        }}>
        <h1 style={{color: 'white', display: 'flex'}}>Welcome back, "Name"!</h1>
        <button onClick = {() => setShowCreate(true)} style = {{marginRight: "70px", marginTop: "40px", padding: "20px"}}>Create new document</button>
      </div>

      {/* Tabs */}
      <div style = {{
        display: 'flex', 
        gap: '20px', 
        height: '70vh'}}>
        {/* Left sidebar */}
        <div style = {{color: 'black', 
          fontSize: '20px', 
          flex: 2, 
          backgroundColor: '#f0f0f0', 
          padding: '30px'}}>
         View documents
        </div>
        
        {/* Right sidebar */}
        <div style = {{color: 'black', 
          fontSize: '20px', 
          flex: 1, 
          backgroundColor: '#d0d0d0', 
          padding: '30px' }}>
          View upcoming assignments
        </div>

        {/* Pop up window */}
        {showCreate && (
          <div onClick = {() => setShowCreate(false)}
            style = {{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <div
              onClick = {(e) => e.stopPropagation()}
              style = {{
                background: "white",
                height: "80px",
                width: "30vw",
                padding: "20px",
                borderRadius: "8px"
              }}>
              <input type = "text" placeholder = "Document name" required style = {{
                width: '100%',
                height: '20px',
                fontSize: '16px',
              }}
              />
              <button onClick = {() => setShowCreate(false)} 
              style = {{
                marginTop: "5px",
                padding: "4px",
                fontSize: "14px",
                borderRadius: "5px",
                backgroundColor: "#496068",
              }}>Cancel</button>

              <button onClick = {() => setShowCreate(false)} 
              style = {{
                marginTop: "0px",
                marginLeft: "80%",
                padding: "4px",
                fontSize: "14px",
                borderRadius: "5px",
                backgroundColor: "#496068",
              }}>Continue</button>

            </div>
          </div>)}
      </div>
    </div>
  );
};

export default App;