import React, { createContext, useContext, useEffect, useState } from 'react'

export const FALLBACK_AVATAR =
  'https://ui-avatars.com/api/?name=Aman+Modanwal&background=0a0a0f&color=4fd1c5&size=220'

export const FALLBACK_BIO =
  'Full-stack developer shipping production React, Node.js, and real-time systems.'

const GITHUB_USERNAME = 'amanmodanwal28'

const GitHubContext = createContext({
  user: null,
  loading: true,
  avatar: FALLBACK_AVATAR,
  bio: FALLBACK_BIO,
  name: 'Aman Modanwal',
  sinceYear: 2022,
})

export function GitHubProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
        )
        if (!res.ok) throw new Error('API error')
        const data = await res.json()
        if (!cancelled) setUser(data)
      } catch {
        if (!cancelled) setUser(null)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const value = {
    user,
    loading,
    avatar: user?.avatar_url || FALLBACK_AVATAR,
    bio: user?.bio || FALLBACK_BIO,
    name: user?.name || 'Aman Modanwal',
    sinceYear: user?.created_at
      ? new Date(user.created_at).getFullYear()
      : 2022,
  }

  return (
    <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>
  )
}

export function useGitHub() {
  return useContext(GitHubContext)
}
