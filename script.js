function stringChop(str, size) {
  // your code here
	let chunk_str=[];
	for(let i=0;i<str.length;i+=size){
		chunk_str.push(str.slice(i,i+size));
	}
	return chunk_str;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
