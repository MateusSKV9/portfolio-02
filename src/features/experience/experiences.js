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
		responsibilities: [
			{
				title: "Desenvolvimento Frontend",
				text: "Implementei telas e componentes responsivos em JavaScript, HTML e CSS para o sistema de consulta de documentos do CEGESP, garantindo fidelidade ao layout e boa navegabilidade.",
			},
			{
				title: "Apoio na Integração com Banco",
				text: "Colaborei no desenvolvimento do backend em JavaScript, auxiliando no consumo e estruturação de dados com SQLite para as rotas de busca de documentos.",
			},
			{
				title: "Trabalho em Equipe",
				text: "Atuei em conjunto com mais dois desenvolvedores na divisão de tarefas, versionamento de código e alinhamento de requisitos do projeto.",
			},
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
		responsibilities: [
			{
				title: "Suporte Técnico e Lógica",
				text: "Orientei estudantes na resolução de problemas algorítmicos, cobrindo conceitos essenciais de C e C++ como ponteiros, alocação dinâmica de memória, funções e estruturas de controle.",
			},
			{
				title: "Code Review e Debugging",
				text: "Auxiliei na identificação e depuração de erros de compilação, memory leaks e lógica em projetos práticos, incentivando boas práticas de escrita de código.",
			},
			{
				title: "Didática e Fundamentos",
				text: "Conduzi sessões de dúvidas focadas em consolidar a base em algoritmos e raciocínio estruturado para os alunos da disciplina.",
			},
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
		responsibilities: [
			{
				title: "Prototipagem de Alta Fidelidade",
				text: "Desenvolvi protótipos e fluxos de navegação no Figma para um aplicativo mobile voltado a terminais e maquininhas de pagamento (POS).",
			},
			{
				title: "Acessibilidade e Inclusão (WCAG)",
				text: "Projetei interfaces focadas em usuários cegos ou com baixa visão, aplicando diretrizes de acessibilidade como alto contraste, tipografia de alta legibilidade e arquitetura adaptada para leitores de tela.",
			},
			{
				title: "UX Research e Usabilidade",
				text: "Validei fluxos de interação para garantir pagamentos via cartão mais autônomos, simples e intuitivos no contexto de dispositivos físicos.",
			},
		],
		technologies: ["Figma", "Miro"],
	},
];
