let a = "";
let o1 = 0;
function one() {
  let one = "1";
  a += one;
  document.getElementById("output").innerHTML = a;
  document.getElementById("one").blur();
}
function two() {
  let two = "2";
  a += two;
  document.getElementById("output").innerHTML = a;
  document.getElementById("two").blur();
}
function three() {
  let three = "3";
  a += three;
  document.getElementById("output").innerHTML = a;
  document.getElementById("three").blur();
}
function four() {
  let four = "4";
  a += four;
  document.getElementById("output").innerHTML = a;
  document.getElementById("four").blur();
}
function five() {
  let five = "5";
  a += five;
  document.getElementById("output").innerHTML = a;
  document.getElementById("five").blur();
}
function six() {
  let six = "6";
  a += six;
  document.getElementById("output").innerHTML = a;
  document.getElementById("six").blur();
}
function seven() {
  let seven = "7";
  a += seven;
  document.getElementById("output").innerHTML = a;
  document.getElementById("seven").blur();
}
function eight() {
  let eight = "8";
  a += eight;
  document.getElementById("output").innerHTML = a;
  document.getElementById("eight").blur();
}
function nine() {
  let nine = "9";
  a += nine;
  document.getElementById("output").innerHTML = a;
  document.getElementById("nine").blur();
}
function zero() {
  let zero = "0";
  a += zero;
  document.getElementById("output").innerHTML = a;
  document.getElementById("zero").blur();
}
function dot() {
  let dot = ".";
  a += dot;
  document.getElementById("output").innerHTML = a;
  document.getElementById("dot").blur();
}
function add() {
  let add = document.getElementById("output").textContent;
  const sc = ".";
  const c = add.split(sc).length - 1;
  if (c > 1) {
    document.getElementById("output").innerHTML = "ERROR";
  } else {
    addre = parseFloat(add);
    a = "";
    document.getElementById("output").innerHTML = "";
    o1 = 1;
  }
  document.getElementById("add").blur();
}
function sub() {
  let sub = document.getElementById("output").textContent;
  const sc = ".";
  const c = sub.split(sc).length - 1;
  if (c > 1) {
    document.getElementById("output").innerHTML = "ERROR";
  } else {
    subre = parseFloat(sub);
    a = "";
    document.getElementById("output").innerHTML = "";
    o1 = 2;
  }
  document.getElementById("sub").blur();
}
function mul() {
  let mul = document.getElementById("output").textContent;
  const sc = ".";
  const c = mul.split(sc).length - 1;
  if (c > 1) {
    document.getElementById("output").innerHTML = "ERROR";
  } else {
    mulre = parseFloat(mul);
    a = "";
    document.getElementById("output").innerHTML = "";
    o1 = 3;
  }
  document.getElementById("mul").blur();
}
function div() {
  let div = document.getElementById("output").textContent;
  const sc = ".";
  const c = div.split(sc).length - 1;
  if (c > 1) {
    document.getElementById("output").innerHTML = "ERROR";
  } else {
    divre = parseFloat(div);
    a = "";
    document.getElementById("output").innerHTML = "";
    o1 = 4;
  }
  document.getElementById("div").blur();
}
function pow() {
  let pow = document.getElementById("output").textContent;
  const sc = ".";
  const c = pow.split(sc).length - 1;
  if (c > 1) {
    document.getElementById("output").innerHTML = "ERROR";
  } else {
    powre = parseFloat(pow);
    a = "";
    document.getElementById("output").innerHTML = "";
    o1 = 5;
  }
  document.getElementById("pow").blur();
}
function cl() {
  a = "";
  o1 = 0;
  document.getElementById("output").innerHTML = "";
  document.getElementById("cl").blur();
}
function resu() {
  a = "";
  let nd = document.getElementById("output").textContent;
  const sc = ".";
  const c = nd.split(sc).length - 1;
  if (c > 1) {
    document.getElementById("output").innerHTML = "ERROR";
  } else {
    if (o1 == 1) {
      result = addre + parseFloat(nd);
    }
    if (o1 == 2) {
      result = subre - parseFloat(nd);
    }
    if (o1 == 3) {
      result = mulre * parseFloat(nd);
    }
    if (o1 == 4) {
      result = divre / parseFloat(nd);
    }
    if (o1 == 5) {
      result = powre ** parseFloat(nd);
    }
  }
  if (result == Infinity || result == NaN) {
    document.getElementById("output").innerHTML = "ERROR";
  } else {
    document.getElementById("output").innerHTML = result;
    o1 = 0;
  }
  document.getElementById("resu").blur();
}
