const speed: number | null = null
const ride = {
  // falsy(undefined, null, '', false, 0)
  // speed: speed || 30,
  // nullish coalescing operator null, undefined
  speed: speed ?? 30,
}
console.log(ride)
