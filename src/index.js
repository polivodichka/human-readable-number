module.exports = function toReadable (number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tens = [, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 
  
    return number < 20? 
        units[number]:
    number < 100? 
        tens[Math.trunc(number/10)] + (number % 10 != 0 ? ' ' + units[number % 10] : ''): 
    number<1000?
        units[Math.trunc(number/100)] + ' hundred' + (number%100!=0?' ' + toReadable(number%100):''): 
    'Sorry, can\'t read it :(';
}
