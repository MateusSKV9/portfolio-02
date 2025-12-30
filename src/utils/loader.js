export function initLoader() {
	window.addEventListener("load", () => {
		const loader = document.getElementById("loading-screen");
		if (loader) {
			loader.classList.add("loading-screen--hidden");

			setTimeout(() => loader.remove(), 500);
		}
	});
}
