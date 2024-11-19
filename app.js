document.addEventListener('DOMContentLoaded', () => {
    const additionalInput = document.getElementById('additionalInput');
    const responseMessage = document.getElementById('responseMessage');
    const correctText = "Còn thiếu dòng 'tớ là người đẹp trai nhất' ở đoạn giới thiệu kìa"; // Câu chuẩn bạn muốn nhập

    // Hàm tự động sửa và kiểm tra khi người dùng gõ
    function handleInput(event) {
        const inputValue = additionalInput.value;

        // Nếu người dùng nhập sai, tự động sửa lại cho đúng theo câu chuẩn
        if (inputValue !== correctText.substring(0, inputValue.length)) {
            additionalInput.value = correctText.substring(0, inputValue.length);
        }

        // Kiểm tra nếu câu nhập vào đã đúng hoàn toàn
        if (additionalInput.value === correctText) {
            responseMessage.textContent = "TỚ BIẾT MÀ"; // Hiển thị thông điệp
            responseMessage.style.fontSize = "24px";  // Đổi kích thước chữ
            responseMessage.style.fontWeight = "bold"; // In đậm chữ
            responseMessage.style.color = "#FF9398"; // Thay đổi màu cho thông điệp
        } else {
            responseMessage.textContent = ""; // Nếu chưa hoàn chỉnh, ẩn thông điệp
        }
    }

    // Lắng nghe sự kiện input khi người dùng gõ vào ô
    additionalInput.addEventListener('input', handleInput);
});
