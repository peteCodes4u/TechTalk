let user_id; 

const setUser = (id) => {
    user_id = id;
};

const postBlogFormHandler = async (event) => {
    event.preventDefault();

    const title =document.getElementById('article-title').value.trim(); 
    const blog = document.getElementById('article-body').value.trim();
 
    if(title && blog) {
        const response = await fetch(`/api/articles/${user_id}`, {
            method: 'POST',
            body: JSON.stringify({title, blog}),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {
            alert(`👽 Post successfully created! 🌠 `)
            window.location.href = '/dashboard';
        } else {
            alert('🤔 Sorry something went wrong, please refresh the page, ensure you are logged in and try again.');
        }
    }
}

document
.querySelector('.add-blog')
.addEventListener('submit', postBlogFormHandler);
