// Your code here
const saturdayFun = (activity = 'roller-skate') => `This Saturday, I want to ${activity}!`;

const mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`;

function wrapAdjective(special = '*') {
    return function(str = 'a hard worker') {
        return `You are ${special}${str}${special}!`
    }
}