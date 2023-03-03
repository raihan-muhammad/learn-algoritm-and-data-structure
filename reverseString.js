// The First Way

// function reverse(str){
// 	const backWords = [];
// 	for(let i = str.length - 1; i >= 0; i--){
// 		backWords.push(str[i]);
// 	}

// 	return backWords.join('');
// }

// Second Way

// function reverse(str){
// 	return str.split('').reverse(str).join('');
// }

// Third Way
// const reverse = (str) => str.split('').reverse(str).join('');

const result = reverse('halo kepokepo');
console.log(result);