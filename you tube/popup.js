// popup.js

document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('saveButton');
    const noteTextarea = document.getElementById('noteTextarea');
  
    saveButton.addEventListener('click', function() {
      const note = noteTextarea.value.trim();
      if (note !== '') {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          const tab = tabs[0];
          chrome.tabs.sendMessage(tab.id, { action: 'saveNote', note: note }, function(response) {
            console.log(response.message);
          });
        });
        noteTextarea.value = '';
      }
    });
  });
  