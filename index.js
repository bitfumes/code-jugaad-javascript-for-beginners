function runCode() {
  const codeText = document.getElementById("code").value;

  // eval(codeText);
  const runMyCode = new Function("", codeText);
  runMyCode();
}
