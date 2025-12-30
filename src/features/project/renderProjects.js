import { createProjectCard } from "./ProjectCard";

export function renderProjects(projects) {
	const container = document.querySelector(".project__container");

	if (!container) return;
	const fragment = document.createDocumentFragment();

	projects.forEach((project) => {
		const card = createProjectCard(project);
		fragment.appendChild(card);
	});

	container.appendChild(fragment);
}
