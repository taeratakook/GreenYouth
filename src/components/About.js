import React from "react";
import lgkgn from "../asset/lgkgn.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white"> 
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">About</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <img src={lgkgn} alt="Samuel Wattimena" className="w-70 h-auto object-cover rounded"/>
            <div className="ml-4 max-w-lg">
              <h3 className="text-left text-2xl text-lime-900 font-bold">Lingkungan</h3>
              <p className="text-gray-700 text-left mt-2 whitespace-nowrap">
              Lingkungan adalah kombinasi antara kondisi fisik dan kelembagaan yang mencakup sumber daya alam seperti tanah, air, energi matahari, <br/>
               mineral, flora, dan fauna, serta ciptaan manusia dalam mengelola sumber daya tersebut. Lingkungan terbagi atas komponen abiotik dan <br/>
               biotik, serta lingkungan alami dan buatan. Lingkungan berperan penting dalam perkembangan kehidupan manusia, karena unsur-unsurnya <br/>
               saling terkait dan membentuk ekosistem yang kompleks. Tanpa lingkungan yang baik, ekosistem dan perubahan cuaca mungkin terganggu, <br/>
               menghambat kelangsungan hidup makhluk hidup.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="bg-lime-100 p-8 rounded-lg shadow-lg border border-green-300 hover:border-green-100 transition-colors duration-300 flex-1">
            <h3 className="text-2xl font-bold mb-4 text-green-900">Lingkungan Berdasarkan Proses Terbentuknya</h3>
            <div className="flex-grow text-left">
              <h4 className="font-semibold">1. Lingkungan Alami:</h4>
              <p className="text-gray-700 mb-4">Lingkungan alami adalah lingkungan yang terbentuk akibat dari proses alam secara dinamis, artinya tidak ada kesengajaan manusia dalam pembentukannya. Lingkungan alami terdiri dari atas sumber-sumber alami berupa ekosistem dan berbagai komponen yang ada baik itu komponen fisik maupun biologis.</p>
              <h4 className="font-semibold">2. Lingkungan Buatan:</h4>
              <p className="text-gray-700">Lingkungan buatan adalah lingkungan yang diciptakan manusia untuk memenuhi kebutuhan dan keinginan. Lingkungan ini memberikan manfaat, seperti waduk atau bendungan untuk menampung air, serta tempat rekreasi seperti danau, taman bunga, dan kebun buah yang dapat dijadikan lokasi wisata.</p>
            </div>
          </div>

          
          <div className="bg-lime-100 p-8 rounded-lg shadow-lg border border-green-300 hover:border-green-100 transition-colors duration-300 flex-1">
            <h3 className="text-2xl font-bold mb-4 text-green-900">Lingkungan Berdasarkan Unsur Pembentuknya</h3>
            <div className="flex-grow text-left">
              <h4 className="font-semibold">1. Lingkungan Biotik:</h4>
              <p className="text-gray-700 mb-4">Lingkungan biotik adalah lingkungan yang terdiri dari makhluk hidup, termasuk manusia, hewan, dan tumbuhan. Komponen biotik dapat dibedakan berdasarkan ukuran menjadi makroorganisme dan mikroorganisme, serta berdasarkan perannya sebagai produsen, konsumen, dan dekomposer.</p>
              <h4 className="font-semibold">2. Lingkungan Abiotik:</h4>
              <p className="text-gray-700">Lingkungan abiotik terdiri dari komponen tidak hidup yang memengaruhi kelangsungan hidup makhluk hidup. Komponen ini termasuk faktor kimiawi seperti senyawa anorganik (H₂O, N₂, O₂, CO₂, mineral) dan senyawa organik (karbohidrat, protein), serta faktor fisik seperti suhu, sinar matahari, angin, air, kelembaban, pH, salinitas, dan topografi.</p>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default About;
