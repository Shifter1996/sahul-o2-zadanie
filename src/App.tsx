import { useState } from 'react'
import { TextField } from './components/TextField'

function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container ">
        <TextField
          label='First name'
          description='Here you should enter your first name'
          // isDisabled
          // isInvalid
          placeholder="For example Dusan"
          value={firstName}
          onChange={setFirstName}
          // errorMessage={"Some error message oh no..."}
        />
      </div>
    </div>
  );
}

export default App
