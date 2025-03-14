let darkmode = localStorage.getItem('darkmode')

const themeSwitch = document.getElementById("toggle")

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    console.log("aiaiai")
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

toggle.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})