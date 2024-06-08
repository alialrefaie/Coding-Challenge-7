document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form data
    const name = document.getElementById('name').value.trim();
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value.trim();

    //Validate input fields
    if (!name || !rating || !comments) {
        alert('Please fill in all fields.');
        return;
    }

    //Append feedback to display area
    const displayArea = document.getElementById('feedbackDisplay');
    const feedbackEntry = document.createElement('div');
    feedbackEntry.innerHTML=`
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Rating:</strong> ${rating}</p>
    <p><strong>Comments:</strong> ${comments}</p>
    <hr>
    
`;
displayArea.appendChild(feedbackEntry);

// Clear form after submission
document.getElementById('feedbackForm').reset();

});