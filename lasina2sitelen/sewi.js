window.onload = () => {
    document.getElementById("lasina_input").setAttribute("value", "")
}

document.getElementById("lasina_input").addEventListener("keyup", (_) => {
    const v = document.getElementById("lasina_input").innerText.trim()
    if (v == ""){
        document.getElementById("out_p").innerText = "ala li lon ni"
        document.getElementById("lasina_input").setAttribute("value", "")
        return
    }
    document.getElementById("lasina_input").setAttribute("value", "โว่ย")
    document.getElementById("out_p").innerText = v
});