import InputField from "./components/InputField"

const App: React.FC = () => {
  const getName = (name:string):void => {
    console.log(name)
  }
 
  return (
    <>
      <InputField getName = {getName} />
    </>
  )
}

export default App