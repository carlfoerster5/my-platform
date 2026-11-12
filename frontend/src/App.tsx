import './App.css'
import snowboardPic from './assets/snowboard.png'
import { useState } from 'react'


type ReportKind = 'bug' | 'feature'

type Priority = 'new' | 'urgent' | 'high' | 'medium' | 'low'

type Report = {
  id: string
  text: string
  kind: ReportKind
  priority: Priority
};






function App() {

  const initialReports: Report[] = [
    { id: '1', text: 'Navigation link is broken', kind: 'bug', priority: 'new' },
    { id: '2', text: 'Add dark mode', kind: 'feature', priority: 'new' },
    { id: '3', text: 'Something is broken', kind: 'bug', priority: 'new'}
  ]

  const [reports, setReports] = useState<Report[]>(initialReports)
  const [newReportText, setNewReportText] = useState('')

  function addReport() {
    
    const text = newReportText.trim()
    if (text.length === 0) return

    const newReport: Report = {
      id: crypto.randomUUID(),
      text: text,    
      kind: 'bug',
      priority: 'new'
    }

  setReports([...reports, newReport])
  setNewReportText('')
}


  

  



  return (
    <main>
      <h1>Carl Foerster</h1>

      <h2>Computer Science student at Grove City College</h2>

      <p>
        This site will present my software projects, engineering decisions,
        and production systems.
      </p>

      <img className = 'snowboard' src={snowboardPic}/>

      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
      </section>

      <input
    type="text"
    value={newReportText}
    onChange={(event) => setNewReportText(event.target.value)}
    placeholder="Describe a bug..."
    aria-label="New bug report"
  />

  <button type="button" onClick={addReport}>
    Add Bug
  </button>

  <ul>
    {reports.map((report) => (
      <li key={report.id}>
        {report.text} ({report.kind}, {report.priority})
      </li>
    ))}
  </ul>

      
    </main>
  )
}

export default App
