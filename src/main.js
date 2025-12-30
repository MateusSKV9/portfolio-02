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
});
