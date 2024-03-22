window.onload = function() {
  const form = document.getElementById('subscribeForm');
  
  if (form){
	form.addEventListener('submit', function(event){
	  event.preventDefault();
	  const subscribe = new subscribe(form);
	  
	  let message = 'Thank you for joining!';
	  console.log(message)
	  alert(message);
	};
  }
};