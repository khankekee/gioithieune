document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("myForm");
    const interestingInput = document.getElementById("interestingInput");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Lấy dữ liệu từ form
        const userAnswer = interestingInput.value;
        const userName = localStorage.getItem('userName') || "Anonymous";

        // Tạo một đối tượng dữ liệu
        const userData = {
            name: userName,
            interestingThing: userAnswer,
            timestamp: new Date().toISOString()
        };

        // Lưu vào Firebase Database
        const databaseRef = firebase.database().ref("user_responses");
        databaseRef.push(userData)
            .then(() => {
                alert("Dữ liệu đã được lưu thành công!");
                interestingInput.value = ""; // Xóa ô input
            })
            .catch((error) => {
                console.error("Lỗi khi lưu dữ liệu:", error);
            });
    });
});
