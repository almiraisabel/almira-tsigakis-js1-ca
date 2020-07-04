//To prevent "other" from becoming obananar-remember space
{
  var str = document.getElementById("word").innerHTML; 
  var res = str.replace(/the /g, "banana ");
  document.getElementById("word").innerHTML = res;

  var str1 = document.getElementById("word").innerHTML;
  var res1 = str1.replace(/The/g, "Banana");
  document.getElementById("word").innerHTML = res1;
	
}