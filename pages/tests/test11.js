function dataBase(test) {
     var counter=0;
     if (test.q1[1].checked) {counter++;}
     if (test.q2[0].checked) {counter++;}
     if (test.q3[1].checked) {counter++;}
     if (test.q4[0].checked) {counter++;}
     if (test.q5[1].checked) {counter++;}
     if (test.q6[1].checked) {counter++;}
	 if (test.q7[2].checked) {counter++;}
	 if (test.q8[2].checked) {counter++;}
	 if (test.q9[1].checked) {counter++;}
	 if (test.q10[2].checked) {counter++;}
	 if (test.q11[1].checked) {counter++;}
	  if (test.q12[2].checked) {counter++;}
	  if (test.q13[1].checked) {counter++;}
	  if (test.q14[0].checked) {counter++;}
	  if (test.q15[2].checked) {counter++;}
	  if (test.q16[0].checked) {counter++;}
	  if (test.q17[1].checked) {counter++;}
     document.test.display.value = counter;
}