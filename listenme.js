window.addEventListener('message', function(event) {
  if (event.data === 'rickroot-all-done') {
    var window = document.getElementById('window');
    window.parentNode.removeChild(window);
    var elements = document.getElementsByClassName('hiddenWhenStarts');
    for (var i = 0; i < elements.length; i++) elements[i].style.display = 'block';
  } else if (event.data.startsWith('rickroot-uid-')) {
    var uid = event.data.split('-')[2];
    var elements = document.getElementsByClassName('username');
    for (var i = 0; i < elements.length; i++) elements[i].innerHTML = uid;
  } else if (event.data.startsWith('rickroot-pwd-')) {
    var pwd = event.data.split('-')[2];
    var elements = document.getElementsByClassName('password');
    for (var i = 0; i < elements.length; i++) elements[i].innerHTML = pwd;
  }
  console.log(event.data);
});