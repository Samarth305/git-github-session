function getTime() {
    return new Date().toLocaleTimeString();
}

function fetchDataFromAPI(callback) {
    console.log(`[${getTime()}] Fetching data from API...`);
    setTimeout(() => {
        const data = { id: 1, name: "Vraj", role: "Developer" };
        console.log(`[${getTime()}] Data retrieved!`);
        callback(data);
    }, 2000); 
}

function displayData(data) {
    console.log(`[${getTime()}] Displaying Data:`, data);
}

fetchDataFromAPI(displayData);

function fetchUser(callback) {
    console.log(`[${getTime()}] Starting user data fetch...`);
    setTimeout(() => {
        console.log(`[${getTime()}] User data fetched`);
        callback({ userId: 101, username: "John Doe" });
    }, 1000);
}

function fetchPosts(user, callback) {
    console.log(`[${getTime()}] Fetching posts for ${user.username}...`);
    setTimeout(() => {
        console.log(`[${getTime()}] Posts fetched for ${user.username}`);
        callback(["Post 1", "Post 2", "Post 3"]);
    }, 3000);
}

function displayPosts(posts) {
    console.log(`[${getTime()}] User Posts:`, posts);
}

fetchUser((user) => {
    fetchPosts(user, (posts) => {
        displayPosts(posts);
    });
});
