export const Members = [
  /* The provided member data */
] as const

console.log("Members:", Members)
console.log(
  "Kanish & Partners:",
  Members.find((m) => m.Name === "Kanish & Partners" || m.Firstname === "Kanish"),
)

