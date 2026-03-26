class Calculator {
  constructor() {
    this.display = document.querySelector('#display')
    this.buttons = document.querySelectorAll('.item, .item_calc')
    this.currentInput = ''

    this.init()
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent.trim()
        this.handleInput(value)
        this.updateDisplay()
      })
    })
  }

  handleInput(value) {
    switch (value) {
      case 'C':
      case 'CE':
        this.clear()
        break

      case '⌫':
        this.backspace()
        break

      case '=':
        this.calculate()
        break

      case '√':
        this.squareRoot()
        break

      case '1/x':
        this.inverse()
        break

      case 'x²':
        this.power2()
        break

      case '%':
        this.percent()
        break

      default:
        this.append(value)
    }
  }

  append(value) {
    // Replace visual operators with JS-friendly ones
    if (value === '×') value = '*'
    if (value === '÷') value = '/'
    if (value === '−') value = '-'

    this.currentInput += value
  }

  clear() {
    this.currentInput = ''
  }

  backspace() {
    this.currentInput = this.currentInput.slice(0, -1)
  }

  calculate() {
    try {
      this.currentInput = Function(`return ${this.currentInput}`)().toString()
    } catch {
      this.updateDisplay()
    }
  }

  squareRoot() {
    this.currentInput = Math.sqrt(parseFloat(this.currentInput) || 0).toString()
  }

  inverse() {
    this.currentInput = (1 / parseFloat(this.currentInput || 1)).toString()
  }

  power2() {
    this.currentInput = Math.pow(parseFloat(this.currentInput || 0), 2).toString()
  }

  percent() {
    this.currentInput = (parseFloat(this.currentInput || 0) / 100).toString()
  }

  updateDisplay() {
    this.display.value = this.currentInput || '0'
  }
}

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
  new Calculator()
})
