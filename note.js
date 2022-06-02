//CHAPTER NO 38 TO 44;
// // Question # 1
// function power(num,power){
//           var power=num**power;
//           return power
//     }
// var a=+prompt('Enter number ');
//  var b=+prompt('Enter  power');
//  var power=power(a,b);
//  document.write(a+'<sup>' + b +'</sup>'+'is '+power)

// Question # 2;
// var year = prompt("write any year to know this year is leap or not?", "2012");
// function leap() {
//     var leapYear =["2012","2016", "2020", "2024"];
//      for (var i=0; i<leapYear.length; i++) {
//          if (year === leapYear[i]) {
//              alert(" This year is leapYear");
//              break;
//          }
//          else if(year !== leapYear[i]) {
//              alert("This year is not a leap year");
//              break;
//          }
//      }
// }
// leap();

// Question # 3;
// function findS(a,f,m) {
//     return(a+f+m)/2;
// }
// function findArea(a,f,m) { 
//     var S = findS(a,f,m);
//     var result = S*(S-a) * (S-f)*(S-m);
//     return result;
// }
// document.write("Area of the triangle"+" " + (findArea(2,4,4)));

// Qurestion # 4;
// function mainFunction() {
//     var sub1 = +prompt('Enter first subject marks');
//     var sub2 = +prompt('Enter second subject marks');
//     var sub3 = +prompt('Enter third subject marks');
//     var total = +prompt('Enter total marks')
//     var average = ave(sub1, sub2, sub3);
//     var per = percen(sub1, sub2, sub3, total);
//     document.write('<h3>' + 'Average is ' + '</h3>' + average + '<br>');
//     document.write('<h3>' + 'Percentage is ' + '</h3>' + per+' %' + '<br>');
//  }
//     function ave(a, b, c) {
//         var av = (a + b + c) / 3;
//         av=av.toFixed(2)
//         return av;
//     }
//      function percen(a, b, c, total) {
//         var percentage = ((a + b + c) / total) * 100;
//        percentage= percentage.toFixed(2);
//         return percentage;
//     }
//     mainFunction();

// Question # 5:
// var wel ='Welcome';
// function index() { 
//     for (var i=0; i<wel.length; i++){
//         if(wel[i] === "c") {
//             return i;
//         }
//     }
// }
// document
// .write("Finding Index" + " " + index());

// Question # 6:
// function vowels() {
//     var vow = prompt("wtrite some sentence?").toLowerCase();
//     var change = vow.replace(/[aeiou]/g,'');
//     console.log(change)
// }
// vowels()

// Question # 7:
 // var str = 'Please read this application and give me gratuity';
// var occurence = [];
// var count = 0;
// function findOccurence() {
//     var chars = str.toLowerCase().split('');
//     for (var i = 0; i < chars.length; i++) {
//         var char = chars[i];
//         var next = chars[i + 1];
//         if (isCorrectCharc(char) && isCorrectCharc(next)) {
//             count++;
//             var twoChar = char + next;
//             occurence.push(twoChar)
//         }
//     } return count
// }
// function isCorrectCharc(char) {
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false
//     }
 // }
// var count = findOccurence();
// document.write('String :' + str + '<br>');
// document.write('Count :' + count + '<br>');
// document.write('Occurence :' + occurence + '<br>');

// Question # 8:
// var distance = Number(prompt("Write distance between two cities"));
// function disInMeter() {
//     var meter = distance*1000;
//     document.write("The distance between two cities in meter is "+ " " + meter+"<br/>");
// }
// function disInFeet() {
//     var feet = distance*3280.84;
//     document.write("The distance between two cities in feet is "+ " " + feet+"<br/>");
// }
// function disInInches() {
//     var inches = distance*39370.1;
//     document.write("The distance between two cities in inches is "+ " " + inches+"<br/>");
// }
// function disInCentimeters() {
//     var centimeters = distance*100000;
//     document.write("The distance between two cities in centimeter is "+ " " + centimeters+"<br/>");
// }
// disInMeter();
// disInFeet();
// disInInches();
// disInCentimeters();

// Question # 9:
// var workingHours = prompt("how many hours you have worked");
// var perHour = 12;
// if (workingHours > 40) {
//     var overTime  = (workingHours - 40)*perHour;
//     console.log("Your over time pay is " + " " + overTime);
// }

// Question # 10:
// var amount = prompt("Enter amount to withdraw")
// var hundred = parseInt(amount/100)
// var fity = parseInt((amount%100)/50)
// var ten = parseInt(((amount%100)%50)/10)
// document.write("Entered Amount" + amount+"<br/>");
// document.write("You will have "+hundred+"hundred note"+ fity+"fifty notes"+ten+"ten notes.")