
//ref for update blog buttons 
const updateBlogButton = document.querySelectorAll('.btn');

// Update post button logic
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




