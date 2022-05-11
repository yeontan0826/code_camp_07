export default function Hello() {

    function hello() {
        document.getElementById("helloButton").innerText = "반갑습니다"
    }

    return (
        <div>
            <button id="helloButton" onClick={hello}>안녕하세요</button>
        </div>        
    )
}