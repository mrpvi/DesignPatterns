// Base Button class
class Button {
    constructor(label) {
        this.label = label;
    }

    render() {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = this.label;
        document.body.appendChild(buttonElement);
        return buttonElement;
    }
}

// Decorator for adding a right-click event
class RightClickDecorator {
    constructor(button) {
        this.button = button;
    }

    render() {
        const buttonElement = this.button.render();
        buttonElement.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            console.log(`Right-clicked on button: ${this.button.label}`);
        });
        return buttonElement;
    }
}

// Usage
const myButton = new Button('Click Me');
const rightClickButton = new RightClickDecorator(myButton);
rightClickButton.render();
