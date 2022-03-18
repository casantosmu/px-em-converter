const calculateRem = () => {
    const baseSize = document.querySelector('#base-size').value.replace(/\s/g, "")
    const pixels = document.querySelector('#pixels').value.replace(/\s/g, "")

    return (1 / baseSize) * pixels
}

const showRem = () => {
    const input = document.querySelector('#rem')
    const result = calculateRem()
    if (isFinite(result)) input.value = result + 'rem'
}

const addRemoveError = input => {
    if (input.value.replace(/\s/g, "") > 0) {
        input.classList.remove('converter__input--error')
    } else {
        input.classList.add('converter__input--error')
    }
}

const clickHandler = () => {
    inputs.forEach(input => {
        addRemoveError(input)
        showRem()
    })
}

const keyupHandler = e => {
    addRemoveError(e.target)
    showRem()
}

const converterForm = document.querySelector('#rem-converter')
const inputs = document.querySelectorAll('.converter__input:not([readonly])')

// Reset form & show when page loads
window.onload = converterForm.reset()
showRem()

// Event listeners
document.addEventListener('click', clickHandler)
inputs.forEach(input => input.addEventListener('keyup', keyupHandler))
