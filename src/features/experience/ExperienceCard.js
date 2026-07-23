import { applyStyles } from "../../utils/applyStyles";
import styles from "./ExperienceCard.module.css";

const stylesMap = {
	".card": "card",
	".header": "header",
	".wrapper": "wrapper",
	".company-image": "company-image",
	".company-info": "company-info",
	".company": "company",
	".role": "role",
	".description": "description",
	".container-period": "container-period",
	".period": "period",
	".duration": "duration",
	".responsabilities-container": "responsabilities-container",
	".responsabilities-title": "responsabilities-title",
	".responsabilities-list": "responsabilities-list",
	".technologies-container": "technologies-container",
	".technologies-list": "technologies-list",
	".technologies-item": "technologies-item",
};

export function createExperienceCard(experience) {
	const template = document.querySelector("#experience-card-template");
	const card = template.content.cloneNode(true);

	card.querySelector(".company-image").setAttribute("src", experience.image);
	card.querySelector(".company-image").setAttribute("alt", `Logo ${experience.company}`);
	card.querySelector(".company").textContent = experience.company;
	card.querySelector(".role").textContent = experience.role;
	card.querySelector(".description").textContent = experience.description;
	card.querySelector(".period").textContent = experience.period;
	card.querySelector(".duration").textContent = experience.duration;

	const responsabilities = card.querySelector(".responsabilities-list");
	const techList = card.querySelector(".technologies-list");

	experience.responsabilities.forEach((responsabilitie) => {
		const li = document.createElement("li");
		const strong = document.createElement("strong");

		strong.textContent = `${responsabilitie.title}: `;

		li.appendChild(strong);
		li.appendChild(document.createTextNode(responsabilitie.text));

		responsabilities.appendChild(li);
	});

	experience.technologies.forEach((tech) => {
		const li = document.createElement("li");
		li.textContent = tech;
		li.classList.add("technologies-item");
		techList.appendChild(li);
	});

	applyStyles(card, stylesMap, styles);

	return card;
}
