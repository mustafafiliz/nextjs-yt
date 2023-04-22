import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


export default function Slug() {
  const router = useRouter()

  const slug = router.query.slug
  return (
    <>
      <h1>Post-Detay</h1>
      <Link href="/posts">Geri</Link>
      <div>{slug}</div>
    </>
  )
}