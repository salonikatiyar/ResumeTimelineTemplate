import React from 'react';
import Classes from './Wall.css';
import data from '../data.json';


const wall = () => {
    return (
        <div className={Classes.container}>
            <div className={Classes.maintext}>
                <p className={Classes.name}>{data.name}</p>
                <p className={Classes.message}>{data.tagline}</p>
                <div className={Classes.contact}>
                    <p>{data.emailid}</p>
                    <p>|</p>
                    <p>{data.phone}</p>
                </div>
            </div>
            <div className={Classes.about}>
                <p>I believe the world is one big data problem and I am willing to dig deep into it. I am a data enthusiast looking for ways to change the world for good. I am currently pursuing my <span>Master's</span> focused in <span>Data Analytics</span> from the University of Central Florida, graduating in May 2021.</p>
                <p>I am currently working as a <span>Data Scientist - Intern</span> at a sports performance analytics start-up, Advancing Technologies. My primary task is to engineer the database on the server-side and, explore prospects of a suitable algorithm for building the time-series and classification models. Secondly, to establish connectivity between the database and the machine learning models. I have good knowledge of R, Python, Tableau, Power BI, PostgreSQL, MySQL, Mongo DB, SAS, SQLite, Git, Informatica PowerCenter.</p>
                <p>Geoffrey Moore, an organizational theorist, said it correctly, “Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway.” And as an avid data analysis enthusiast, I am proficient in delivering valuable insights by inspecting, cleansing, transforming, and modeling data. I love to turn data patterns into business solutions.</p>
                <p>Outside of work, I am a multi-hobbyist and like to say yes to every new adventure that comes my way.</p>
            </div>
            <div className={Classes.personalInfo}>
                <a href={data.links.linkedin} target="_blank">LinkedIn</a>
                <a href={data.links.gitrepo} target="_blank">Git Repo</a>
            </div>
        </div>
    );
};

export default wall;
