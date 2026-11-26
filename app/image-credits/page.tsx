import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image credits',
  description: 'Credits and license details for third-party images used by Hire Chat Support.',
  alternates: { canonical: '/image-credits' },
};

export default function ImageCreditsPage() {
  return <main>
    <header className="page-hero"><p className="eyebrow">Credits</p><h1>Image credits</h1><p>License details for third-party images used on this site.</p></header>
    <section className="content-wrap"><div className="prose">
      <h2>Helpdesk support photo</h2>
      <p><a href="https://commons.wikimedia.org/wiki/File:Call_center_PV.jpg" rel="noopener noreferrer">Call center PV</a> by Kellie Walenciak is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license noopener noreferrer">CC BY-SA 4.0</a>. Converted from JPEG to WebP for web delivery.</p>
      <h2>Context Thread collaboration photo</h2>
      <p><a href="https://unsplash.com/photos/UTw3j_aoIKM" rel="noopener noreferrer">Workplace collaboration photo</a> by <a href="https://unsplash.com/@wocintechchat" rel="noopener noreferrer">Christina @ wocintechchat.com</a> is used under the <a href="https://unsplash.com/license" rel="license noopener noreferrer">Unsplash License</a>. Cropped and converted to responsive WebP files for web delivery.</p>
    </div></section>
  </main>;
}
