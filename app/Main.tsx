import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 4

const focusAreas = ['Software notes', 'Project write-ups', 'Systems thinking']
const currentNotes = [
  'Shipping small, useful things without overcomplicating the stack.',
  'Keeping a writing habit that makes future debugging easier.',
  'Collecting short, reusable ideas instead of letting them disappear in chat logs.',
]

export default function Home({ posts }) {
  return (
    <>
      <section className="pt-6 pb-16 md:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-primary-500 text-sm font-semibold tracking-[0.25em] uppercase">
              Personal blog
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
                Mohammad&apos;s notes on building the web.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-500 dark:text-gray-400">
                {siteMetadata.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase dark:text-gray-400">
              Currently focused on
            </p>
            <ul className="mt-6 space-y-4">
              {currentNotes.map((note) => (
                <li
                  key={note}
                  className="rounded-2xl border border-gray-200/80 bg-white/80 p-4 text-sm leading-6 text-gray-600 backdrop-blur dark:border-gray-800 dark:bg-gray-950/70 dark:text-gray-300"
                >
                  {note}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="divide-y divide-gray-200 dark:divide-gray-800">
        <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Latest Writing
            </h2>
            <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
              Recent posts, experiments, and notes.
            </p>
          </div>
          {posts.length > MAX_DISPLAY && (
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
              aria-label="All posts"
            >
              All posts &rarr;
            </Link>
          )}
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {!posts.length && <li className="py-12 text-gray-500">No posts found.</li>}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h3>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <p className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </p>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
