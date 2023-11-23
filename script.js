function clearresult() {
    document.getElementById('result').value = '';
  }

  function deleteLastChar() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
  }

  function appendToresult(value) {
    document.getElementById('result').value += value;
  }

  function calculateResult() {
    const result = document.getElementById('result');
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  }

  function description () {

    const description = document.getElementById('description')
    description.setAttribute("id", "description");
    `<p>This calulator made for task</p>`;
  }

  function buttons () {

    const one = document.getElementById('1');
    const two = document.getElementById('2');
    const three = document.getElementById('3');
    const four = document.getElementById('4');
    const five = document.getElementById('5');
    const six = document.getElementById('6');
    const seven = document.getElementById('7');
    const eight = document.getElementById('8');
    const nine = document.getElementById('9');
    const zero = document.getElementById('0');
    const add = document.getElementById('add');
    const subtract = document.getElementById('subtract');
    const and = document.getElementById('and');
    const clear = document.querySelector ('clear');
    const percent = document.getElementById('percent');
    const delet = document.getElementById('delete');
    const division = document.getElementById('division');
    const multiple = document.getElementById('multiple');
    const result = document.getElementById('result');
    one.click();
    two.click();
    three.click();
    four.click();
    five.click();
    six.click();
    seven.click();
    eight.click();
    nine.click();
    zero.click();
    add.click();
    subtract.click();
    and.click();
    clear.clcik();
    percent.click();
    delet.click();
    division.click();
    multiple.click();
    result.click();
 document.getElementById('equal').click();
  }
  
