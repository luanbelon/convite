import Head from "next/head";
import { useEffect, useState } from "react";
import { getEventos, Evento } from '../pages/api/api';

export default function Home() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEventos();
        console.log('Dados dos eventos:', data);  // Adiciona o console.log
        setEventos(data);
      } catch (error: any) {
        const errorMessage = error.response ? error.response.data : error.message;
        setError(`Erro ao carregar eventos: ${errorMessage} Uhuh`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const tituloEvento = eventos.length > 0 ? eventos[0].titulo : 'Título do Evento';

  return (
    <>
      <Head>
        <title>Convite Diego</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="banner-main">
          <h1>Alice 4 anos</h1>
          <div id="box-btn">            
            <h2>{tituloEvento}</h2>  {/* Substitua pelo título do evento */}
            <button type="button">Confirmar Presença</button>
          </div>
        </section>
        <section className="data-event">
          <div>
            <h2>Local</h2>
            <p>Lorem</p>
          </div>
          <div>
            <h2>Horario</h2>
            <p>Lorem</p>
          </div>
          <div>
            <h2>Data</h2>
            <p>Lorem</p>
          </div>
          <div>
            <h2>Fone</h2>
            <p>Lorem</p>
          </div>
          <div>
            <h2>Mapa</h2>
            <p>Lorem</p>
          </div>
        </section>
        <section className="news-events">
          <h2>Noticias</h2>
          <div className="news">
            <div>
              <img src="" alt="" />
              <h3>Titulo</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis soluta 
                commodi nihil quo tempora placeat blanditiis quod. Fugit officiis magni, molestias 
                dolorem tempore voluptatum natus vero atque recusandae nesciunt.</p>
            </div>
            <div>
              <img src="" alt="" />
              <h3>Titulo</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis soluta 
                commodi nihil quo tempora placeat blanditiis quod. Fugit officiis magni, molestias 
                dolorem tempore voluptatum natus vero atque recusandae nesciunt.</p>
            </div>
            <div>
              <img src="" alt="" />
              <h3>Titulo</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis soluta 
                commodi nihil quo tempora placeat blanditiis quod. Fugit officiis magni, molestias 
                dolorem tempore voluptatum natus vero atque recusandae nesciunt.</p>
            </div>
            <div>
              <img src="" alt="" />
              <h3>Titulo</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis soluta 
                commodi nihil quo tempora placeat blanditiis quod. Fugit officiis magni, molestias 
                dolorem tempore voluptatum natus vero atque recusandae nesciunt.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}