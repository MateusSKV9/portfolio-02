import styles from "./Project.module.css";
import { applyStyles } from "./../../utils/applyStyles";

export function createProjectCard(project) {
	const template = document.querySelector("#project-card-template");

	const card = template.content.cloneNode(true);

	applyStyles(
		card,
		{
			".card": "card",
			".header": "header",
			".body": "body",
			".content": "content",
			".info": "info",
			".image": "image",
			".languages": "languages",
			".container-links": "container-links",
			".academic-link": "academic-link",
		},
		styles
	);

	card.querySelector(".name").textContent = project.name;
	card.querySelector(".description").textContent = project.description;
	card.querySelector(".image").setAttribute("src", project.image);

	return card;
}
