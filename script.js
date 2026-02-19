const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(evt, tabName) {

    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-links");
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    evt.currentTarget.classList.add("active-links");
    document.getElementById(tabName).classList.add("active-tab");
}
