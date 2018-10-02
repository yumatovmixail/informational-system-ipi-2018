function dataBase(test) {
     var counter=0;
     if (test.q1[1].checked) {counter++;}
     if (test.q2[1].checked) {counter++;}
     if (test.q3[1].checked) {counter++;}
     if (test.q4[0].checked) {counter++;}
     if (test.q5[1].checked) {counter++;}
     if (test.q6[0].checked) {counter++;}
	 if (test.q7[1].checked) {counter++;}
	 if (test.q8[2].checked) {counter++;}
	 if (test.q9[0].checked) {counter++;}
	 if (test.q10[1].checked) {counter++;}
	 if (test.q11[1].checked) {counter++;}
	  if (test.q12[0].checked) {counter++;}

if (test.q13[0].checked) {counter++;}
	 if (test.q14[2].checked) {counter++;}
	 if (test.q15[0].checked) {counter++;}
	 if (test.q16[1].checked) {counter++;}
	 if (test.q17[0].checked) {counter++;}
	  if (test.q18[2].checked) {counter++;}
     document.test.display.value = counter;
}