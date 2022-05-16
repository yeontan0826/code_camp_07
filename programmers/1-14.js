/* 반복문 : 홀수 문자열 */
function makeOdd(num) {
    let str = '1';

    for(let i=2;i<=num;i++) {
        if(i % 2 !== 0) str = str + i;
    }

    console.log(str);
}