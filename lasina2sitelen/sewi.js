update_sitelen = () =>{
    const v = String(document.getElementById("lasina_input").value)
    if (v == ""){
        x = document.getElementById("out_p").innerText = "sitelen li kama lon ni"
        return
    }
    document.getElementById("out_p").innerText = v.trim()
}