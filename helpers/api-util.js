import axios from "axios";

export const getAllEvents = async ()=>{
    const response = await axios.get('https://events-69040-default-rtdb.firebaseio.com/events.json');
    const data = response.data;
    const events = [];
    for(const key in data){
        events.push({
            id: key,
            ...data[key]
        });
    }
    return events;
};

export async function getFeaturedEvents() {
    const allEvnets = await getAllEvents();
    return allEvnets.filter((event) => event.isFeatured);
  }

  export async function getEventById(id) {
    const allEvnets = await getAllEvents();
    return allEvnets.find((event) => event.id === id);
  }

  export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const allEvnets = await getAllEvents();

    let filteredEvents = allEvnets.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }