/* eslint-disable no-console */
const intervalId = setInterval(() => {
	console.log("Sending Analytics...");
}, 2000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
	clearInterval(intervalId);
});
