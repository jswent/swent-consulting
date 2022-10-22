import React from 'react'
import Head from 'next/head'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>{pageTitle}</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content="#f0e7db" media="(prefers-color-scheme: light)" />
        <meta name='theme-color' content="#202023" media="(prefers-color-scheme: dark)" />


        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='/assets/images/logo/favicon.png'
        />
      </Head>

      {children}
    </div>
  )
}

export default Layout
