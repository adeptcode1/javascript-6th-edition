/*
 *  JavaScript 6th Edition
 *  Chapter 7
 *  Hands-on Project 7-5
 *
 *  Author:  Christopher W. Schaeffer
 *  Date:    2026-02-21
 *
 *  Filename: script.js
 */

"use strict";

/* global variables */
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
var foodInfo = {};
var foodSummary = document.getElementById("order");

function processDeliveryInfo() {
    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.address = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;
    var prop;
    for (prop in delivInfo) {
        delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
    }
}

function processFood() {
    var prop;
    var crustOpt = document.getElementsByName("crust");
    var toppings = 0;
    var toppingBoxes = document.getElementsByName("toppings");
    var instr = document.getElementById("instructions");
    if (crustOpt[0].checked) {
        foodInfo.crust = crustOpt[0].value;
    } else if (crustOpt[1].checked) {
        foodInfo.crust = crustOpt[1].value;
    }
    foodInfo.size = document.getElementById("size").value;
    for (var i = 0; i < toppingBoxes.length; i++) {
        if (toppingBoxes[i].checked) {
            toppings++;
            foodInfo["topping" + toppings] = toppingBoxes[i].value;

        }
    }
    if (instr.value !== "") {
        foodInfo.instructions = instr.value;
    }

    foodSummary.innerHTML = "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
    foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>"
    foodSummary.innerHTML += "<p><span>Toppings</span>: </p>";
    foodSummary.innerHTML += "<ul>";
    for (var i = 1; i < 6; i++) {
        if (foodInfo["topping" + i]) {
            foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
        }
    }
    foodSummary.innerHTML += "</ul>";

    /* Not instructed to do this, but I will add the instructions to the order summary only if they exist. */
    if (foodInfo.instructions) {
        foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions + "</p>";
    }
    document.getElementById("order").style.display = "block";
}

function previewOrder() {
    processDeliveryInfo();
    processFood();
    document.getElementsByTagName("section")[0].style.display = "block";
    /*  Not instructed to do this, but deliverTo element is hidden in the CSS, 
        so I will make it visible here. */
    document.getElementById("deliverTo").style.display = "block";
}

/* create event listener for the preview order button */
var previewButton = document.getElementById("previewBtn");
if (previewButton.addEventListener) {
    previewButton.addEventListener("click", previewOrder, false);
} else if (previewButton.attachEvent) {
    previewButton.attachEvent("onclick", previewOrder);
}
