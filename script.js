/*adding on click function for hamburgur*/
var menuIcon = document.querySelector(".menu-icon")
/*whenever i click hamburgur the sidebar must be popped in and out */
var sidebar = document.querySelector(".sidebar")

/*whenever my sidebar is minimized the space must be ocupied by the main container*/
var maincontainer = document.querySelector(".maincontainer")

// var card = document.getElementById("card")
// console.log("menuIcon",card);

menuIcon.onclick = function()
{
    sidebar.classList.toggle("smaller-sidebar")
    maincontainer.classList.toggle("larger-maincontainer")
    // card.classList.toggle("larger-card")
    console.log("menu item clicked");
}

var commentInput = document.querySelector('.writeCommentsContainer input');
var previousCommentsContainer = document.querySelector('.previousCommentsContainer');
var commentCountElement = document.querySelector('.commentContainer h1'); // Element to display comment count
var defaultChannelIconSrc = './myImg.jpeg'; // Default icon for comments


function updateCommentCount() {
    var comments = previousCommentsContainer.getElementsByClassName('previousComments');
    var commentCount = comments.length;
    commentCountElement.textContent = `${commentCount} Comments`;
}

// Function to handle adding a new comment
function addComment() {
    // Get the comment text
    var commentText = commentInput.value.trim();

    // Check if the comment text is not empty
    if (commentText) {
        // Create a new comment element
        var newComment = document.createElement('div');
        newComment.classList.add('previousComments', 'd-flex');

        // Create the comment content
        newComment.innerHTML = `
            <img class="channelIcon" src="${defaultChannelIconSrc}" alt="" />
            <div class="nameAndComment">
                <p class="channelName">@LetsUpgrade</p>
                <p class="comment">${commentText}</p>
            </div>
        `;

        // Append the new comment to the container
        previousCommentsContainer.appendChild(newComment);

        // Clear the comment input field
        commentInput.value = '';

        // Update the comment count
        updateCommentCount();
    }
}

// Add an event listener to the comment input field
commentInput.addEventListener('keydown', function(event) {
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
        // Prevent the default action (e.g., form submission)
        event.preventDefault();
        // Call the function to add a new comment
        addComment();
    }
});

// Initial comment count setup
document.addEventListener('DOMContentLoaded', function() {
    updateCommentCount();
});