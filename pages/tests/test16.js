function dataBase(test) {
     var counter=0;
     if (test.q1[1].checked) {counter++;}
     if (test.q2[0].checked) {counter++;}
     if (test.q3[2].checked) {counter++;}
     if (test.q4[0].checked) {counter++;}
     if (test.q5[2].checked) {counter++;}
     if (test.q6[0].checked) {counter++;}
	 if (test.q7[0].checked) {counter++;}
	 if (test.q8[0].checked) {counter++;}
	 if (test.q9[1].checked) {counter++;}
	 
     document.test.display.value = counter;
}