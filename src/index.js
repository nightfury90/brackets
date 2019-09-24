module.exports = function check(str, bracketsConfig) {
  // your solution
  let open = ['(', '{', '[', '1', '3', '5'];
  let close = [')', '}', ']', '2', '4', '6'];
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      stack.push(str[i]);
    } else if (str[i] === '|') {
      if (stack[stack.length - 1] === '|') {
        stack.pop();
      } else {
        stack.push('|');
      }
    } else if (str[i] == '7') {
      if (stack[stack.length - 1] == '7') {
        stack.pop();
      } else {
        stack.push('7');
      }
    } else if (str[i] == '8') {
      if (stack[stack.length - 1] == '8') {
        stack.pop();
      } else {
        stack.push('8');
      }
    } else {
      if (close.indexOf(str[i]) == open.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return (stack.length == 0);
}

