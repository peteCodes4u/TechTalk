// const editPostHandler = async (articleId) => {
  
//     const title = document.getElementById('article-title').value.trim();
//     const blog = document.getElementById('article-body').value.trim();

  
//     if (title  && blog) {
//       const response = await fetch(`/api/articles/${articleId}`, {
//         method: 'PUT',
//         body: JSON.stringify({ title, blog }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         alert(`👽 Post successfully updated 📝 `)
//       } else {
//         alert('🤔 Sorry something went wrong, please refresh the page, ensure you are logged in and try again.');
//       }
//     }
//   };

const updateBlogButton = document.querySelectorAll('.btn');
updateBlogButton.forEach(button => {
    button.addEventListener("click", async function(){
        const title = button.parentElement.querySelector('#article-title').value.trim();
        const blog = button.parentElement.querySelector('#article-body').value.trim();
        const articleId = button.value;

        const response = await fetch(`/api/articles/${articleId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                blog: blog
            })
        });
        if (response.ok) { alert(`👽 Post successfully updated 📝 `)} else {
            alert('🤔 Sorry something went wrong, please refresh the page, ensure you are logged in and try again.');
        }
    });
});


