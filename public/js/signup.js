const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert(`🛸 Welcom to TekTok ${email} 🛸`)
        document.location.replace('/');
      } else {
        alert('🤔 Sorry something went wrong. In order to sign up successfully your email must be valid and unique in our database. Please ensure you have provided a password with a minimum of 8 characters. If you already have an account please navigate to the login portal. 🤓');
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  