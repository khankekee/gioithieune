// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6EHqFQzP0MCptqhErNA6vw8rgrRikRzg",
  authDomain: "khenhdeptrai-23dbb.firebaseapp.com",
  databaseURL: "https://khenhdeptrai-23dbb-default-rtdb.firebaseio.com",
  projectId: "khenhdeptrai-23dbb",
  storageBucket: "khenhdeptrai-23dbb.firebasestorage.app",
  messagingSenderId: "541773518873",
  appId: "1:541773518873:web:536ff1ff727f585b7b7288",
  measurementId: "G-QZJGM7QMLM"
};

// Khởi tạo Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app); // Sử dụng Realtime Database

// Lắng nghe sự kiện khi form được submit
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("myForm");
    const interestingInput = document.getElementById("interestingInput");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Lấy dữ liệu từ form
        const userAnswer = interestingInput.value;
        const userName = localStorage.getItem('userName') || "Anonymous";

        // Tạo đối tượng dữ liệu
        const userData = {
            name: userName,
            interestingThing: userAnswer,
            timestamp: new Date().toISOString()
        };

        // Lưu vào Firebase Realtime Database
        const databaseRef = firebase.database().ref("user_responses"); // Tham chiếu đến node 'user_responses'
        databaseRef.push(userData)
            .then(() => {
                alert("Dữ liệu đã được lưu thành công!");
                interestingInput.value = ""; // Xóa ô nhập
            })
            .catch((error) => {
                console.error("Lỗi khi lưu dữ liệu:", error);
            });
    });
});
