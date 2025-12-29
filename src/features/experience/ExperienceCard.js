import { applyStyles } from "../../utils/applyStyles";
import styles from "./ExperienceCard.module.css";

export function createExperienceCard(experience) {
	const template = document.querySelector("#experience-card-template");
	const card = template.content.cloneNode(true);

	applyStyles(
		card,
		{
			".card": "card",
			".header": "header",
			".wrapper": "wrapper",
			".company-image": "company-image",
			".compony-info": "compony-info",
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
		},
		styles
	);

	card.querySelector(".company-image").setAttribute("src", experience.image);
	card.querySelector(".company").textContent = experience.company;
	card.querySelector(".role").textContent = experience.role;
	card.querySelector(".description").textContent = experience.description;
	card.querySelector(".period").textContent = experience.period;
	card.querySelector(".duration").textContent = experience.duration;

	const responsabilities = card.querySelector(".responsabilities-list");
	const techList = card.querySelector(".technologies-list");

	experience.responsabilities.forEach((responsabilitie) => {
		const li = document.createElement("li");
		li.textContent = responsabilitie;

		responsabilities.appendChild(li);
	});

	experience.technologies.forEach((tech) => {
		const li = document.createElement("li");
		li.textContent = tech;
		li.classList.add("technologies-item");
		techList.appendChild(li);
	});

	return card;
}
