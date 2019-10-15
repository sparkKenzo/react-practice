import React from 'react'

function Link({children, onClick, active}) {
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginRight: '6px'
      }}
    >
      {children}
    </button>
  )
}

export default Link
