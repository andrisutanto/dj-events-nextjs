import Link from "next/link"
import Image from "next/image"
import styles from "@styles/EventItem.module.css"

// evtkirim ini adalah data yg dikirim dari halaman index
export default function ({evtkirim}) {
  return (
    <div className={styles.event}>
        <div className={styles.img}>
            <Image
                src={evtkirim.image ? evtkirim.image : '/images/event-default.png'}
                width={170}
                height={100}
            />
        </div>

        <div className={styles.info}>
            <span>
                {evtkirim.date} at {evtkirim.time}
            </span>
            <h3>{evtkirim.name}</h3>
        </div>

        <div className={styles.link}>
            <Link href={`/events/${evtkirim.slug}`}>
                <button className="btn">Details</button>
            </Link>
        </div>
    </div>
  )
}
