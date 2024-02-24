import React from "react";

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

function History() {
  return (
    <div className="md:w-1/2 border-b-[1px]">
      <ol class="relative border-s border-gray-200 dark:border-gray-700 pt-20 ml-4">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1986
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Deniz Otomat Otomotiv Limited Şirketi olarak Unkapanı’nda kuruldu.
          </h3>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2004
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            İkitelli Demirciler Sanayi Sitesi'ne taşındık ve şirketimizin unvanı
            "GÖRKEM OTOMAT OTOMOTİV VE ENDÜSTRİYEL YAN SANAYİ TİCARET LİMİTED
            ŞİRKETİ" olarak değiştirildi.
          </h3>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2013
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Firmamızda Endüstri 4.0 teknolojisini entegre ettik.
          </h3>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2014
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Makina parkurumuza CNC Otomat Makinalarını ekledik.
          </h3>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2018
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            ISO 9001:2015 Uluslararası Standart Kalite Sertifikasını edindik.
          </h3>
        </li>
        <li class="pb-16 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Firma ve unvan değişikliğine gittik ve şirketimizin yeni adı "EMİR
            OTOMAT CNC MAKİNA SANAYİ VE TİCARET LİMİTED ŞİRKETİ" oldu.
          </h3>
        </li>
      </ol>
    </div>
  );
}

export default History;
