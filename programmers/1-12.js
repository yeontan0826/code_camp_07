/* 반복문 : 특정 문자열 세기 */
function countLetter(str) {
    let count = 0;
    let lowerStr = str.toLowerCase();

    for(let i=0;i<=str.length;i++) {
        if(lowerStr[i] === 'a') count++;
    }

    console.log(count);
}