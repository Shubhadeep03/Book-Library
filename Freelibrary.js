// Sample book data
const books = [
    { title: 'Learning The C++', description: 'Lorem ipsum dolor, sit amet consectetur.', category: 'Programming', image: 'images/c++ img.jpg' },
    { title: 'Python Programming', description: 'Repellat, voluptatibus.', category: 'Programming', image: 'images/python img.jpg' },
    { title: 'Java Fundamentals', description: 'Lorem ipsum dolor, sit amet consectetur.', category: 'Programming', image: 'images/java img.jpg' },
    { title: 'PHP', description: 'Lorem ipsum dolor, sit amet consectetur.', category: 'Programming', image: 'images/php img.jpg' },
    { title: 'C++ Data Structures', description: 'Lorem ipsum dolor, sit amet consectetur.', category: 'Programming', image: 'images/c++ img.jpg' },
    { title: 'Power of Mind Control', description: 'Repellat, voluptatibus.', category: 'Motivational', image: 'images/m power of mind.jpg' },
    { title: 'Important Comic Book', description: 'Lorem ipsum dolor, sit amet consectetur.', category: 'Comics', image: 'images/c comic.jpg' },
    { title: 'The Batman', description: 'Lorem ipsum dolor, sit amet consectetur.', category: 'Comics', image: 'images/c batmen.jpg' },
    { title: 'How Design Makes Us Think', description: 'Repellat, voluptatibus.', category: 'Designing', image: 'images/d how design makes.jpg' },
];

// Toggle Navbar Functionality
const navbarVertical = document.getElementById("navt");
navbarVertical.style.height = '0%';
function toggle() {
    if (navbarVertical.style.height === '0%') {
        navbarVertical.style.height = '50%';
    } else {
        navbarVertical.style.height = '0%';
    }
}

// Display Books
const bookContainer = document.getElementById('booknamesearch');
function displayBooks(filterCategory = 'All', searchTerm = '') {
    bookContainer.innerHTML = '';
    books.forEach((book) => {
        if (
            (filterCategory === 'All' || book.category === filterCategory) &&
            (book.title.toUpperCase().includes(searchTerm) || book.description.toUpperCase().includes(searchTerm))
        ) {
            const bookElement = `
                <div class="latest-col">
                    <div class="limg"><img src="${book.image}" alt="${book.title}"></div>
                    <div class="info">
                        <h3>${book.title}</h3>
                        <p>${book.description}</p>
                        <button class="btnn" onclick="borrowBook('${book.title}')">Borrow</button>
                    </div>
                </div>
            `;
            bookContainer.innerHTML += bookElement;
        }
    });
}

// Search Functionality
const myInput = document.getElementById("myInput");
myInput.addEventListener("input", function() {
    const searchTerm = myInput.value.toUpperCase();
    const filterCategory = document.getElementById('categoryFilter').value;
    displayBooks(filterCategory, searchTerm);
});

// Category Filtering
const categoryFilter = document.getElementById('categoryFilter');
categoryFilter.addEventListener('change', function() {
    const filterCategory = categoryFilter.value;
    const searchTerm = myInput.value.toUpperCase();
    displayBooks(filterCategory, searchTerm);
});

// Borrowing Functionality
const historyList = document.getElementById('historyList');
function borrowBook(bookTitle) {
    const timestamp = new Date().toLocaleString();
    historyList.innerHTML += `<li>You borrowed "${bookTitle}" on ${timestamp}</li>`;
}

// Initial Display of Books
displayBooks();
