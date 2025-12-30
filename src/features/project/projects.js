import gerenciadorImage from "./../../assets/images/projects/estoque.png";
import clipboardLanding from "./../../assets/images/projects/clipboard-landing-page.jpg";
import sunnysideAgency from "./../../assets/images/projects/sunnyside-agency-landing-page.jpg";
import foodLanding from "./../../assets/images/projects/food-landing-page.jpg";
import ticketGenerator from "./../../assets/images/projects/conference-ticket-generator.jpeg";
import itSolutions from "./../../assets/images/projects/it-solutions.jpeg";

export const projects = [
	{
		name: "Gerenciador de Estoque",
		image: gerenciadorImage,
		deployLink: "#",
		codeLink: "#",
		technologies: ["angular", "html", "css"],
		description:
			"Gerenciador de estoque moderno, responsivo e intuitivo. A aplicação permite a listagem, criação, edição e exclusão de itens, bem como de categoria de itens. Além disso, é possível mudar entre tema escuro ou claro, filtrar itens por categoria e exibir itens recentes e que estão com baixa quantidade no estoque. Os dados estãos sincronizados e persistentes no localStorage.",
	},
	{
		name: "Clipboard Landing Page",
		image: clipboardLanding,
		deployLink: "#",
		codeLink: "#",
		technologies: ["javascript", "html", "css"],
		description:
			"Landing page responsiva para um aplicativo de gerenciamento de clipboard, desenvolvida com foco em UI moderna, semântica HTML, layout flexível e destaque claro das funcionalidades de um app de clipboard multiplataforma.",
	},
	{
		name: "Sunnyside Agency Landing Page",
		image: sunnysideAgency,
		deployLink: "#",
		codeLink: "#",
		technologies: ["javascript", "html", "css"],
		description:
			"Landing page frontend responsiva para uma agência criativa, desenvolvida com foco em layout moderno, tipografia marcante, seções bem estruturadas e adaptação para diferentes tamanhos de tela..",
	},
	{
		name: "Lading Page Food Theme",
		image: foodLanding,
		deployLink: "#",
		codeLink: "#",
		technologies: ["javascript", "html", "css"],
		description:
			"Página de restaurante minimalista e elegante com seção de cardápio, avaliações e contato. O site encontra-se totalmente responsivo e com animações suaves da biblioteca ScrollReveal.",
	},
	{
		name: "Gerador de Ingressos",
		image: ticketGenerator,
		deployLink: "#",
		codeLink: "#",
		technologies: ["javascript", "html", "css"],
		description:
			"Gerador de ingresso para conferência. Inicialmente a página exibe um formulário para o usuário inserir seus dados, inclusive imagem. Uma vez preenchido todos os dados e submetidas, um ingresso é gerado exibindo as informações do usuário.",
	},
	{
		name: "IT Solutions",
		image: itSolutions,
		deployLink: "#",
		codeLink: "#",
		technologies: ["html", "css"],
		description:
			"IT Solutions é aplicação que reflete a ideia e aparência de um site empresarial, com um design elegante, e com o layout dividido em seções como Parceiros, Produto, Galeria, Feedbacks etc.",
	},
];
