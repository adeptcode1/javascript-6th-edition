/*
 *  JavaScript 6th Edition
 *  Chapter 7
 *  Hands-on Project 7-4
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

function previewOrder() {
    processDeliveryInfo();
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
