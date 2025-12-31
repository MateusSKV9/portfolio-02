export function initToggleMenu() {
	const nav = document.querySelector(".header__nav");

	setVisibilityBtnToggleMenu();

	window.addEventListener("click", (e) => {
		const isClickBtnToggleMenu = e.target.closest(".toggle-menu");
		const isClickInsideNav = e.target.closest(".header__nav");
		const isCLickInsideHeaderItem = e.target.closest(".header__item");

		if (isClickBtnToggleMenu) {
			nav.classList.toggle("hidden");
			return;
		}

		if (isCLickInsideHeaderItem) nav.classList.add("hidden");

		if (!nav.classList.contains("hidden") && !isClickInsideNav) nav.classList.add("hidden");
	});
}

export function initWindowResize() {
	window.addEventListener("resize", setVisibilityBtnToggleMenu);
}

function setVisibilityBtnToggleMenu() {
	const nav = document.querySelector(".header__nav");

	const toggleMenu = document.querySelector(".toggle-menu");
	if (window.innerWidth > 600) {
		toggleMenu.classList.add("hidden-icon");
		nav.classList.remove("hidden");
	} else {
		toggleMenu.classList.remove("hidden-icon");
	}
}
