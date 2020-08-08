const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // insert 
    proffyValue = {
        name: 'Lucas Serafim',
        avatar: 'https://avatars3.githubusercontent.com/u/52057621?s=460&u=6b4db584d19bb6652ef1af71229cafee49b426d6&v=4',
        whatsapp: '8998877665',
        bio: 'test',
    }

    classValue = {
        subject: 1,
        cost: "20",
        // proffy id automatic after proffy
    }

    classScheduleValues = [
        // class_id automatic after classValue
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // select all
    /*const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)*/

    // select one 
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    //console.log(selectClassesAndProffys)

    // filter weekday time_from and time_to
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    console.log(selectClassesSchedules)
})