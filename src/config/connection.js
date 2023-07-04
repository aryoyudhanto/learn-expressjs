import { Sequelize } from 'sequelize';

const newSeq = new Sequelize(
    "project_challenge",
    "root",
    "Yudha100%",
    {
        host: "localhost",
        dialect: 'mysql',
    }
);

newSeq.authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    }).catch((err) => {
        console.error('Unable to connect database: ', err)
    })

export default newSeq