'use client';

import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import { NextPageContext } from 'next'

import {request} from "@/app/api/hello/route";
import Page from "@/components/Page";
import {Container} from "@/components";


async function getPosts() {
  const contentPageView = await request.get(`/content/page-view?id=${8}`);
  return contentPageView.data ?? []
}

export default async function HomePage(props:any) {
  const recentPosts = await getPosts();

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section style={{marginTop: 20}}  className='bg-white mt20'>
       <Container>
           <Page content={recentPosts} />
       </Container>
      </section>
    </main>
  );
}
