function dataBase(test) {
     var counter=0;
     if (test.q1[2].checked) {counter++;}
     if (test.q2[2].checked) {counter++;}
     if (test.q3[0].checked) {counter++;}
     if (test.q4[2].checked) {counter++;}
     if (test.q5[1].checked) {counter++;}
     if (test.q6[0].checked) {counter++;}
	 if (test.q7[1].checked) {counter++;}
	 if (test.q8[1].checked) {counter++;}
	 if (test.q9[1].checked) {counter++;}
	 if (test.q10[0].checked) {counter++;}
	 if (test.q11[1].checked) {counter++;}
	 if (test.q12[1].checked) {counter++;}
	 if (test.q13[0].checked) {counter++;}
	 if (test.q14[0].checked) {counter++;}

     document.test.display.value = counter;
}