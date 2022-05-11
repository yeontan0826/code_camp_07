export default function CounterDocumentPage() {

    function increase() {
        const result = Number(document.getElementById("count").innerText) + 1;
        document.getElementById("count").innerText = result;
    }

    function decrease() {
        const count = Number(document.getElementById("count").innerText);

        if(count !== 0) {
            const result = Number(document.getElementById("count").innerText) - 1;
            document.getElementById("count").innerText = result;
        }
    }
            
    return (
        <div>
            <div id="count">0</div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}