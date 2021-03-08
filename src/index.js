module.exports = function toReadable (number) { 
    let singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let doubleDigits = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    let arr = number.toString().split('');

    if (arr.length == 3) {
        if (arr[1] == 0 && arr[2] == 0) {
            return (singleDigits[parseInt(arr[0])] + ' hundred')
        } else if (arr[1] == 0) {
            return (singleDigits[parseInt(arr[0])] + ' hundred ' + singleDigits[parseInt(arr[2])]) 
        } else if (arr[2] == 0) {
            return (singleDigits[parseInt(arr[0])] + ' hundred ' + doubleDigits[parseInt(arr[1])]) 
        }  else if (arr[1] == 1) {
            return (singleDigits[parseInt(arr[0])] + ' hundred ' + singleDigits[parseInt(arr[1] + arr[2])]) 
        } else {
            return (singleDigits[parseInt(arr[0])] + ' hundred ' + doubleDigits[parseInt(arr[1])] + ' ' + singleDigits[parseInt(arr[2])])
        } 
    } 
    
    if (number == 0) {
        return 'zero'
    }

    if (arr.length == 2) {  
    } if (number < 100 && number % 10 == 0) {
        return doubleDigits[arr[0]] 
    } else if (number < 20) {
        return singleDigits[number] 
    } else {
        return (doubleDigits[arr[0]] + ' ' + singleDigits[arr[1]])
    } 
}
