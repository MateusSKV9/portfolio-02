import { academics, renderAcademics } from "./features/academic";
import { experiences, renderExperiences } from "./features/experience";
import { projects, renderProjects } from "./features/project";

document.addEventListener("DOMContentLoaded", () => {
	renderProjects(projects);
	renderAcademics(academics);
	renderExperiences(experiences);
});
