// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    
    setTimeout(() => {
      if (success) {
        resolve("Promise resolved successfully!");
      } else {
        reject("Promise rejected!");
      }
    }, 2000);
  });
  
  // Using the Promise
  myPromise
    .then((message) => {
      console.log(message); // "Promise resolved successfully!" after 2 seconds
    })
    .catch((error) => {
      console.error(error); // If success was false, this would log "Promise rejected!"
    })
    .finally(() => {
      console.log("Promise settled (either resolved or rejected).");
    });
  
  // Output:
  // (after 2 seconds)
  // Promise resolved successfully!
  // Promise settled (either resolved or rejected).
  