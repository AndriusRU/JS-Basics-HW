function simpleNumber(n) {
    let i = 1;
    if (+n === 0) {
        return `Простых чисел в таком количестве (${n}) не существует.`;
    }
    
    const simpleNumbers = [2];
    
    if (+n === 1) {
        return simpleNumbers[0];
    } else {
        let inNumber = simpleNumbers[0];
        inNumber++;
        let flag = false;
        while (i < n) {
            
            for (let j = 0; j < simpleNumbers.length; j++) {
                if (inNumber % simpleNumbers[j] === 0) {
                    flag = false;
                    break;
                }
                flag = true;
            }
            if (flag) {
                simpleNumbers.push(inNumber);
                i++;
            }
            inNumber++;

        }

    }
    return simpleNumbers;
}

console.time()
console.log(simpleNumber(process.argv[2]).length);
console.log(simpleNumber(process.argv[2]));
console.timeEnd()
  

