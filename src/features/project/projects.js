import gerenciadorImage from "./../../assets/images/projects/estoque.webp";
import clipboardLanding from "./../../assets/images/projects/clipboard-landing-page.webp";
import sunnysideAgency from "./../../assets/images/projects/sunnyside-agency-landing-page.webp";
import foodLanding from "./../../assets/images/projects/food-landing-page.webp";
import ticketGenerator from "./../../assets/images/projects/conference-ticket-generator.webp";
import itSolutions from "./../../assets/images/projects/it-solutions.webp";
import catalogoProdutos from "./../../assets/images/projects/catalogo-produtos.webp";

export const projects = [
	{
		name: "Catálogo de Produtos",
		image: catalogoProdutos,
		deployLink: "https://catalogo-produtos-react.vercel.app/",
		codeLink: "https://github.com/MateusSKV9/catalogo-produtos",
		technologies: ["react", "html", "css"],
		description:
			"Catálogo de Produtos com gerenciamento completo de produtos e categorias. A aplicação permite criar, listar, editar e remover, além de filtrar produtos por nome e alternar entre tema claro e escuro. Os dados são sincronizados e persistidos via Mock API, simulando um cenário real de aplicação.",
	},
	{
		name: "Gerenciador de Estoque",
		image: gerenciadorImage,
		deployLink: "https://gerenciador-estoque-angular.vercel.app/",
		codeLink: "https://github.com/MateusSKV9/gerenciador-estoque-angular",
		technologies: ["angular", "html", "css"],
		description:
			"Gerenciador de estoque moderno, responsivo e intuitivo. A aplicação permite a listagem, criação, edição e exclusão de itens, bem como de categoria de itens. Além disso, é possível mudar entre tema escuro ou claro, filtrar itens por categoria e exibir itens recentes e que estão com baixa quantidade no estoque. Os dados estão sincronizados e persistentes no localStorage.",
	},
	{
		name: "Clipboard Landing Page",
		image: clipboardLanding,
		deployLink: "https://mateusskv9.github.io/frontend-mentor/031-clipboard-landing-page-master/",
		codeLink: "https://github.com/MateusSKV9/frontend-mentor/tree/main/031-clipboard-landing-page-master",
		technologies: ["html", "css"],
		description:
			"Landing page responsiva para um aplicativo de gerenciamento de clipboard, desenvolvida com foco em UI moderna, semântica HTML, layout flexível e destaque claro das funcionalidades de um app de clipboard multiplataforma.",
	},
	{
		name: "Sunnyside Agency Landing Page",
		image: sunnysideAgency,
		deployLink: "https://mateusskv9.github.io/frontend-mentor/030-sunnyside-agency-landing-page-main/",
		codeLink: "https://github.com/MateusSKV9/frontend-mentor/tree/main/030-sunnyside-agency-landing-page-main",
		technologies: ["javascript", "html", "css"],
		description:
			"Landing page frontend responsiva para uma agência criativa, desenvolvida com foco em layout moderno, tipografia marcante, seções bem estruturadas e adaptação para diferentes tamanhos de tela..",
	},
	{
		name: "Lading Page Food Theme",
		image: foodLanding,
		deployLink: "https://mateusskv9.github.io/landing-page-food-theme/",
		codeLink: "https://github.com/MateusSKV9/landing-page-food-theme",
		technologies: ["javascript", "html", "css"],
		description:
			"Página de restaurante minimalista e elegante com seção de cardápio, avaliações e contato. O site encontra-se totalmente responsivo e com animações suaves da biblioteca ScrollReveal.",
	},
	// {
	// 	name: "Gerador de Ingressos",
	// 	image: ticketGenerator,
	// 	deployLink: "https://mateusskv9.github.io/frontend-mentor/023-conference-ticket-generator-main/",
	// 	codeLink: "https://github.com/MateusSKV9/frontend-mentor/tree/main/023-conference-ticket-generator-main",
	// 	technologies: ["javascript", "html", "css"],
	// 	description:
	// 		"Gerador de ingresso para conferência. Inicialmente a página exibe um formulário para o usuário inserir seus dados, inclusive imagem. Uma vez preenchido todos os dados e submetidas, um ingresso é gerado exibindo as informações do usuário.",
	// },
	{
		name: "IT Solutions",
		image: itSolutions,
		deployLink: "https://projects-js.vercel.app/001-it-solutions/",
		codeLink: "https://github.com/MateusSKV9/projects/tree/main/001-it-solutions",
		technologies: ["html", "css"],
		description:
			"IT Solutions é aplicação que reflete a ideia e aparência de um site empresarial, com um design elegante, e com o layout dividido em seções como Parceiros, Produto, Galeria, Feedbacks etc.",
	},
];
