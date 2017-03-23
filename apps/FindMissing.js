module.exports = {
findMissing :function (arr1,arr2) {
	
	if ((arr1.length === 0) && (arr2.length === 0))  {       //this line of code returns if the length of the  two arrays are zero
		return 0;
	}
	
	
	var sumarr1 = 0;
	var sumarr2 = 0;
	for (var i in arr1){
		sumarr1 += arr1[i];				//this finds the sum of the first array
	}
	
	for(var j in arr2){
		sumarr2 += arr2[j];				//this finds the sum of the second array
	}	
	return ((sumarr1 - sumarr2)*(arr1.length - arr2.length));	//this line of code is a mathematical expression that returns the missing number
	
  
  }
 }
