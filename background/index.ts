import browser from "webextension-polyfill";
browser.alarms.onAlarm.addListener((alarm) => {
	if (alarm.name == "refreshRailwayDB") {
		console.log("Refreshing Railway Database");
		// use chrome.storage.local to store the data
	}
});
browser.runtime.onInstalled.addListener(() => {
	browser.alarms.create("refreshRailwayDB", { periodInMinutes: 0.1 });
});
