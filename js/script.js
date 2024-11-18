document.addEventListener('DOMContentLoaded', () => {
    const favoriteBtn = document.querySelector('#favorite-btn');

    // Khi người dùng bấm vào nút "Sở thích"
    favoriteBtn.addEventListener('click', () => {
        window.location.href = 'favorites.html'; // Chuyển đến trang sở thích
    });
});
