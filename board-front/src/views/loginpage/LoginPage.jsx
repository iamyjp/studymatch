import React from 'react';

function LoginPage() {
  const handleLogin = () => {
    // Handle login logic
  };

  const styles = {
    body: {
      fontFamily: 'Roboto, sans-serif',
      backgroundColor: '#080710',
    },
    background: {
      width: '430px',
      height: '520px',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      left: '50%',
      top: '50%',
    },
    shape: {
      height: '200px',
      width: '200px',
      position: 'absolute',
      borderRadius: '50%',
    },
    shapeFirst: {
      background: 'linear-gradient(#00ff87, #60efff)',
      left: '-80px',
      top: '-80px',
    },
    shapeLast: {
      background: 'linear-gradient(to right, #ff930f, #fff95b)',
      right: '-30px',
      bottom: '-80px',
    },
    form: {
      height: '520px',
      width: '400px',
      backgroundColor: 'rgba(255, 255, 255, 0.13)',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%',
      borderRadius: '10px',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 255, 255, 0.767)',
      boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
      padding: '50px 35px',
    },
    formElements: {
      fontFamily: 'Poppins, sans-serif',
      color: '#ffffff',
      letterSpacing: '0.5px',
      outline: 'none',
      border: 'none',
    },
    formHeading: {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '42px',
      textAlign: 'center',
    },
    label: {
      display: 'block',
      marginTop: '30px',
      fontSize: '16px',
      fontWeight: 500,
    },
    input: {
      display: 'block',
      height: '50px',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      borderRadius: '3px',
      padding: '0 10px',
      marginTop: '8px',
      fontSize: '14px',
      fontWeight: 300,
    },
    placeholder: {
      color: '#e5e5e5',
    },
    button: {
      marginTop: '50px',
      width: '100%',
      backgroundColor: '#ffffff',
      color: '#080710',
      padding: '15px 0',
      fontSize: '18px',
      fontWeight: 600,
      borderRadius: '5px',
      cursor: 'pointer',
    },
    social: {
      marginTop: '30px',
      display: 'flex',
    },
    socialDiv: {
      background: 'red',
      width: '150px',
      borderRadius: '3px',
      padding: '5px 10px 10px 5px',
      backgroundColor: 'rgba(255, 255, 255, 0.27)',
      color: '#eaf0fb',
      textAlign: 'center',
    },
    socialDivHover: {
      background: 'rgba(255, 255, 255, 0.47)',
    },
    socialFb: {
      marginLeft: '25px',
    },
    socialIcon: {
      marginRight: '4px',
    },

    hidden:{
      fontSize: '14px',
      textAlign: "center"
    },
  };

  return (
    <body style={styles.body}>
      <div className="background" style={styles.background}>
        <div className="shape" style={styles.shapeFirst}></div>
        <div className="shape" style={styles.shapeLast}></div>
      </div>
      <form style={styles.form}>
        <h3 style={styles.formHeading}>Login Here</h3>
        <label style={styles.label} htmlFor="username">Username</label>
        <input style={styles.input} type="text" placeholder="Email" id="username" />
        <label style={styles.label} htmlFor="password">Password</label>
        <input style={styles.input} type="password" placeholder="Password" id="password" />
        <button style={styles.button} onClick={handleLogin}>Log In</button>
        <div style={styles.hidden}>
          <a>작성된 정보가 일치하지 않습니다</a>
        </div>
        {/*
        <div style={styles.social} className="social">
          <div style={styles.socialDiv} className="go"><i className="fab fa-google" style={styles.socialIcon}></i> Google</div>
          <div style={styles.socialDiv} className="fb"><i className="fab fa-facebook" style={styles.socialIcon}></i> Facebook</div>
        </div>
        */}
      </form>
    </body>
  );
}

export default LoginPage;
