import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/Context';
import { CommitsList } from './SingleProject/CommitsList';

const ContentSingle = () => {
 const { id } = useParams();
 const [data, setData] = useState<any>([]);
 const user: any = useAuth();

 const getData = async () => {
  const response = await fetch(
   `https://api.github.com/repositories/${id}/commits`
  );
  const data = await response.json();
  setData(data);
 };

 useEffect(() => {
  getData();
 }, []);

 console.log(user);
 console.log(data);

 return (
  <div className="z-2 p-4 sm:ml-64 xl:ml-[calc(20em_-_4.5em)] 2xl:ml-[calc(12em_-_4.5em)] ">
   <h1>Liste des commits</h1>
   <div className="p-4 shadow-xl rounded-lg bg-[#ffffff90] ">
    <CommitsList data={data} />
   </div>
  </div>
 );
};

export default ContentSingle;
