import Layout from "@components/Layout"
import EventItem from "@components/EventItem"
import { API_URL } from "@config/index"
import Link from "next/link"

export default function HomePage({events}) {
  console.log(events)
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {/* kalau  tidak ada data, maka tampilkan pesan*/}
      {events.length === 0 && <h3>No Events to Show</h3>}

      {events.map((evt) => (
        // evtkirim ini yang dikirim dari main ke componentnya
        <EventItem key={evt.id} evtkirim={evt} />
      ))}

      {events.length > 0 && (
        <Link href='/events'>
          <button className="btn-secondary">View All Events</button>
        </Link>
      )}
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
    //slice ini untuk mengembalikan 3 object saja
    props: {events: events.slice(0,3)},
    revalidate: 1,
  }
}