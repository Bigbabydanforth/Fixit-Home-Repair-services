function toggleMenu() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        }

        function search() {
            const searchInput = document.getElementById('searchInput').value;
            if (searchInput.trim()) {
                alert('Searching for: ' + searchInput);
                // Add your search logic here
            } else {
                alert('Please enter a search term');
            }
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.querySelector('.hamburger');
            const navContainer = document.querySelector('.nav-container');
            
            if (!navContainer.contains(event.target) && mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });

        let currentIndex = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slides img").length;

  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
  }

  // Optional: auto-slide every 5 seconds
  setInterval(() => moveSlide(1), 5000);