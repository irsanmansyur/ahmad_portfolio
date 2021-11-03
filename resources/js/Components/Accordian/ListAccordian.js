import React from 'react';
import ItemAccordian from './Item';

export default function ListAccordian() {
  const faqs = [
    {
      question: 'Apakah video gratis tersedia ?',
      answered: 'Tentu saja. Video yang berbayar bertanda icon rocket. Jika tidak ada tanda, video itu gratis.'
    },
    {
      question: 'Seberapa sering Parsinta upload pelajaran baru ?',
      answered: ' Setiap hari akan ada video untuk setiap seri yang masih dalam persiapan, usahakan setiap hari Anda cek konten baru di parsinta. ',
    },
    {
      question: 'Bagaimana cara nonton video gratis mau pun berbayar ?',
      answered: ' Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ',
    },
  ];
  return (
    <div className="p-10">
      <div className="overflow-hidden divide-y border shadow-sm rounded-2xl">
        {faqs.map((item, key) => <ItemAccordian q={item.question} a={item.answered} key={key} />)}
      </div>
    </div>
  );
};