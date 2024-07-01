const button = document.querySelector("button")
button.addEventListener("click",()=>{
    const p = document.querySelector("p")
    let color = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
    document.body.style.backgroundColor = color
    p.textContent = `Hexadecimal Code : ${color}`
    p.style.display = "block"
})