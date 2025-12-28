import { createExperienceCard } from "./ExperienceCard.js";

export function renderExperiences(experiences) {
	const container = document.querySelector(".experience-container");
	if (!container) return;

	const fragment = document.createDocumentFragment();

	experiences.forEach((exp) => {
		fragment.appendChild(createExperienceCard(exp));
	});

	container.appendChild(fragment);
}
