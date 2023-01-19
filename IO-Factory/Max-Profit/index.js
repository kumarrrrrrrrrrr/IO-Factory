function calculate(event) {
    if (window.event) {
      // IE
      keynum = event.keyCode;
    } else if (event.which) {
      // Netscape/Firefox/Opera
      keynum = event.which;
    }
    if (keynum === 13) {
      document.getElementById("result").innerHTML = "";
      var N = document.getElementById("input").value;
      console.log("N", N);
      var T = [];
      var P = [];
      var C = [];
      var K = 0;
      var k = 0;
      var n = N;
      for (let t = 0; t <= N / 5; t++) {
        for (let p = 0; p <= (N - 5 * t) / 4; p++) {
          for (let c = 0; c <= (N - (5 * t + p * 4)) / 10; c++) {
            console.log("t , p , c", t, p, c);
            for (i = 1; i <= t; i++) {
              k = k + 1500 * (n - 5);
              n = n - 5;
            }
            for (i = 1; i <= p; i++) {
              k = k + 1000 * (n - 4);
              n = n - 4;
            }
            for (i = 1; i <= c; i++) {
              k = k + 3000 * (n - 10);
              n = n - 10;
            }
            if (k > K) {
              T = [];
              T.push(t);
              P = [];
              P.push(p);
              C = [];
              C.push(c);
              K = k;
            } else if (k === K) {
              T.push(t);
              P.push(p);
              C.push(c);
            }
            k = 0;
            n = N;
          }
        }
      }
      for (let i = 0; i < T.length; i++) {
        document.getElementById("result").innerHTML =
          document.getElementById("result").innerHTML +
          `<br/> T:${T[i]} P:${P[i]} C:${C[i]} and ${K}`;
      }
    }
  }
  