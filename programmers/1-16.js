/* 조건문 실전 적용 - 점수에 따른 등급 */
function grade(score) {
    if(score < 0 && score > 100) {
        console.log("잘못된 점수입니다");
    } else if(score >= 90) {
        console.log("A");
    } else if(score >= 80) {
        console.log("B");
    } else if(score >= 70) {
        console.log("C");
    } else if(score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}