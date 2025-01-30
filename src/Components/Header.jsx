import React from 'react'

function Header() {
  return (
    <div>
        <h1 style={styles.title}>Welcome!</h1>
    </div>
  )
}

export default Header;

const styles = {
    title: {
        color: '#ffffff',
        padding: '100 px 0px 0px 0px',
        textAlign: 'center'
    }
};