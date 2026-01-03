import imageCepedi from "./../../assets/images/academic/cepedi-logo.webp";
import imageUesb from "./../../assets/images/academic/uesb-logo.webp";
import imageCegesp from "./../../assets/images/experience/cegesp-logo.webp";

export const experiences = [
	{
		company: "UESB/CEGESP",
		period: "Abr/2025 – Dez/2025",
		duration: "(6 meses)",
		image: imageCegesp,
		role: "Desenvolvedor Frontend",
		description: "Centro de Estudos em Gestão Pública - CEGESP/UESB",
		responsabilities: [
			"Atuei como desenvolvedor web em um projeto voltado à consulta de documentos do CEGESP.",
			"Desenvolvi interfaces responsivas e sob medida.",
			"Colaborei na construção do backend, utilizando JavaScript e SQLite para simulação de banco de dados.",
		],
		technologies: ["JavaScript", "HTML", "CSS", "SQLite"],
	},
	{
		company: "UESB",
		period: "Set/2025 – Dez/2025",
		duration: "(4 meses)",
		image: imageUesb,
		role: "Monitor de Programação",
		description: "Linguagem de Programação I - Fundamentos",
		responsabilities: [
			"Apoiei alunos no entendimento de lógica de programação, funções, estruturas de repetição e ponteiros.",
			"Auxiliei na resolução e depuração de exercícios práticos.",
			"Reforcei conceitos fundamentais aplicáveis a outras linguagens, como JavaScript.",
		],
		technologies: ["C", "C++"],
	},
	{
		company: "CEPEDI/Softex",
		period: "Jan/2025 – Out/2025",
		duration: "(10 meses)",
		image: imageCepedi,
		role: "Designer UI/UX",
		description: "Residência Tecnológica - 2ª Fase",
		responsabilities: [
			"Desenvolvi protótipos intuitivos para um aplicativo mobile voltado a maquininhas de pagamento (POS).",
			"O projeto teve como objetivo auxiliar pessoas cegas e com baixa visão a realizarem pagamentos via cartão.",
			"Desenvolvi o design com forte viés de acessibilidade, priorizando usabilidade, contraste e legibilidade.",
		],
		technologies: ["Figma", "Miro"],
	},
];
