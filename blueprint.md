# Blueprint for Pet Face Test Website (File Input)

## Project Overview
This project is a simple web page with basic HTML, CSS, and JavaScript.

## Implemented Features
- Initial "Hello, world!" page.
- Formspree contact form with basic styling.
- Disqus comment section.
- Korean Translation for existing content.
- JavaScript snippet to automate clicking "keep trying" buttons.
- "Pet Face Test" using Teachable Machine via webcam.

## Current Task: Change "Pet Face Test" input from Webcam to File Upload

### Objective
To modify the "Pet Face Test" website so that users can upload an image file for classification instead of using a live webcam feed.

### Plan
1.  **Update `blueprint.md`**: Add this new task and plan. (This step is in progress)
2.  **Modify `index.html`**:
    *   Remove webcam-related HTML elements (`<button type="button" onclick="init()">Start</button>`, `<div id="webcam-container"></div>`).
    *   Add an `<input type="file" id="file-input" accept="image/*">` element.
    *   Add an `<img>` element (`<img id="uploaded-image" style="max-width: 100%; display: none;">`) to display the uploaded image.
    *   Add a "Predict" button (`<button type="button" id="predict-button" disabled>Predict</button>`).
3.  **Modify Teachable Machine JavaScript in `index.html`**:
    *   **`init()` function**: Modify to load the model without setting up the webcam. It should only load the model and prepare `labelContainer`.
    *   **Event Listeners**:
        *   Add an `onchange` event listener to `#file-input` to read the selected file, display it in `#uploaded-image`, and enable the "Predict" button.
        *   Add an `onclick` event listener to `#predict-button` to call the `predict()` function.
    *   **`predict()` function**: Adapt it to take the `uploaded-image` element as input for prediction instead of `webcam.canvas`.
    *   Remove `loop()` function and all webcam related code.
4.  **Modify `style.css`**:
    *   Add styles for the new file input, uploaded image display, and "Predict" button.
    *   Adjust existing styles as necessary for the new layout.