
  

const newTechPostFormHandler = async (event) => {
    event.preventDefault();
  
    let title = '';
    const titleInput = document.querySelector('#title-new-tech-post-form');
    if (titleInput) {
      title = titleInput.value.trim();
    }
    const contentElement = document.querySelector('#content-new-tech-post-form');
    const content = contentElement ? contentElement.value.trim() : '';
  
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // When successful, load the dashboard page
      } else {
        alert('Failed to create a new post.'); // When unsuccessful, show alert
      }
    }
  };
  
  
  // Event listeners
  const newTechPostForm = document.querySelector('.new-tech-post-form');
  if (newTechPostForm) {
    newTechPostForm.addEventListener('submit', newTechPostFormHandler);
  }