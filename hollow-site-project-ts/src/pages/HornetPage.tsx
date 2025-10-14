import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import './HornetPage.css';

export function HornetPage() {
  return (
    <>
      <title>Hornet</title>

      <Header />
      <Sidebar />

      <p>Hello Hornet!</p>
    </>
  );
}