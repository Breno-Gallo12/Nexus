import { Hero } from '../components/Hero';
import { Sobre } from '../components/Sobre';
import { Skills } from '../components/Skills';
import { Projetos } from '../components/Projetos';
import { Timeline } from '../components/Timeline';
import { Contato } from '../components/Contato';

export function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Skills />
      <Projetos />
      <Timeline />
      <Contato />
    </>
  );
}