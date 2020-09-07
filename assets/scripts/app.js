class DOMHelper {
	static clearEventListeners(element) {
		const clonedElement = element.cloneNode(true);
		element.replaceWith(clonedElement);
		return clonedElement;
	}

	static moveElement(elementId, newDestinationSelector) {
		const element = document.getElementById(elementId);
		const destintionElement = document.querySelector(newDestinationSelector);
		destintionElement.append(element);
	}
}

class Tooltip {}

class ProjectItem {
	constructor(id, updateProjectListsFunction, type) {
		this.id = id;
		this.updateProjectListsHandler = updateProjectListsFunction;

		this.connectSwitchButton(type);
		this.connectMoreInfoButton();
	}

	connectMoreInfoButton() {}
	connectSwitchButton(type) {
		const projectItemElement = document.getElementById(this.id);
		let switchBtn = projectItemElement.querySelector("button:last-of-type");
		switchBtn = DOMHelper.clearEventListeners(switchBtn);
		switchBtn.textContent = type === "active" ? "Finish" : "Activate";
		switchBtn.addEventListener(
			"click",
			this.updateProjectListsHandler.bind(null, this.id)
		);
	}

	update(updateProjectListsFn, type) {
		this.updateProjectListsHandler = updateProjectListsFn;
		this.connectSwitchButton(type);
	}
}

class ProjectList {
	projects = [];

	constructor(type) {
		this.type = type;

		const prjItems = document.querySelectorAll(`#${type}-projects li`);
		for (const prjItem of prjItems) {
			this.projects.push(
				new ProjectItem(prjItem.id, this.moveProject.bind(this), this.type)
			);
		}
	}

	setMoveHandler(moveHandlerFunction) {
		this.moveHandler = moveHandlerFunction;
	}

	addProject(project) {
		this.projects.push(project);
		DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
		project.update(this.moveProject.bind(this), this.type);
	}

	moveProject(projectId) {
		this.moveHandler(this.projects.find(p => p.id === projectId));
		this.projects = this.projects.filter(p => p.id !== projectId);
	}
}

class App {
	static init() {
		const activeProjectsList = new ProjectList("active");
		const finishedProjectsList = new ProjectList("finished");

		activeProjectsList.setMoveHandler(
			finishedProjectsList.addProject.bind(finishedProjectsList)
		);

		finishedProjectsList.setMoveHandler(
			activeProjectsList.addProject.bind(activeProjectsList)
		);
	}
}

App.init();
