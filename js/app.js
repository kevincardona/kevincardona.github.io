window.onload = () => {
  const responses = [
    'this doesn\'t exist', 
    'no really it\'s n/a', 
    'please stop trying'
  ]
  const sassy = document.getElementById('sassy')
  let response = 0;
  sassy.addEventListener('mouseover', debounce(() => {
    sassy.innerHTML = responses[(response++) % responses.length];
  }, 700))
}

const debounce = (callback, limit) => {
  var wait = false;
  return () => {
    if (!wait) { 
      callback.call();
      wait = true;
      setTimeout(() => {
        wait = false;          
      }, limit);
    }
  }
}
