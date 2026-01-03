import styles from "./Project.module.css";
import { applyStyles } from "./../../utils/applyStyles";
import { techIcons } from "./icons";

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

function createSVG(svgString) {
	const div = document.createElement("div");
	div.innerHTML = svgString.trim();
	return div.firstChild;
}

export function createProjectCard(project) {
	const template = document.querySelector("#project-card-template");
	const card = template.content.cloneNode(true);

	applyStyles(card, stylesMap, styles);

	card.querySelector(".name").textContent = project.name;
	card.querySelector(".description").textContent = project.description;
	card.querySelector(".image").setAttribute("src", project.image);
	card.querySelector(".deploy-link").setAttribute("href", project.deployLink);
	card.querySelector(".code-link").setAttribute("href", project.codeLink);

	const technologiesList = card.querySelector(".technologies-list");

	project.technologies.forEach((technology) => {
		const techKey = technology.toLowerCase();
		const svgString = techIcons[techKey];

		if (svgString) {
			const li = document.createElement("li");
			const svg = createSVG(svgString);

			if (styles["icon"]) svg.classList.add(styles["icon"]);
			svg.classList.add(`icon-${techKey}`);

			li.setAttribute("title", technology);
			li.appendChild(svg);
			technologiesList.appendChild(li);
		}
	});

	return card;
}
