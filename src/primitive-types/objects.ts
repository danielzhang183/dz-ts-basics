const employee: {
  readonly id: number
  name?: string
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'Daniel',
  retire: (date: Date) => {
    console.log(date)
  },
}

// employee.id = 2
employee.name = 'Dylan'

