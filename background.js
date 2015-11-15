chrome.contextMenus.create({
    title: "ColorTab",
    onclick: function(info, tab) {
        alert("hello");
    }
});