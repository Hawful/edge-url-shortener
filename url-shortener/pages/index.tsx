import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [value, setValue] = useState('https://www.google.com');
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('go fuck yourself');
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: value }),
    });
    const data = await response.json();
    console.log(data);
    setShortUrl(
      `${document.location.protocol}//${document.location.host}/${data.short}`
    );
  };

  return (
    <div>
      {shortUrl ? (
        <div>
          <a href={shortUrl}>{shortUrl}</a>
        </div>
      ) : (
        <form aria-label="form" onSubmit={handleSubmit}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="submit" id="shorten">Shorten</button>
        </form>
      )}
    </div>
  );
};

export default Home;
