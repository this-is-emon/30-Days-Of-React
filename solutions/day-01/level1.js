/*----Q1:Declare an empty array ---- */
 
//Using Array constructor
const arr = Array();
//console.log(arr);

//Using Square bracket
const arr2 = []
//console.log(arr2)

/*----Q2: Declare an array with more than 5 number of elements ---- */
/*----Q3: Find the length of your array ---- */
/*----Q4: Get the first item, the middle item and the last item of the array ---- */
const arr3 = [1,2,3,4,5]
// console.log(arr3.length);
// console.log(arr3[0]);
// console.log(arr3[2]);
// console.log(arr3[arr3.length-1]);

/*----Q5: Declare an array called mixedDataTypes, put different data types in the array 
and find the length of the array. The array size should be greater than 5---- */
const mixedDataTypes = [
    "My name is Emon",
    33,
    true,
    {country:"Bangladesh",city:"Dhaka"},
    {skill:['Html','css','js']},
    [1,2,3,4,5]
]
//console.log(mixedDataTypes.length);

/*----Q6: Declare an array variable name itCompanies and assign initial values 
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon---- */
const itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]

/*----Q7: Print the array using console.log()---- */
//console.log(itCompanies);

/*----Q8: Print the number of companies in the array---- */
//console.log(`Number of companies: ${itCompanies.length}`);

/*----Q9: Print the first company, middle and last company---- */
//console.log(itCompanies[0]);
//console.log(itCompanies[4]);
//console.log(itCompanies[itCompanies.length-1]);
/*----Q10: Print out each company---- */
for (let index = 0; index < itCompanies.length; index++) {
    const element = itCompanies[index];
    //console.log(element);   
}
/*----Q11: Change each company name to uppercase one by one and print them out---- */
for (let index = 0; index < itCompanies.length; index++) {
    const element = itCompanies[index].toUpperCase();
    //console.log(element);   
}

/*----Q12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.---- */
//console.log(itCompanies.join(','));

/*----Q13: Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found---- */
let index = itCompanies.indexOf("Apple");
function companyFinder(companyIndex) {
    for (let i = 0; i < itCompanies.length; i++) {
        if (condition) {
            
        }
    }
}
console.log(index);


/*----Q14: Filter out companies which have more than one 'o' without the filter method---- */
/*----Q15: Sort the array using sort() method---- */
/*----Q16: Reverse the array using reverse() method---- */
/*----Q17: Slice out the first 3 companies from the array---- */
/*----Q18: Slice out the last 3 companies from the array---- */
/*----Q19: Slice out the middle IT company or companies from the array---- */
/*----Q20: Remove the first IT company from the array---- */
/*----Q21: Remove the middle IT company or companies from the array---- */
/*----Q22: Remove the last IT company from the array---- */
/*----Q23: Remove all IT companies---- */
/*----Q24: ---- */
/*----Q25: ---- */