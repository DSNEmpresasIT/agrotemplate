'use client'
import React from 'react'
import { BlogRouter } from './BlogRouter'
import { BlogAsideSection } from './BlogAsideSection'
import { BlogContextProvider } from '@/context/blog-context/blog-context'
import { Keys } from '@/util/types/types'


export const BlogComponent = ({ keys }: { keys: Keys }) => {
  return (
    <BlogContextProvider>
      <div className="flex min-[1260px]:flex-row  flex-col mx-auto gap-6 justify-center items-center min-[1260px]:items-start  pt-4">
        <BlogRouter  />
        <BlogAsideSection keys={keys} />
      </div>
    </BlogContextProvider>
  )
}
