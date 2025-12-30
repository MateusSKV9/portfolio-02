import { academics, renderAcademics } from "./features/academic";
import { experiences, renderExperiences } from "./features/experience";
import { projects, renderProjects } from "./features/project";
import { applySavedTheme, initTheme } from "./utils/theme";

applySavedTheme;

document.addEventListener("DOMContentLoaded", () => {
	renderProjects(projects);
	renderAcademics(academics);
	renderExperiences(experiences);

	initTheme();

	const headerHeight = 100;

	const sections = document.querySelectorAll("section[id], footer[id]");
	const links = document.querySelectorAll(".header__link");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute("id");

					links.forEach((link) => {
						link.classList.remove("header__link--active");

						if (link.getAttribute("href") === `#${id}`) {
							link.classList.add("header__link--active");
						}
					});
				}
			});
		},
		{
			rootMargin: `-${headerHeight}px 0px -40% 0px`,
			threshold: 0.1,
		}
	);

	sections.forEach((section) => observer.observe(section));
	initLoader();
});
