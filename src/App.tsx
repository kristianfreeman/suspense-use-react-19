import './App.css'

import { ErrorBoundary } from 'react-error-boundary'
import { CircleX, LoaderIcon } from "lucide-react"
import { Suspense, useState } from 'react'

import Menu from "./Menu"
import Repos from "./Repos"

export type ViewOption = 'daily' | 'weekly' | 'monthly'

const Error = <div className="flex gap-2">
  <CircleX className="text-red-500" /> Something went wrong
</div>

const Loader = <div className="flex gap-2">
  <LoaderIcon className="animate-spin" /> Loading...
</div>

function App() {
  const [view, setView] = useState<ViewOption>('daily')

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">React <code>use</code> API Example</h1>
      <h2>
        Example showing the <code>use</code> API included in React 19, in combination with <code>React.Suspense</code> and error boundaries. <a href="https://github.com/kristian/suspense-use-react-19" className="underline">Source code here</a>.
      </h2>

      <div className="flex flex-col items-center gap-8">
        <Menu setView={setView} view={view} />
        <ErrorBoundary fallback={Error}>
          <Suspense fallback={Loader}>
            <Repos view={view} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
