import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import MainPage from '../components/view/main-page';

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
    setTheme('dark');
  }, []);
  return (
    <>
      <Layout>
        <MainPage />
      </Layout>
    </>
  );
}
