/* eslint-disable @typescript-eslint/consistent-type-definitions */
function KgToLbs(weight: number | string): number {
  if (typeof weight === 'number')
    return weight * 22

  else
    return parseInt(weight) * 2.2
}

KgToLbs(10)
KgToLbs('10kg')

type Dragable = {
  drag: () => void
}

type Resizeable = {
  resize: () => void
}

type UIWidget = Dragable & Resizeable

const textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
}
console.log(textBox)
