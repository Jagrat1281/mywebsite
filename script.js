document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const gridItems = document.querySelectorAll('.grid_container .item');

    // Event listener for the search button
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        filterProperties(query);
    });

    // Function to filter properties based on the search query
    function filterProperties(query) {
        gridItems.forEach(item => {
            const address = item.querySelector('p').textContent.toLowerCase();
            const price = item.querySelector('h3').textContent.toLowerCase();

            if (address.includes(query) || price.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Add an event listener for the search input field to filter as user types
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        filterProperties(query);
    });
});
