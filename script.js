function subscribed(){
  document.getElementById('subscribeForm').addEventListener('submit', function(event){
	  event.preventDefault();
		document.getElementById('subscribeForm').style.display = 'none';
		document.getElementById('thankYou').style.display = 'block';
  });
}