function dataBase(test) {
     var counter=0;
     if (test.q1[2].checked) {counter++;}
     if (test.q2[1].checked) {counter++;}
     if (test.q3[1].checked) {counter++;}
     if (test.q4[2].checked) {counter++;}
     if (test.q5[1].checked) {counter++;}
     if (test.q6[0].checked) {counter++;}
     if (test.q7[1].checked) {counter++;}
     if (test.q8[0].checked) {counter++;}
     if (test.q9[1].checked) {counter++;}
     if (test.q10[0].checked) {counter++;}
	 if (test.q11[2].checked) {counter++;}
     document.test.display.value = counter;
}