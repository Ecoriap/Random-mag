<script>
  function entierAleatoire(min, max)
  {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var entier = entierAleatoire(1, 2);
		 
  document.getElementById('image').setAttribute('src',"images/" + entier + ".jpg");
                 
</script>