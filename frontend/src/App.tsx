import './App.css'
import snowboardPic from './assets/snowboard.png'

type ReportKind = 'bug' | 'feature'

type Report = {
  id: string
  text: string
  kind: ReportKind
};

function App() {
  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
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
        <p>{sampleReport.text} ({sampleReport.kind})</p>
      </section>





    </main>
  )
}

export default App
