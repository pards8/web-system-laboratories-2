const firstname = document.getElementById('firstname');
const program = document.getElementById('program');
const button = document.getElementById('button');
const ul = document.getElementById('studentlist');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');

// Function to delete a student from the list
function addDeleteFunctionality(deleteButton, li) {
    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
    });
}

// For the pre-existing list item
document.querySelectorAll('.delete-btn').forEach((deleteButton) => {
    const li = deleteButton.parentElement;
    addDeleteFunctionality(deleteButton, li);
});

// For newly added list items
button.addEventListener('click', () => {
    const newfirstname = firstname.value;
    const newprogram = program.value;

    // Create elements for the student's name, program, and delete button
    const h4 = document.createElement('h4');
    const small = document.createElement('small');
    const deleteButton = document.createElement('button');

    // Set values to elements
    h4.innerHTML = newfirstname;
    small.innerHTML = newprogram;
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-btn');

    // Add class to elements
    h4.classList.add('Firstnames');
    small.classList.add('programs');

    // Create a container (li) and append the elements
    const li = document.createElement('li');
    li.append(h4);
    li.append(small);
    li.append(deleteButton);

    // Append the list item to the ul
    ul.append(li);

    // Clear input fields after adding
    firstname.value = '';
    program.value = '';

    // Add delete functionality to the new button
    addDeleteFunctionality(deleteButton, li);

    console.log(li);
});

// Search functionality
searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.toLowerCase(); // Get the search query and convert to lowercase
    const listItems = ul.getElementsByTagName('li'); // Get all list items

    // Loop through each list item and check if the search query matches the student's name or program
    Array.from(listItems).forEach((item) => {
        const studentName = item.querySelector('.Firstnames').innerText.toLowerCase(); // Get the student's name
        const studentProgram = item.querySelector('.programs').innerText.toLowerCase(); // Get the student's program

        if (studentName.includes(searchQuery) || studentProgram.includes(searchQuery)) {
            item.style.display = ''; // Show the item if it matches
        } else {
            item.style.display = 'none'; // Hide the item if it doesn't match
        }
    });
});
