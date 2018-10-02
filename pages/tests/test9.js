function dataBase(test) {
     var counter=0;
     if (test.q1[2].checked) {counter++;}
     if (test.q2[0].checked) {counter++;}
     if (test.q3[1].checked) {counter++;}
     if (test.q4[0].checked) {counter++;}
     if (test.q5[2].checked) {counter++;}
     if (test.q6[2].checked) {counter++;}
	 if (test.q7[0].checked) {counter++;}
	 if (test.q8[1].checked) {counter++;}
	 if (test.q9[0].checked) {counter++;}
	 if (test.q10[0].checked) {counter++;}
	 if (test.q11[1].checked) {counter++;}
	 if (test.q12[0].checked) {counter++;}
	 if (test.q13[0].checked) {counter++;}
	 if (test.q14[0].checked) {counter++;}
	 if (test.q15[2].checked) {counter++;}
	 if (test.q16[2].checked) {counter++;}
	 if (test.q17[0].checked) {counter++;}
	 if (test.q18[1].checked) {counter++;}
	 if (test.q19[2].checked) {counter++;}

	
     document.test.display.value = counter;
}