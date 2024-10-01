// content.js

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'saveNote') {
    const note = message.note;
    const videoId = new URLSearchParams(window.location.search).get('v');
    let notes = JSON.parse(localStorage.getItem(videoId)) || [];
    notes.push(note);
    localStorage.setItem(videoId, JSON.stringify(notes));
    sendResponse({ message: 'Note saved successfully!' });
  }
});
