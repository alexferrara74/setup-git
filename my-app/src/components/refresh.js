import React from 'react';

function Refresh() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div id="buttonrefresh">
      <button onClick={refreshPage}><p>Categorie</p></button>
    </div>
  );
}

export default Refresh;