function dataBase(test) {
     var counter=0;
     if (test.q1[1].checked) {counter++;}
     if (test.q2[2].checked) {counter++;}
     if (test.q3[1].checked) {counter++;}
     if (test.q4[2].checked) {counter++;}
     if (test.q5[0].checked) {counter++;}
     if (test.q6[1].checked) {counter++;}
	 if (test.q7[0].checked) {counter++;}
	 if (test.q8[1].checked) {counter++;}
 if (test.q9[0].checked) {counter++;}
     if (test.q10[1].checked) {counter++;}
     if (test.q11[1].checked) {counter++;}
     if (test.q12[0].checked) {counter++;}
     if (test.q13[1].checked) {counter++;}
     document.test.display.value = counter;
}