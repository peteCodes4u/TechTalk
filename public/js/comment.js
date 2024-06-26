const postCommentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.getElementById('comment').value.trim();
    const user_id = document.getElementById('user_id').value;
    const article_id = document.getElementById('article_id').value;

    if(comment) {
        console.log(comment);
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ user_id, article_id, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            alert(`😎 comment posted! 😎`);
            document.location.reload(); 
        } else {
            alert('🤔 Sorry something went wrong. Please ensure you are logged in and refresh your browser');
        }
    }
}
document
    .getElementById('addComment')
    .addEventListener('submit', postCommentFormHandler);