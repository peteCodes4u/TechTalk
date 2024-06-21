const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        alert(`🚀 Good bye, come back again soon! 🚀`)
      document.location.replace('/');
    } else {
      alert('🤔 hmmm something went wrong, please refresh the browser and try again.');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  