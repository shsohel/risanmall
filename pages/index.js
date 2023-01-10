import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Layout from '../components/Layout';
import MainPage from '../components/view/main-page';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Layout>
        <MainPage />
      </Layout>
    </>
  );
}
