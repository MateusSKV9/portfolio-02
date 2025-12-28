import styles from "./ExperienceCard.module.css";

export function createExperienceCard(experience) {
	const template = document.querySelector("#experience-card-template");
	const card = template.content.cloneNode(true);

	card.querySelector(".card").classList.add(styles.card);
	card.querySelector(".header").classList.add(styles.header);
	card.querySelector(".technologies").classList.add(styles.technologies);

	card.querySelector(".company").textContent = experience.company;
	card.querySelector(".period").textContent = experience.period;
	card.querySelector(".role").textContent = experience.role;
	card.querySelector(".description").textContent = experience.description;

	const techList = card.querySelector(".technologies");

	experience.technologies.forEach((tech) => {
		const li = document.createElement("li");
		li.textContent = tech;
		techList.appendChild(li);
	});

	return card;

}