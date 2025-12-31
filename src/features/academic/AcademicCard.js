import styles from "./Academic.module.css";
import { applyStyles } from "./../../utils/applyStyles";

export function createAcademicCard(academic) {
	const template = document.querySelector("#academic-card-template");
	const card = template.content.cloneNode(true);

	const position = academic.position === "right" ? "right" : "left";
	const coursing = academic.status === "Cursando" ? "status" : "";

	applyStyles(
		card,
		{
			".group": `group ${position}`,
			".logo": "logo",
			".card": "card",
			".header": "header",
			".instution": "instution",
			".period": "period",
			".course": "course",
			".description": "description",
			".logo": "logo",
			".status": coursing,
		},
		styles
	);

	card.querySelector(".instution").textContent = academic.instution;
	card.querySelector(".period").textContent = academic.period;
	card.querySelector(".course").textContent = academic.course;
	card.querySelector(".description").textContent = academic.description;
	card.querySelector(".logo").setAttribute("src", academic.image);
	card.querySelector(".logo").setAttribute("alt", `Logo ${academic.instution}`);
	card.querySelector(".status").textContent = academic.status;

	return card;
}
