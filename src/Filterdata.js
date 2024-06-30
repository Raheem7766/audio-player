import { useState } from 'react'
import { data } from './Data'
import List from './List'

function FilterData() {
    const [people, setPeople] = useState(data)
    console.log(people);

    // Filter function to find people whose birthday is within the next week
    const filterByNextWeekBirthday = () => {
        const today1 = new Date() // Wed May 08 2024 15:38:21 GMT+0500 (Pakistan Standard Time)
        const today2 = new Date().getDate() // 8
        const nextWeek = new Date(today1.getTime() + 7 * 24 * 60 * 60 * 1000).getDate()
       
        console.log("today1 just date: ", today1.getTime());
        console.log("today2 getting Date: ", today2);

        const filteredPeople = data.filter(person => {
            console.log(person);
            const personBirthday = new Date(person.year, getMonthIndex(person.month), person.date).getDate()

            console.log(personBirthday);
            return personBirthday >= today2 && personBirthday <= nextWeek
        })
        setPeople(filteredPeople)
    }

    // Utility function to get the month index (0 - January, 1 - February, etc.)
    const getMonthIndex = (month) => {
        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        return monthNames.findIndex(m => m === month);
        // m use for element
    }
    return (
        <main>
            <section className="container">
                <h2 className="title">{people.length} birthdays today</h2>
                <List people={people} />

                <button onClick={() => setPeople([])}>
                    Clear All
                </button>
                <button onClick={filterByNextWeekBirthday}>
                    Filter by Next Week's Birthday
                </button>
            </section>
        </main>
    )
}

export default FilterData;
