// src/components/DiagnosisForm.jsx
import { useState } from 'react'
import './DiagnosisForm.css'

const allSymptoms = [
  'mual', 'muntah', 'diare', 'pusing',
  'lemas', 'penglihatan kabur', 'kesulitan bernapas'
]

export default function DiagnosisForm({ onDiagnose }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([])

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onDiagnose(selectedSymptoms)
  }

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2 className="form-title">Pilih Gejala</h2>
      <div className="symptom-list">
        {allSymptoms.map(symptom => (
          <label key={symptom} className="checkbox-label">
            <input
              type="checkbox"
              value={symptom}
              checked={selectedSymptoms.includes(symptom)}
              onChange={() => toggleSymptom(symptom)}
            />
            <span>{symptom}</span>
          </label>
        ))}
      </div>
      <button type="submit" className="submit-btn">Diagnosa Sekarang</button>
    </form>
  )
}
