/*
      JavaScript 6th Edition
      Chapter 6
      Hands-on Project 6-1

      Author: Christopher Schaeffer
      Date:   2026-02-18

      Filename: script.js
*/

"use strict";

// Global Variables
var formValidity = true;

/* validate required fields */
function validateRequired() {
    var inputElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = inputElements.length;
    var requiredValidity = true;
    var currentElement;

    try {
        for (var i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255, 233, 233)";
                requiredValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (requiredValidity === false) {
            throw "Please complete all fields.";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

/* validate number fields for older browsers */
function validateNumbers() {
    var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
    var elementCount = numberInputs.length;
    var numberValidity = true;
    var currentElement;

    try {
        for (var i = 0; i < elementCount; i++) {
            // validate all input elements of type "number" in fieldset
            currentElement = numberInputs[i];
            if (isNaN(currentElement.value) || currentElement.value === "") {
                currentElement.style.background = "rgb(255, 233, 233)";
                numberValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (numberValidity === false) {
            throw "Zip and Social Security values must be numbers.";
        }
        numErrorDiv.style.display = "none";
        numErrorDiv.innerHTML = "";
    } catch (msg) {
        numErrorDiv.style.display = "block";
        numErrorDiv.innerHTML = msg;
        formValidity = false;
    }
}
/* validate form */
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault(); // prevent form from submitting
    } else {
        evt.returnValue = false; // prevent form from submitting in IE8 and earlier
    }
    formValidity = true;
    validateRequired();
    validateNumbers();
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

/* create event listeners */
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }

}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}

