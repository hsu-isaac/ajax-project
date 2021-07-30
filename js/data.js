/* exported data */
var data = {
  entries: [],
  editing: null
};

window.addEventListener('unload', beforeUnload);
function beforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}

var previousDataJSON = localStorage.getItem('data');
if (previousDataJSON !== null) {
  data = (JSON.parse(previousDataJSON));
}
