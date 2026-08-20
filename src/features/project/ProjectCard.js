import styles from "./Project.module.css";
import { applyStyles } from "./../../utils/applyStyles";
import { techIcons } from "../../assets/icons/icons";
import { createSVG } from "../../utils/generateSvg";

const stylesMap = {
	".card-wrapper": "card-wrapper", // Mapeia o wrapper se precisar de CSS nele
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

export function createProjectCard(project) {
	const template = document.querySelector("#project-card-template");
	const cardFragment = template.content.cloneNode(true);

	const wrapperElement = cardFragment.querySelector(".card-wrapper");
	const cardElement = cardFragment.querySelector(".card");

	applyStyles(cardFragment, stylesMap, styles);

	wrapperElement.setAttribute("data-aos", "fade-up");
	wrapperElement.setAttribute("data-aos-easing", "linear");
	wrapperElement.setAttribute("data-aos-duration", "300");
	wrapperElement.setAttribute("data-aos-anchor-placement", "top-bottom");

	cardElement.querySelector(".name").textContent = project.name;
	cardElement.querySelector(".description").textContent = project.description;
	cardElement.querySelector(".image").setAttribute("src", project.image);
	cardElement.querySelector(".image").setAttribute("alt", project.name);
	cardElement.querySelector(".deploy-link").setAttribute("href", project.deployLink);
	cardElement.querySelector(".code-link").setAttribute("href", project.codeLink);

	const technologiesList = cardElement.querySelector(".technologies-list");

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

	return cardFragment;
}
