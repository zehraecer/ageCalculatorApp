const inputDay = document.querySelector(".inputDay")
const inputMonth = document.querySelector(".inputMonth")
const inputYear = document.querySelector(".inputYear")
const button = document.querySelector(".button img")

const dayError = document.querySelector(".dayError")
const monthError = document.querySelector(".monthError")
const yearError = document.querySelector(".yearError")

const dayEmptyError = document.querySelector(".dayEmptyError")
const monthEmptyError = document.querySelector(".monthEmptyError")
const yearEmptyError = document.querySelector(".yearEmptyError")

const inputs = [inputDay, inputMonth, inputYear]

const container = document.querySelector(".container")

const ageDay = document.querySelector(".age-days h1")
const ageMonth = document.querySelector(".age-month h1")
const ageYear = document.querySelector(".age-years h1")

const date = new Date()
const year = date.getFullYear()
const month = 1 + date.getMonth()
const day = date.getDate()



// const inputDayValue = parseInt(inputDay.value)
// const inputMonthValue = parseInt(inputMonth.value)
// const inputYearValue = parseInt(inputYear.value)




button.addEventListener("click", getAge)


function getAge(){
   console.log("calisiyor mu");

   const totalDay = day - inputDay.value
   ageDay.innerHTML=`${totalDay}`

   const totalMonth = (12- inputMonth.value) + month
   const totalMonthNew = month - inputMonth.value
  if(inputMonth.value <  month){
    ageMonth.innerHTML=`${totalMonthNew}`
  }
  else{
    ageMonth.innerHTML=`${totalMonth}`

  }
  const totalYears = (year - inputYear.value) - 1
  const totalYearsNew = year - inputYear.value
  if(inputMonth.value > month){
    ageYear.innerHTML=`${totalYears}`
  }
  else{
    ageYear.innerHTML=`${totalYearsNew}`
  }
}





inputs.forEach(function(input){
input.addEventListener("input",function(){
  if(inputDay.value > 31){
    dayError.style.display="block";    
  }
  if(inputDay.value < 31){
    dayError.style.display="none";
  }
  if(inputDay.value === ""){
    dayEmptyError.style.display="block"
  }
  else{
    dayEmptyError.style.display="none"
  }
  if(inputMonth.value > 12){
      monthError.style.display="block";
  }
  if(inputMonth.value < 12){
      monthError.style.display="none";
   }
  if(inputMonth.value === ""){
    monthEmptyError.style.display="block"
  }
  else{
    monthEmptyError.style.display="none"
  }  
  if(inputYear.value > year){
    yearError.style.display="block";
  }
  if(inputYear.value < year){
    yearError.style.display="none";
 }
 if(inputYear.value === ""){
  yearEmptyError.style.display="block"
}
else{
  yearEmptyError.style.display="none"
}  
})
})










