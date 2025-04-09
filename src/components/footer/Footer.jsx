import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy;{new Date().getFullYear()} MyWebsite. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem',
  },
};

export default Footer;
