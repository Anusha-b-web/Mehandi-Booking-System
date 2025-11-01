// ✅ Ensure Firebase is available before using it
window.onload = function () {

    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyC2cvUMQdGJfbjN5ZVrEDEPtmmAImSzXJk",
        authDomain: "calendar-ec775.firebaseapp.com",
        databaseURL: "https://calendar-ec775-default-rtdb.firebaseio.com",
        projectId: "calendar-ec775",
        storageBucket: "calendar-ec775.firebasestorage.app",
        messagingSenderId: "951642055790",
        appId: "1:951642055790:web:1ee4c6064bd31ae56cb27f",
        measurementId: "G-5YGW140Z7F"
    };

    // ✅ Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    // ✅ Function to book a date
    function bookDate() {
        let date = document.getElementById("bookingDate").value;

        if (!date) {
            alert("Please select a date!");
            return;
        }

        // Save booking in Firebase
        db.ref("bookings/" + date).set({ booked: true })
            .then(() => {
                alert("Booking confirmed for " + date);
                loadBookings(); // Refresh booked dates
            })
            .catch(error => console.error("Error:", error));
    }

    // ✅ Function to load booked dates and highlight them
    function loadBookings() {
        db.ref("bookings").once("value", snapshot => {
            const bookingsList = document.getElementById("bookingsList");
            bookingsList.innerHTML = ""; // Clear previous list

            if (snapshot.exists()) {
                snapshot.forEach(childSnapshot => {
                    let bookedDate = childSnapshot.key;
                    let listItem = document.createElement("li");
                    listItem.textContent = bookedDate;
                    listItem.style.color = "red"; // Highlight booked dates
                    bookingsList.appendChild(listItem);
                });
            }
        });
    }

    // ✅ Attach event listener to button
    document.getElementById("bookNow").addEventListener("click", bookDate);

    // ✅ Load booked dates on page load
    loadBookings();
};
