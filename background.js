chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "readOnFreedium",
        title: "Read on Freedium",
        contexts: ["link"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "readOnFreedium") {
        const originalUrl = info.linkUrl;
        if (originalUrl.includes("medium.com")) {
            const freediumUrl = `https://www.freedium.cfd/${originalUrl}`;
            chrome.tabs.create({ url: freediumUrl });
        } else {
            alert("This is not a Medium.com link.");
        }
    }
});
