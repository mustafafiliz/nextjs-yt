import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Index({}: Props) {
  return (
    <>
    <h1>Post Listesi</h1>
    <div className='flex flex-col gap-5'>
      <Link href="/posts/1">Post-1</Link>
      <Link href="/posts/2">Post-2</Link>
      <Link href="/posts/3">Post-3</Link>
    </div>
    </>
  )
}