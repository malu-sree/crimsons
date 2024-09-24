let studDetails = [
    {
        'Name': 'Adam', Age: '5', Languages: ['tamil', 'english', 'Japanese', 'french'], isLoggedIn: 'Yes',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 50 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 30 } }
    },
    {
        'Name': 'Madam', Age: '17', Languages: ['Malayalam', 'Dutch', 'tamil'], isLoggedIn: 'No',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 40 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 60 } }
    },
    {
        'Name': 'madam', Age: '21', Languages: ['Malayalam', 'Dutch', 'tamil'], isLoggedIn: 'Yes',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 60 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 50 } }
    },
    {
        'Name': 'Name', Age: '35', Languages: ['Tamil', 'Dutch', 'tamil'], isLoggedIn: 'No',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 80 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 40 } }
    },
    {
        'Name': 'Jhon', Age: '20', Languages: ['Malayalam', 'Dutch', 'Malayalam'], isLoggedIn: 'Yes',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 10 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 30 } }
    },
    {
        'Name': 'Deo', Age: '49', Languages: ['Malayalam', 'Dutch', 'tamil'], isLoggedIn: 'Yes',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 90 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 20 } }
    },
    {
        'Name': 'madam a Madam', Age: '71', Languages: ['Malayalam', 'Dutch', 'dutch'], isLoggedIn: 'No',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 16 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 100 } }
    }
]


// 1. Find the name of the students age above 20.&
// 2. Find the name of the students who knows malayalam and dutch.&
// 3. How many students in the array.&
// 4. Find the name of the student who as obtained marks above 40 in Physics and english.%
// 5. Find the percentage of total marks obtained.
// 6. Find the age below 45 and who knows the language malayalam.%
// 7. Find the name is palindrome or not.&
// 8. Find the name of the students who age is prime number.&
// 9. Find the name in ascending order according to physics marks.%
// 10. Remove the duplicates in language.
// 11. Find the students name who are logged in and their age must be above 10 and they know malayalam.%
// 12. Find the students name who are got fail mark in both the subjects. pass-limit 50
// 13. Find the Palindrome in Language and return their student's name


console.log("1:==================")
console.log(studDetails.filter((a) => a.Age>20))
console.log("2:==================")
console.log(studDetails.filter((a) => a.Languages.includes("Malayalam")&& a.Languages.includes("Dutch")))
console.log("3:==================")


let st=studDetails.length
console.log(st)
console.log("4:==================")


console.log(studDetails.filter((a) => a.marks.English.marks_obtained>40 && a.marks.Physics.marks_obtained>40))


console.log("6:==================")
let a=studDetails.filter((b) => b.Age<45)
console.log(a.filter((b) => b.Languages.includes("Malayalam")))


console.log("5:==================")
console.log(studDetails.forEach((a) => (a.marks.marks_obtained*100)% a.marks.marks_total))


console.log("8:==================")



function prime(num) {
    if (num <= 1) return false;
    

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) 
            return false;
    }
    return true;
}
 let pr=studDetails.filter((a) => prime(a.Age) )
 console.log(pr)

console.log("7:==================")

function palindrome(str) {
    str=str.toUpperCase()
    let temp = str;
    let rev = "";
    let i = str.length - 1;
    while (i >= 0) {
        rev += str[i];
        i--;
    }
    return temp == rev;

}
studDetails.filter(a =>{ a.Name
    if(palindrome(a.Name))
        {
        console.log(`${a.Name} is a palindrome`)
    }
    else
    console.log(`${a.Name} is a not palindrome`)
})
console.log("9:==================")
console.log(studDetails.sort((a,b) => a.marks.Physics.marks_obtained-b.marks.Physics.marks_obtained))

console.log("11:==================")
console.log(studDetails.filter((a)=> a.isLoggedIn=='Yes'&&a.Age>10&&a.Languages.includes("Malayalam")))


console.log("12:==================")

console.log(studDetails.filter((a) => a.marks.English.marks_obtained<50 && a.marks.Physics.marks_obtained<50))

console.log("13:==================")


