import './App.css'

function App() {

  const midKey = import.meta.env.REACT_APP_MID_FORECAST;
  console.log(midKey);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
