export default function Increase() {

    function counter() {
        let result = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = result
    }

    return (
        <div>
            <div id="count">0</div>
            <button onClick={counter}>카운트증가</button>
        </div>
    )
}