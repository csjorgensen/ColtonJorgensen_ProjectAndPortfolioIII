function createNode(element) {
  return document.createElement(element);
}

function append(parent, element) {
  return parent.appendChild(element);
}

var ul = document.getElementById('djs');
var url = 'https://randomuser.me/api/?results=6';
fetch(url).then(function (resp) {
  return resp.json();
}).then(function (data) {
  var djs = data.results;
  return djs.map(function (dj) {
    var li = createNode('li');
        img = createNode('img');
        span = createNode('span');
    img.src = dj.picture.medium;
    span.innerHTML = ' '+dj.name.first + ' ' + dj.name.last;
    append(li, img);
    append(li, span);
    append(ul, li);
  });
})

['catch'](function (error) {
  console.log(JSON.stringify(error));
});