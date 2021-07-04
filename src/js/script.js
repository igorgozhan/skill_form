window.onload = function(){
	let select = document.getElementById("select_block_content");
	for(let i = 1978; i < 2006; i++ ){
		select.insertAdjacentHTML('beforeEnd', '<div data-value="'+i+'">'+i+'</div>');
	}
	
	let slider = document.getElementById("skillRange");
	let output = document.getElementById("demo");
	output.innerHTML = slider.value;

	slider.oninput = function() {
		output.innerHTML = this.value;
		alert("!");
	}
}



