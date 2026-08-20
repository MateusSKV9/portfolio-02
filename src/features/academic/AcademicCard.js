import styles from "./Academic.module.css";
import { applyStyles } from "./../../utils/applyStyles";

export function createAcademicCard(academic) {
	const template = document.querySelector("#academic-card-template");
	const cardFragment = template.content.cloneNode(true);
	const groupElement = cardFragment.querySelector(".group");

	groupElement.setAttribute("data-aos", "zoom-in");

	const position = academic.position === "right" ? "right" : "left";
	const coursing = academic.status === "Cursando" ? "status" : "";

	applyStyles(
		cardFragment,
		{
			".group": `group ${position}`,
			".logo": "logo",
			".card": "card",
			".header": "header",
			".institution": "institution",
			".period": "period",
			".course": "course",
			".description": "description",
			".status": coursing,
		},
		styles
	);

	cardFragment.querySelector(".institution").textContent = academic.institution;
	cardFragment.querySelector(".period").textContent = academic.period;
	cardFragment.querySelector(".course").textContent = academic.course;
	cardFragment.querySelector(".description").textContent = academic.description;
	cardFragment.querySelector(".logo").setAttribute("src", academic.image);
	cardFragment.querySelector(".logo").setAttribute("alt", `Logo ${academic.institution}`);
	cardFragment.querySelector(".status").textContent = academic.status;

	return cardFragment;
}
