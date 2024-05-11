"use client";
import { useEffect, useState } from 'react';
import {Card} from '../../components/Card/Card';
import logo from '../../../public/images/logo.png';
import {Person } from '../../app/api/people/types';
import { fetchAllPeople } from '../../api/people/people';

  export function Cards(){
    const [peoples, setPeoples] = useState<Person[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const peoplesData = await fetchAllPeople();
          setPeoples(peoplesData.results);
        };    
        fetchData();    
      }, []);
    
    
    return(
     
        <div className="flex flex-wrap -m-4">
                {peoples.map(people => {
                const formattedHeight = `${people.height} cm`;
                let image = require(`../../../public/images/${people.name}.jpg`);
                return (
                    <Card
                    key={people.name}
                    title={people.name}
                    image={image}
                    description={formattedHeight}
                    />
                );
                })}
        </div>
    );

  }