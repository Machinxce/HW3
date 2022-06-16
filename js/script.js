/*-- Samin Basir
   File: script.js
	 Samin_basir@student.uml.edu
	 Computer Science Student UMass Lowell 91.461 GUI Programming I
	 Date: 6/13/2022
   Updated: 6/15/2022 by Samin Basir
   created a table completely dynamically based on parameters entered
in an HTML form
*/
function TableStart() {
    clearInvalid();
    clearTable();
    var isAllDone = false;
    /*multiplier and multiplicand input */
    var firstR = document.getElementById('firstR').value;
    var lastR = document.getElementById('lastR').value;
    var firstC = document.getElementById('firstC').value;
    var lastC = document.getElementById('lastC').value;
    /* output read value to console */
    console.log(firstR);
    console.log(lastR);
    console.log(firstC);
    console.log(lastC);

    if (!firstR || Number(firstR) < -50) {
        addInvalid('firstRText', 'Error! Enter a number greater or equal to -50.')
        isAllDone = true;
    }
    if (!lastR || Number(lastR) > 50) {
        addInvalid('lastRText', 'Error! Enter a number that is not bigger than 50.')
        isAllDone = true;
    }
    if (!firstC || Number(firstC) < -50) {
        addInvalid('firstCText', 'Error!Enter a number greater or equal to -50.')
        isAllDone = true;
    }
    if (!lastC || Number(lastC) > 50) {
        addInvalid('lastCText', 'Error! Enter a number that is not bigger than 50.')
        isAllDone = true;
    }

    /* checking if min number greater than max and if negative */
    if ((Number(firstR) > Number(lastR)) && (Number(firstR) >= 0)) {
        addInvalid('lastRText', 'Invalid input for multiplier. The maximum number must bigger than minimum number.')
        isAllDone = true;
    }

    /* check if start min greater than max and if negative */
    if ((Number(firstC) > Number(lastC)) && (Number(firstC) >= 0)) {
        addInvalid('lastCText', 'Invalid input for multiplier. The maximum number must bigger than minumum number.')
        isAllDone = true;
    }

    /* getting row and colnum length */
    var rowlength = lastR - firstR + 1;
    var collength = lastC - firstC + 1;

    /* check for table lengeth */
    if (rowlength > 101) {
        addInvalid('lastRText', 'Error! The range of row cannot large than 100.')
        isAllDone = true;
    }
    if (collength > 101) {
        addInvalid('lastCText', 'Error! The range of row cannot large than 100.')
        isAllDone = true;
    }
    if (isAllDone) return;
    /* table and count number i, j */
    var tf = "<table>";
    var i, j;

    /* table header line*/
    tf += "<tr><th></th>";
    for (i = 0; i < rowlength; i++) {
        tf += "<th>";
        var num = Number(firstR) + i;
        tf += num;
        tf += "</th>";
    }
    tf += "</tr>";

    /* table data */
    for (i = 0; i < collength; i++) {
        tf += "<tr>";
        var colnum = Number(firstC) + i;
        for (j = 0; j < rowlength + 1; j++) {
            tf += "<td>";
            if (j == 0) {
                tf += colnum;
            } else {
                var rownum = Number(firstR) + j - 1;
                var num = colnum * rownum;
                tf += num;
            }
            tf += "</td>";
        }
        tf += "</tr>";
    }
    tf += "</table>";

    /* output of the table */
    document.getElementById('table').innerHTML = tf;
}

function addInvalid(className, text) {
    var el = document.getElementsByClassName(className);
    console.log(el, text)
    el[0] && (el[0].innerText = text);
}

function clearInvalid() {
    addInvalid('firstRText', '');
    addInvalid('lastRText', '');
    addInvalid('firstCText', '');
    addInvalid('lastCText', '');
}

function clearTable() {
    document.getElementById('table').innerHTML = '';
}
