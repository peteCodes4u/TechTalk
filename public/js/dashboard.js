
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


const collapsibles = document.getElementsByClassName("collapsible");

// Add click event listener to each collapsible element
for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


