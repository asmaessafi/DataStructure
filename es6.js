// function getMiddle(s) {
//     let len=0
//     for (let i in s){
//       len+=1
//     }
//    let med=''
    
//    if(len!==1){
//     for (let i in s ){
      
//         if (len %2!==0 ){
//           let index =Math.floor([(len/2)])
//           med=s[index]
//         }
//          else{
//            med= s[(len/2)-1] + s[(len/2)]
//         }
    
//        }
//    }
//    else{
//     med=s[0]
//    }
//       return med;
//   }
//   function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
//   console.log(getMiddle('oit'))
// function opposite(number) {
//     return ((number>0)?`-${number}`: number.toString().slice(1))
//    }
//    return(-number);

//    function accum(s) {
//     let news="";
//     for (let i=0;i<s.length; i++){
//         news+= (s[i].toUpperCase()+(s[i].repeat(i)).toLowerCase()+"-");
//     }
// return news.replace(/.$/, '')
// // .slice(0,news.length-1);
// }
// console.log(accum('aByfD'))
// var isSquare = function(n){
    
//     // return (((Math.sqrt(n))/n==0)?true:false)
//     return (Number.isInteger(Math.sqrt(n)))
// }
//   console.log(isSquare(7))

// function disemvowel(str) {
//     let tab= str.split('') 

//       for(i in tab){
//         if('aeouiAEOUI'.includes(tab[i])){
//             tab.splice(i,1)
            
//            }
//       }
//     let ch=tab.join('')
//      return ch;
// }

// function disemvowel(str) {
//     let rsl=""
//     for (let i = 0; i < str.length; i++){
//         if(!'aeouiAEOUI'.includes(str[i])){
//             rsl+=str[i]
//            }
//       }
//      return rsl;
// }
//      console.log(disemvowel('abababa'))
// disemvowels=str=>str.replace(/[aeoiu]/gi,"");
//      console.log(disemvowels('abababa'))

// const highAndLow=(str)=>{
//     let m=0
//     let M=0
//     let tab=(str.split(' '))
// tab.filter(element => {
//  ( Number(element))
//    M=Math.max(...tab)
//    m=Math.min(...tab)
// });
// return `${M} ${m}`}
//   console.log(highAndLow('5 8 4 2 1 9 6 3 7 2'))


// function XO(str) {
//     let cx=0
//     let co=0
//     str=str.split('')
//    str.forEach(element=>{
//      if('Xx'.includes(element)){cx+=1}
//      if('Oo'.includes(element)){co+=1}
//    })
//    return co===cx

//  }
//  console.log(XO('oilkuohytoxe'))

// const squareDigits=(num)=>{
//     let tab=String(num).split('').map(Number)
//     tab=tab.map(element => element**2);
//    return Number(tab.join(''));
//  }
//  console.log(squareDigits(1254))

// const findShort=(s)=>{
//     let tab=s.split(' ')
//      return Math.min(...(tab.map(element=>element.length)))
//     }
//   console.log(findShort('bgt u bg'))
//   function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }

// const dnaStrand=(dna)=>{
//   let tab=dna.split('')
//   tab=tab.map(element=>{
//     switch(element){
//         case'A':return'T'
//         case'T':return'A'
//         case'G':return'C'
//         case'C':return'G'
//     }console.log(tab)
//   })

//   return tab.join('')
// }
// console.log(dnaStrand('TAAACG'))

// const positiveSum=(arr)=>{
//   let sum=0
//   let tab=arr.filter(element=>element>=0)
//   tab.forEach(element=>sum+=element)
//   return sum
// }
// console.log(positiveSum([1,5,8,2,-9]))

// function isIsogram(str){
//   let tab=str.toLowerCase().split('')
//   console.log(tab)
// }
// console.log(isIsogram('gtERFy'))

// const filter_list=(l)=>{
//   return l.filter(element => typeof element==='number')
// }
// console.log(filter_list([1,2,'a','b']));


// function sumTwoSmallestNumbers(numbers) {  
//   //Code here
//   return Math.min(...numbers)+Math.min(...(numbers.filter(element=>(element>Math.min(...numbers)))))}
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

// function repeatStr (n, s) {
//   return typeof(n.repeat(s));
// }
// console.log(repeatStr('fr',5));

// function findNextSquare(sq) {
//   return( Number.isInteger(Math.sqrt(sq)))?((Math.sqrt(sq))+1)*((Math.sqrt(sq))+1):-1}
// console.log(findNextSquare(121));

// const boolToWord=( bool )=>bool==true? "Yes":"No"
// console.log(boolToWord(false));

// const solution=(str, ending)=>str.endsWith(ending)
// console.log(solution('auiobs','uiobs'));

// const findNeedle=(haystack)=>{
//   let found=haystack.find(element=>element==="needle")
//   console.log(found);
  
//     return haystack.indexOf(found)
//   }
//   console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] ));
  

// function greet(name){
  
//   if(name === "Johnny")
//    { return "Hello, my love!"};
//   return "Hello, " + name + "!";
// }
// console.log(greet('Johnny'));

// const descendingOrder=(n)=> parseInt(String(n).split('').sort((a,b)=>b-a).join(''))
  
//  console.log(descendingOrder(584))


// function nbYear(p0, percent, aug, p) {
//   let perc=percent/100
//   let n=0
//   while(p0<p){
//     p0=Math.floor(p0+p0*perc+aug)
//     n+=1
//   }
//  return n
// }
// console.log(nbYear(1500000, 2.5, 10000, 2000000));

// function abbrevName(name){
//   let tab=name.split(' ')
//     let tab1=tab.map(element=>element[0])
//     console.log(tab1)
//      return tab1.join('.').toUpperCase()
  
//   }
//   console.log(abbrevName('Sam Harris'))

// function DNAtoRNA(dna) {
//   return dna.replace(/T/g,'U')
//  }
//  console.log(DNAtoRNA("GCTT"))
// function DNAtoRNA(dna) {
//   return dna.replaceAll('T','U');
// }
// function findOutlier(integers){
//   let o=0
//   let e=0
//   integers.forEach(element=>(element%2==0)?e+=1:o+=1)
//     if (e>o){
//      return integers.find(element=>element%2!==0)
//     }
//     else{return integers.find(element=>element%2==0)}
//   }
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

const serieSum=(n)=>{
if(n===0)return "0.00"
let sum=0
for(let i=1;i<n;i++){
sum+=1/(1+i*3)
}
return sum.toFixed(2)
}
console.log(serieSum(2));
