import Layout from "@components/Layout"
import EventItem from "@components/EventItem"
import { API_URL } from "@config/index"

export default function EventsPage({events}) {
  console.log(events)
  return (
    <Layout>
      <h1>Events</h1>
      {/* kalau  tidak ada data, maka tampilkan pesan*/}
      {events.length === 0 && <h3>No Events to Show</h3>}

      {events.map((evt) => (
        // evtkirim ini yang dikirim dari main ke componentnya
        <EventItem key={evt.id} evtkirim={evt} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  //ini untuk ambil data dari API, dalam contoh ini API dari si NEXT sendiri
  const res = await fetch(`${API_URL}/api/events`)
  //untuk response dimasukkan ke dalam variable events
  const events = await res.json()

  //data ini hanya akan tampil di sisi server
  //console.log(events)
  
  return {
    props: {events},
    revalidate: 1,
  }
}