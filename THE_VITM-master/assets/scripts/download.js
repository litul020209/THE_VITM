// Array of downloadable items
const downloadItems = [
    {
      title: 'Course Catalog',
      file: 'files/course-catalog.pdf',
      icon: 'icons/pdf-icon.png'
    },
    {
      title: 'Research Papers',
      file: 'files/research-papers.pdf',
      icon: 'icons/pdf-icon.png'
    },
    {
      title: 'Annual Report',
      file: 'files/annual-report.pdf',
      icon: 'icons/pdf-icon.png'
    }
    // Add more items here as needed
  ];
  
  // Function to load the download items into the container
  function loadDownloadItems() {
    const downloadsContainer = document.querySelector('.downloads');
    downloadsContainer.innerHTML = ''; // Clear existing items
  
    // Loop through each item and create HTML structure
    downloadItems.forEach(item => {
      const downloadItemDiv = document.createElement('div');
      downloadItemDiv.classList.add('download-item');
  
      const title = document.createElement('h3');
      title.textContent = item.title;
  
      const form = document.createElement('form');
      form.setAttribute('action', item.file);
      form.setAttribute('method', 'get');
  
      const button = document.createElement('button');
      button.classList.add('download-btn');
      button.setAttribute('type', 'submit');
  
      const icon = document.createElement('img');
      icon.classList.add('icon');
      icon.setAttribute('src', item.icon);
      icon.setAttribute('alt', 'PDF icon');
  
      button.appendChild(icon);
      button.appendChild(document.createTextNode(` Download ${item.title}`));
      form.appendChild(button);
  
      downloadItemDiv.appendChild(title);
      downloadItemDiv.appendChild(form);
      downloadsContainer.appendChild(downloadItemDiv);
    });
  }
  
  // Function to handle the download confirmation
  function addDownloadListeners() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the form submission
        const downloadLink = event.target.closest('form').getAttribute('action');
        if (confirm("Do you want to download this file?")) {
          window.location.href = downloadLink; // Proceed with download
        }
      });
    });
  }
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', () => {
    loadDownloadItems();     // Load items dynamically
    addDownloadListeners();   // Add click event listeners for download confirmation
  });
  