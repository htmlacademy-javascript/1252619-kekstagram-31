function palindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse('').join('');

}
console.log(palindrome('топот'));
console.log(palindrome('ДоВод'));
console.log(palindrome('Кекс'));
