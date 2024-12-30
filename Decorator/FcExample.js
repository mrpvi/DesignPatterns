// Base function to create a button
function createButton(label) {
    const button = document.createElement('button');
    button.textContent = label;
    document.body.appendChild(button);
    return button;
}

// Decorator function to add a right-click event
function addRightClickEvent(button, onRightClick) {
    button.addEventListener('contextmenu', (event) => {
        event.preventDefault(); // Prevent the default context menu
        onRightClick(event); // Call the custom right-click handler
    });
    return button;
}

// Usage
const myButton = createButton('Click Me');

addRightClickEvent(myButton, (event) => {
    console.log('Right-clicked!', event.target.textContent);
});

