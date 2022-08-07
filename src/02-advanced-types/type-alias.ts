// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Employee = {
  readonly id: number
  name?: string
  retire: (date: Date) => void
}

const employee1: Employee = {
  id: 1,
  name: 'Daniel',
  retire: (date: Date) => {
    console.log(date)
  },
}

// employee.id = 2
employee1.name = 'Dylan'

