import React from 'react';
import { dateConverter } from '../../../utils/dateFormater';
import avatar from '../../../assets/avatar.png';
export const AuthorInfos = ({ data }: any) => {
 return (
  <>
   <div className="flex flex-col h-56 mb-4 rounded bg-custom-purple  shadow  ">
    <div className="flex flex-col items-center md:flex-row  pb-5 p-2 md:p-10 text-xs md:text-base ">
     <img
      src={data.author ? data?.author?.avatar_url : avatar}
      alt="avatar"
      className="w-12 h-12 rounded-full"
     />
     <div className="flex flex-col justify-center ml-4">
      <p className="font-bold text-lg">
       {data.commit.author.name[0].toUpperCase() +
        data.commit.author.name.slice(1)}
      </p>
      <p>{data.author && '(' + data.author?.login + ')'}</p>
     </div>
    </div>
    <p className="flex px-10">
     <span className="underline">Date du commit</span> :{' '}
     {dateConverter(data.commit.author.date)}
    </p>
    {data.files.length > 0 && (
     <p className="flex px-10">
      {' '}
      <span className="underline">
       {data.files.length > 1 ? 'Fichiers modifiés' : 'Fichier modifié'}{' '}
      </span>
      : {data.files.length}
     </p>
    )}
   </div>
  </>
 );
};
