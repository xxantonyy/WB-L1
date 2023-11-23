export function fillStack() {
	let count = 0;

	function recurse() {
		count++;
		recurse();
	}

	try {
		recurse();
	} catch (error) {
		console.log('Stack overflow!');
		console.log('Stack size:', count);
	}
}

// Google: Stack size: 12528
// Opera: Stack size: 13941
// Microsoft Edge: Stack size: 12561