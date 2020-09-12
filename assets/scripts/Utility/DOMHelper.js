export class DOMHelper {
	static clearEventListeners(element) {
		const clonedElement = element.cloneNode(true);
		element.replaceWith(clonedElement);
		return clonedElement;
	}

	static moveElement(elementId, newDestinationSelector) {
		const element = document.getElementById(elementId);
		const destintionElement = document.querySelector(newDestinationSelector);
		destintionElement.append(element);
		element.scrollIntoView({ behavior: "smooth" });
	}
}