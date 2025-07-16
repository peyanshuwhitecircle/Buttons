 const sectors = document.querySelectorAll('.sector');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const caption = document.getElementById('caption');
    const closeModal = document.getElementById('closeModal');

    sectors.forEach(sector => {
      sector.addEventListener('click', () => {
        const img = sector.querySelector('img');
        const heading = sector.querySelector('h2');
        modalImg.src = img.src;
        caption.textContent = heading.textContent;
        modal.style.display = 'block';
      });
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });