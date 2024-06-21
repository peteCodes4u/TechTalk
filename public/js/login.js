const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert(`👽 welcome back ${email} 🖖`)
        document.location.replace('/');
      } else {
        alert('🤔 Sorry, Failed to log in. Please double check your email and password then resubmit.');
      }
    }
  };

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
