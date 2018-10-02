function dataBase(test) {
     var counter=0;
     if (test.q1[2].checked) {counter++;}
     if (test.q2[0].checked) {counter++;}
     if (test.q3[1].checked) {counter++;}
     if (test.q4[1].checked) {counter++;}
     if (test.q5[2].checked) {counter++;}
      if (test.q6[2].checked) {counter++;}
     if (test.q7[1].checked) {counter++;}
     
	
     document.test.display.value = counter;
}