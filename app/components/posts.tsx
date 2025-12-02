import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/projects/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col space-y-1 mb-4 p-4 -mx-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-baseline">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums shrink-0">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
