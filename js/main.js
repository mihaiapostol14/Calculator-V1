document.addEventListener('DOMContentLoaded', () => {
  const inputDisplay = document.getElementById('calculator_input')
  const buttons = document.querySelectorAll('.item, .item_calc')
  let currentInput = ''

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let value = button.textContent.trim()

      switch (value) {
        case 'C':
        case 'CE':
          currentInput = ''
          break
        case '»':
          currentInput = currentInput.slice(0, -1)
          break
        case '=':
          try {
            currentInput = eval(currentInput.replace('÷', '/').replace('×', '*').replace('−', '-')).toString()
          } catch (error) {
            currentInput = 'Error'
          }
          break
        case '¼':
          currentInput = (parseFloat(currentInput) / 4).toString()
          break
        case '√':
          currentInput = Math.sqrt(parseFloat(currentInput)).toString()
          break
        case 'a^x':
          currentInput += '**'
          break
        default:
          currentInput += value
      }

      inputDisplay.value = currentInput
    })
  })
})
