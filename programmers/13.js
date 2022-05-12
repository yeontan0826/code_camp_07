/* 반복문 : 문자열 삽입 */
function makeNumber(num) {
    let str = '1';

    for(let i=2;i<=num;i++) {
        str = str + "-" + i;
    }

    console.log(str);
}