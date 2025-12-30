import { academics, renderAcademics } from "./features/academic";
import { experiences, renderExperiences } from "./features/experience";
import { projects, renderProjects } from "./features/project";
import { initLoader } from "./utils/loader";
import { initActiveMenuObserver } from "./utils/scroll";
import { applySavedTheme, initTheme } from "./utils/theme";

applySavedTheme();

document.addEventListener("DOMContentLoaded", () => {
	renderProjects(projects);
	renderAcademics(academics);
	renderExperiences(experiences);

	initTheme();
	initActiveMenuObserver();
	initLoader();

	const btn = document.querySelector(".toggle-menu");
	const nav = document.querySelector(".header__nav");
	const header = document.querySelector(".header");
	btn.addEventListener("click", () => {
		nav.classList.toggle("hidden");
		if (!nav.classList.contains("hidden")) {
			header.classList.remove("active");
		} else {
			header.classList.add("active");
		}
	});

	window.addEventListener("resize", () => {
		const toggleMenu = document.querySelector(".toggle-menu");
		if (window.innerWidth > 600) {
			toggleMenu.classList.add("hidden");
			nav.classList.remove("hidden");
		} else {
			toggleMenu.classList.remove("hidden");
		}
	});

	const toggleMenu = document.querySelector(".toggle-menu");
	if (window.innerWidth > 600) {
		toggleMenu.classList.add("hidden");
		nav.classList.remove("hidden");
	} else {
		toggleMenu.classList.remove("hidden");
	}

	// window.addEventListener("click", (e) => {
	// 	// Verifica se o clique foi na nav ou em qualquer coisa DENTRO da nav
	// 	const isClickInsideNav = e.target.closest(".header_nav");

	// 	if (isClickInsideNav) {
	// 		// Clique foi dentro da nav
	// 		console.log("Clicou dentro!");
	// 	} else {
	// 		// Clique foi fora da nav (útil para fechar menus)
	// 		nav.classList.add("hidden");
	// 		header.classList.remove("active");
	// 	}
	// });
});
