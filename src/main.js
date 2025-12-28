import { academics, renderAcademics } from "./features/academic";
import { experiences, renderExperiences } from "./features/experience";

document.addEventListener("DOMContentLoaded", () => {
	renderAcademics(academics);
	renderExperiences(experiences);
});
