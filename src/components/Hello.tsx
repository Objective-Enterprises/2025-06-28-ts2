import { type FC } from 'react'

interface HelloProps {
  person: string
  color: string
}

// export default function Hello ({ person, color }: HelloProps) {
//   const style = { color }
//   return <h1 style={style}>Hello {person}!</h1>
// }

const Hello: FC<HelloProps> = ({ person, color}) => {
  const style = { color }
  return <h1 style={style}>Hello {person}!</h1>
}
export default Hello