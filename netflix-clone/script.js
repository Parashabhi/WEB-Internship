// Function to insert necessary sections
function insertSections() {
    const main = document.querySelector('main');

    // Create a section for featured content
    const featuredSection = document.createElement('section');
    featuredSection.classList.add('featured');
    featuredSection.innerHTML = '<h2>Featured Content</h2><p>This is some featured content...</p>';
    main.appendChild(featuredSection);

    // Create a section for trending content
    const trendingSection = document.createElement('section');
    trendingSection.classList.add('trending');
    trendingSection.innerHTML = '<h2>Trending Now</h2><p>This is some trending content...</p>';
    main.appendChild(trendingSection);

    // Create more sections as needed
    const sectionNames = ['Drama', 'Comedy', 'Action', 'Documentaries']; // Example section names
    sectionNames.forEach(sectionName => {
        const section = document.createElement('section');
        section.classList.add('category');
        section.innerHTML = `<h2>${sectionName}</h2><p>This is some ${sectionName.toLowerCase()} content...</p>`;
        main.appendChild(section);
    });
}

// Call the function to insert sections
insertSections();

// Function to add a background image
function setBackgroundImage() {
    document.body.style.backgroundImage = 'url("background_image.jpg")';
}

// Call the function to set background image
setBackgroundImage();
