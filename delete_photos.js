// Selector for Images and buttons
const ELEMENT_SELECTORS = {
    checkboxClass: '.ckGgle',
    deleteButton: 'button[title="Delete"]',
    confirmationButton: 'button[data-id="EBS5u'
}

// Time Configuration (in milliseconds)
const TIME_CONFIG = {
    delete_cycle: 10000,
    press_button_delay: 2000
};

let imageCount = 0;

let checkboxes;
let buttons = {
    deleteButton: null,
    confirmationButton: null
}

let deleteTask = setInterval(() => {

    checkboxes = document.querySelectorAll(ELEMENT_SELECTORS['checkboxClass']);

    if (checkboxes.length <= 0) {
        console.log("[INFO] No more images to delete.");
        clearInterval(deleteTask);
        console.log("[SUCCESS] Tool exited.");
        return;
    }

    imageCount += checkboxes.length;

    checkboxes.forEach((checkbox) => { checkbox.click() });
    console.log("[INFO] Deleting", checkboxes.length, "images");

    setTimeout(() => {

        buttons.deleteButton = document.querySelector(ELEMENT_SELECTORS['deleteButton']);
        buttons.deleteButton.click();

        setTimeout(() => {
            buttons.confirmation_button = document.querySelector(ELEMENT_SELECTORS['confirmationButton']);
            buttons.confirmation_button.click();
        }, TIME_CONFIG['press_button_delay']);
    }, TIME_CONFIG['press_button_delay']);
}, TIME_CONFIG['delete_cycle']);
