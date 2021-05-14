const string = 'Привет! Как дела?'; 

function getVowels(string) {
  string = string.toLowerCase(string);
  const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е']; 
  let character = '';
  let result = '';
  for(let i = 0; i < string.length; i++){
    for(let j = 0; j < vowels.length; j++){
        character = string.charAt(i);
        if(character === vowels[j]){
            result += character
        }
    }
  }
  return result;
};

console.log(getVowels(string));


