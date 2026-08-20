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
	".responsibilities-container": "responsibilities-container",
	".responsibilities-title": "responsibilities-title",
	".responsibilities-list": "responsibilities-list",
	".technologies-container": "technologies-container",
	".technologies-list": "technologies-list",
	".technologies-item": "technologies-item",
};
export function createExperienceCard(experience) {
	const template = document.querySelector("#experience-card-template");
	const cardFragment = template.content.cloneNode(true);
	const cardElement = cardFragment.querySelector(".card");

	cardElement.setAttribute("data-aos", "fade-up");

	cardElement.querySelector(".company-image").setAttribute("src", experience.image);
	cardElement.querySelector(".company-image").setAttribute("alt", `Logo ${experience.company}`);
	cardElement.querySelector(".company").textContent = experience.company;
	cardElement.querySelector(".role").textContent = experience.role;
	cardElement.querySelector(".description").textContent = experience.description;
	cardElement.querySelector(".period").textContent = experience.period;
	cardElement.querySelector(".duration").textContent = experience.duration;

	const responsibilities = cardElement.querySelector(".responsibilities-list");
	const techList = cardElement.querySelector(".technologies-list");

	experience.responsibilities.forEach((responsibility) => {
		const li = document.createElement("li");
		const strong = document.createElement("strong");

		strong.textContent = `${responsibility.title}: `;

		li.appendChild(strong);
		li.appendChild(document.createTextNode(responsibility.text));

		responsibilities.appendChild(li);
	});

	experience.technologies.forEach((tech) => {
		const li = document.createElement("li");
		li.textContent = tech;
		li.classList.add("technologies-item");
		techList.appendChild(li);
	});

	applyStyles(cardFragment, stylesMap, styles);

	return cardFragment;
}
