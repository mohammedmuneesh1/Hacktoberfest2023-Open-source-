//avaScript Function to Split a Number into Two Halves.
//Example 5 splitted into  2,3    4 splitted into  2,2    
//if try to split zero , then "it's a zero" will be displayed

   function numberSplit(num){
            if(num==0){
                return "its a zero."
            }
            else if(num%2==0){
                even1=d=num/2;
                return [even1,even1];
            }
            else{
                num1=Math.ceil(num/2);
                num2=num-num1;
                arr=[num1,num2].sort(function(a,b){return a-b})
                return arr;

            }

        }
      console.log(numberSplit(4));
      console.log(numberSplit(5));

