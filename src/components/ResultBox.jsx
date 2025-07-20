// src/components/ResultBox.jsx
import './ResultBox.css'

export default function ResultBox({ result }) {
  return (
    <div className="result-box">
      <h3>Hasil Diagnosa:</h3>
      <p className={result ? 'result-text found' : 'result-text not-found'}>
        {result
          ? result
          : 'Tidak dapat menentukan jenis keracunan berdasarkan gejala yang dipilih.'}
      </p>
    </div>
  )
}
