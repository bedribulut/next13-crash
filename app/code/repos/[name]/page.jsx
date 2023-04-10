import Repo from "@/components/Repo"
import RepoDirs from "@/components/RepoDirs"
import Link from "next/link"
import { Suspense } from "react"

function RepoPage({ params: { name }}) {
  return (
    <div className="card">
      <Link
        href="/code/repos"
        className="btn btn-back">
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={ name } />
      </Suspense>
      <Suspense fallback={<div>Loading repo...</div>}>
        <RepoDirs name={ name }/>
      </Suspense>
    </div>
  )
}

export default RepoPage