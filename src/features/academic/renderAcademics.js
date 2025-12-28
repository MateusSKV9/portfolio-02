import { createAcademicCard } from "./AcademicCard";

export function renderAcademics(academics) {
	const container = document.querySelector(".academic-timeline");

	if (!container) return;
	const fragment = document.createDocumentFragment();

	academics.forEach((academic) => {
		const card = createAcademicCard(academic);
		fragment.appendChild(card);
	});

	container.appendChild(fragment);
}
