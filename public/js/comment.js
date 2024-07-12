const postCommentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.getElementById('comment').value.trim();
    const article_id = window.location.pathname.split('/').pop();;

    if(comment) {

        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ article_id, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.reload(); 
        } else {
            alert('🤔 Sorry something went wrong. Please ensure you are logged in and refresh your browser');
        }
    }
}

document
    .getElementById('addComment')
    .addEventListener('submit', postCommentFormHandler);