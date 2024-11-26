
let name: string
name = 'Ram'

// let printName: (name:string) => string

// printName = (name) => {
//   console.log(name)
// }
// printName(name)
let printName: (name: string) => void; 
printName = (name) => {
   console.log(name)
};
//17:31

const App = () => {
  return (
    <div>App</div>
  )
}

export default App