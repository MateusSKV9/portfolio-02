export function createSVG(svgString) {
	const div = document.createElement("div");
	div.innerHTML = svgString.trim();
	return div.firstChild;
}
