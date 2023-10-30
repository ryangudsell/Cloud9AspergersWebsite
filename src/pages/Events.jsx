import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl =  import.meta.env.VITE_WP_API_BASEURL
const endpoint = `${baseUrl}/events?_embed`

const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
        console.log(res.data);
        setEvents(res.data)
        setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  const Events = ({ events }) => {
    const mappedEvents = events.map((event, index) => {
        return (
            <div key={event.slug + "-" + index} className='container'>
                <h2 className='title'>{event.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }} />
                <button key={event.slug + "-" + index}>
                    <a href={`#/events/${event.id}`}>View more about {event.title.rendered}</a>
                </button>
            </div>
        )
    })

    return mappedEvents
  }

  return (
    <main>
      <h1>Our Events</h1>

      {loading ? <>Loading...</> : <Events events={events} />}
    </main>
  )
}

export default Events
