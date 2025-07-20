import { useState } from 'react'
import DiagnosisForm from './components/DiagnosisForm'
import ResultBox from './components/ResultBox'
import { rules } from './data/rules'
import './App.css' // Tambahkan CSS ini

function App() {
  const [result, setResult] = useState(null)

  const diagnose = (symptoms) => {
    const found = rules.find(rule =>
      rule.symptoms.every(sym => symptoms.includes(sym))
    )
    setResult(found?.diagnosis || null)
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Sistem Pakar Diagnosa Keracunan Makanan</h1>
        <DiagnosisForm onDiagnose={diagnose} />
        <ResultBox result={result} />
      </div>
    </div>
  )
}

export default App
