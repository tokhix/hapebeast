import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../Nav/header';
import Welcome from '../transitions/welcome';

const Layout = (props: any) => {
  const router = useRouter()

    return (
      <>
            <Head>
                <title>HAPEBEAST</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
            </Head>

            <Header/>
            { props.children}
            </>
    )
}

export default Layout;