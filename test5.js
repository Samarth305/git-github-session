import readline from 'readline';

async function fetchGitHubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error(`User "${username}" not found!`);
        }

        const data = await response.json();
        console.log("Username:", data.login);
        console.log("Name:", data.name || "No name provided");
        console.log("Public Repos:", data.public_repos);
        console.log("Followers:", data.followers);
        console.log("Profile URL:", data.html_url);
        console.log("---------------------------");
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter GitHub username: ", async (username) => {
    await fetchGitHubUser(username);
    rl.close();
});
