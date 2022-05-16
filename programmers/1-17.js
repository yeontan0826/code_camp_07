/* 마이페이지 */
const myShopping = [
    { category: "과일", price: 12000 },
    { category: "의류", price:10000 },
    { category: "의류", price: 20000 },
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000 },
    { category: "의류", price: 10000 },
    { category: "과일", price: 8000 },
    { category: "의류", price: 7000 },
    { category: "장난감", price: 5000 },
    { category: "의류", price: 10000 },
]

function record() {
    let count = 0;
    for(let i=0;i<myShopping.length;i++) {
        if(myShopping[i].category === "의류") {
            count++;
        }
    }
    
    if(count >= 5) {
        console.log("Gold");
    } else if(count >= 3) {
        console.log("Silver");
    } else {
        console.log("Bronze");
    }
}

record()