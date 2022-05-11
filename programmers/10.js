/* 조건문 : 며칠 */
// function days(month) {
//     if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//         console.log("31");
//     } else if(month === 4 || month === 6 || month === 9 || month === 11) {
//         console.log("30");
//     } else {
//         console.log("28");
//     }
// }

function days(month) {
    const monthList = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };

    console.log(monthList[num]);
}