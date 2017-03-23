module.exports = {
findMissing :function (arr1,arr2) {
	
	if ((arr1.length === 0) && (arr2.length === 0))  {
		return 0;
	}
	
	
	var sumarr1 = 0;
	var sumarr2 = 0;
	for (var i in arr1){
		sumarr1 += arr1[i];
	}
	
	for(var j in arr2){
		sumarr2 += arr2[j];
	}	
	return ((sumarr1 - sumarr2)*(arr1.length - arr2.length));
	
  
  }
 }