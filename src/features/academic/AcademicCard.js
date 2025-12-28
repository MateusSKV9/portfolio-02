import styles from "./Academic.module.css";

export function createAcademicCard(academic) {
	const template = document.querySelector("#academic-card-template");

	const card = template.content.cloneNode(true);

	card.querySelector(".company").textContent = academic.company;
	card.querySelector(".period").textContent = academic.period;
	card.querySelector(".course").textContent = academic.course;
	card.querySelector(".description").textContent = academic.description;

	return card;
}
