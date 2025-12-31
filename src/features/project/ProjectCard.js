import styles from "./Project.module.css";
import { applyStyles } from "./../../utils/applyStyles";

const stylesMap = {
	".card": "card",
	".header": "header",
	".body": "body",
	".content": "content",
	".info": "info",
	".image": "image",
	".technologies-list": "technologies-list",
	".container-links": "container-links",
	".academic-link": "academic-link",
};

const techList = {
	react: "devicon-react-original",
	angular: "devicon-angularjs-plain",
	typescript: "devicon-typescript-plain",
	javascript: "devicon-javascript-plain",
	html: "devicon-html5-plain",
	css: "devicon-css3-plain",
};

export function createProjectCard(project) {
	const template = document.querySelector("#project-card-template");
	const card = template.content.cloneNode(true);

	applyStyles(card, stylesMap, styles);

	card.querySelector(".name").textContent = project.name;
	card.querySelector(".description").textContent = project.description;
	card.querySelector(".image").setAttribute("src", project.image);
  card.querySelector(".deploy-link").setAttribute("href", project.deployLink)
  card.querySelector(".code-link").setAttribute("href", project.codeLink)

	const technologiesList = card.querySelector(".technologies-list");

	project.technologies.forEach((technology) => {
		const li = document.createElement("li");
		const i = document.createElement("i");
		i.setAttribute("title", technology);

		const techClass = techList[technology];
		if (techClass) i.classList.add(`${techClass}`, `icon-${technology}`);

		li.appendChild(i);
		technologiesList.appendChild(li);
	});

	return card;
}
