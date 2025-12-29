export function applySavedTheme() {
	const currentTheme = localStorage.getItem("theme") || "light";
	document.documentElement.setAttribute("data-theme", currentTheme);
}

export function initTheme() {
	const themeBtn = document.querySelector(".header__icon");
	if (!themeBtn) return;

	const activeTheme = document.documentElement.getAttribute("data-theme");
	updateIcon(themeBtn, activeTheme);

	themeBtn.addEventListener("click", (e) => {
		const current = document.documentElement.getAttribute("data-theme");
		const next = current === "light" ? "dark" : "light";

		document.documentElement.setAttribute("data-theme", next);
		localStorage.setItem("theme", next);
		updateIcon(e.currentTarget, next);
	});
}

function updateIcon(btn, theme) {
	const isDark = theme === "dark";
	btn.classList.toggle("fa-moon", isDark);
	btn.classList.toggle("fa-sun", !isDark);
}
