// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

// Prototype Syntax
export function Size(width = 80, height = 60) {
	this.width = width;
	this.height = height;

	Size.prototype.resize = (width, height) => {
		this.width = width;
		this.height = height;
	}
}

export function Position(x = 0, y = 0) {
	this.x = x;
	this.y = y;

	Position.prototype.move = (x, y) => {
		this.x = x;
		this.y = y;
	}
}
// Class Syntax
export class ProgramWindow {
	screenSize = new Size(800, 600);
	size = new Size();
	position = new Position();

	resize(newSize) {
		if (newSize.height < 1) newSize.height = 1;
		if (newSize.width < 1) newSize.width = 1;
		if (newSize.width > this.screenSize.width - this.position.x) newSize.width = this.screenSize.width - this.position.x;
		if (newSize.height > this.screenSize.height - this.position.y) newSize.height = this.screenSize.height - this.position.y;
		this.size = newSize;
	}

	move(newPosition) {
		if (newPosition.x < 0) newPosition.x = 0;
		if (newPosition.y < 0) newPosition.y = 0;
		if (newPosition.x > this.screenSize.width - this.size.width) newPosition.x = this.screenSize.width - this.size.width;
		if (newPosition.y > this.screenSize.height - this.size.height) newPosition.y = this.screenSize.height - this.size.height;
		this.position = newPosition;
	}
}

export function changeWindow(newProgramWindow) {
	newProgramWindow.size = new Size(400, 300);
	newProgramWindow.position = new Position(100, 150);
	return newProgramWindow;
}