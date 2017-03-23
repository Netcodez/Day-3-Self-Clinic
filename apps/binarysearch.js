Array.prototype.toTwenty = function(){
	
	for(var i = 1; i <= 20; i += 1){
	    this.push(i);
	}

	return this;
}


Array.prototype.toForty = function(){
	
	for(var i = 2; i <= 40; i += 2){
	    this.push(i);
	}

	return this;
}

Array.prototype.toOneThousand = function(){
	
	for(var i = 10; i <= 1000; i += 10){
	    this.push(i);
	}

	return this;
}
Array.prototype.search = function(num){

	var length = this.length; 
	var count = 0; 
	var startPosition = 0; 
	var mid = Math.floor((startPosition + high)/ 2); 
	var high = length - 1; 
	
	

    if (!Number.isInteger(num)) {
        return -1;
    }
	
	if (num === this[startPosition]){ 

		return this.showResult(count, startPosition, length);

	} else {		
		startPosition = startPosition + 1;
	}

	if (num === this[high]){ 
		
		return this.showResult(count, high, length);

	} 
	else {
		high = high - 1;
	} 

	
	if (num === this[mid]){ 
		
		return this.showResult(count, mid, length);
	}


	while (startPosition <= high) {

		count++; 
		
		mid = Math.floor((startPosition + high)/ 2);

		
		if (num === this[startPosition]){ 
			
			return this.showResult(count, startPosition, length);

		} else {
			startPosition = startPosition + 1;

		}
		
		if (num === this[high]){ 
			
			return this.showResult(count, high, length);

		} else {
			high = high - 1;
		} 


		if (num > this[mid]){ 
			startPosition = mid + 1;

		} 
		else if (num < this[mid]) {
			
			high = mid - 1;

		} else {

			
			return this.showResult(count, mid, length);
		}
	}

	
	return this.showResult(count, -1, length);

}


Array.prototype.showResult = function(count, index, length){

	return { 
		count: count, 
		index: index,
		length: length
	};
}

module.exports = Array.prototype;