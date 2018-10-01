/*eslint-env browser*/
/*eslint-env jquery*/

/* Gets a list of the cards in main-section-3 */
var cards = document.getElementsByClassName("product");

/*Goes through the cards list and sets the opacity to 100 in their corresponding css code*/
/*eslint-disable*/
function CardPopin() {
    for (var i = 0; i < cards.length; ++i) {
        var card = cards[i];
        card.style.opacity = "100";
    }
}

function CardPopout() {
    for (var i = 0; i < cards.length; ++i) {
        var card = cards[i];
        card.style.transition = "opacity 0s";
        card.style.opacity = "0";
        card.style.transition = "opacity 2s, transform 1s";
    }
}
/*eslint-enable*/

/* Event listeners for mouse hovering over menu buttons and cards */
$(".product").mouseover(mouseOverCardEvent);
$(".product").mouseout(mouseOutCardEvent);
$(".menu-button").mouseover(mouseOverMenuButton);
$(".menu-button").mouseout(mouseOutMenuButton);
$(".underline").mouseover(mouseOverMenuButtonUnderline);
$(".underline").mouseout(mouseOutMenuButtonUnderline);

/* Scales the card when hovering */
function mouseOverCardEvent(e) {
    e.currentTarget.style.transform = "scale(1.05)";
}

/* Scales the card back to original scale when hovering */
function mouseOutCardEvent(e) {
    e.currentTarget.style.transform = "scale(1)";
}

/* Gets the children of the menu button (the underline), and activates the animation which makes it visible, when the cursor is hovering the menu button */
function mouseOverMenuButton(e) {
    e.target.children[0].style.animationName = "underlineVisible";
    e.target.children[0].style.animationDuration = "0.2s";
    e.target.children[0].style.height = "5px";
    e.target.style.animationName = "changeColor";
    e.target.style.animationDuration = "0.2s";
    e.target.style.color = "#43b5a5";
}

/* Gets the children of the menu button (the underline), and activates the animation which makes it hidden, when the cursor leaves the menu button */
function mouseOutMenuButton(e) {
    e.target.children[0].style.animationName = "underlineHide";
    e.target.children[0].style.animationDuration = "0.2s";
    e.target.children[0].style.height = "0px";
    e.target.style.animationName = "revertColor";
    e.target.style.animationDuration = "0.2s";
    e.target.style.color = "#0f4a58";

}

/* Makes the underline seem like a part of the button, preventing the underline from hiding when the cursor moves from the menu button to the underline */
function mouseOverMenuButtonUnderline(e) {
    e.currentTarget.style.animationName = "underlineVisible";
    e.currentTarget.style.animationDuration = "0.2s";
    e.currentTarget.style.height = "5px";
    e.target.parentElement.style.animationName = "changeColor";
    e.target.parentElement.style.animationDuration = "0.2s";
    e.target.parentElement.style.color = "#43b5a5";
}

/* Makes the underline hide when the cursor leaves the underline */
function mouseOutMenuButtonUnderline(e) {
    e.currentTarget.style.animationName = "underlineHide";
    e.currentTarget.style.animationDuration = "0.2s";
    e.currentTarget.style.height = "0px";
    e.target.parentElement.style.animationName = "revertColor";
    e.target.parentElement.style.animationDuration = "0.2s";
    e.target.parentElement.style.color = "#0f4a58";
}

/* Runs when document is finished loading, every div wrapped in a div with class cover will fade in, as to make the loading of the page more fluid */


function uncover() {
    var children = $(".cover");
    for (var i = 0; i < children.length; ++i) {
        children[i].style.animationName = "whenLoadedFadeIn";
        children[i].style.animationDuration = "1s";
        children[i].style.opacity = "100";

    }
}



function removeLoader() {
    document.getElementById("loader").style.display = "none";
}


if (document.readyState === 'ready' || document.readyState === 'complete') {
    removeLoader();
    uncover();

} else {
    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            removeLoader();
            uncover();

        }
    }
}


/* Extends Jquery with a viewport function. The viewport function checks if an elemnt is in the current viewport*/

$.fn.isItVisible = function () {
    var elementTop = $(this).offset().top; /*Top position of our current HTML element*/
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

/*$(window).on("resize scroll", function () {
    if ($(".product").isItVisible()) {
        CardPopin();
    } else {
        CardPopout();
    }
});*/