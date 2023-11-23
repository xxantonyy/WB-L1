export class Shape {

	// В этом примере класс Shape является базовым классом, который определяет методы calculateArea и calculatePerimeter.

	calculateArea() {
		throw new Error("Method 'calculateArea' must be implemented");
	}

	calculatePerimeter() {
		throw new Error("Method 'calculatePerimeter' must be implemented");
	}
}
// Затем мы создаем подклассы Rectangle, Circle и Triangle, которые наследуются от базового класса Shape. 

// В каждом подклассе мы реализуем методы calculateArea и calculatePerimeter

export class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	calculateArea() {
		return this.width * this.height;
	}

	calculatePerimeter() {
		return 2 * (this.width + this.height);
	}
}

export class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}

	calculateArea() {
		return Math.PI * this.radius ** 2;
	}

	calculatePerimeter() {
		return 2 * Math.PI * this.radius;
	}
}

export class Triangle extends Shape {
	constructor(side1, side2, side3) {
		super();
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}

	calculateArea() {
		const s = (this.side1 + this.side2 + this.side3) / 2;
		return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
	}

	calculatePerimeter() {
		return this.side1 + this.side2 + this.side3;
	}
}
