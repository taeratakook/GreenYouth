import React from "react";
import emil from "../asset/emil.jpg";
import butet from "../asset/butet.jpg"
import prigi from "../asset/prigi.webp"

const inspiratif = () => {
  return (
    <section id="inspiratif" className="py-20 transparan-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Inspiratif</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-lime-100 p-6 rounded-lg shadow-lg border border-lime-900 hover:border-lime-900 transition-transform duration-300 hover:scale-105">
            <img src={emil} alt="Samuel Wattimena" className="w-full h-60 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold mb-2">Emil Salim</h3>
            <p className="text-sm italic text-gray-600 mb-4">"Lingkungan adalah tanggung jawab bersama, bukan hanya tugas pemerintah."</p>
            <div className="flex-grow text-left">
            <p className="text-gray-700"><span className="font-semibold">Peran:</span> Ahli ekonomi lingkungan dan mantan Menteri Lingkungan Hidup Indonesia.</p>
            <p className="text-gray-700 mt-2"><span className="font-semibold">Kontribusi:</span> Emil Salim dianggap sebagai pionir dalam bidang lingkungan hidup di Indonesia. Sebagai Menteri Lingkungan Hidup pertama (1983-1993), ia memperkenalkan konsep pembangunan berkelanjutan yang menggabungkan kepentingan ekonomi dan pelestarian lingkungan. Emil juga banyak terlibat dalam konferensi internasional untuk menangani isu lingkungan.</p>
            </div>
        </div>

            <div className="bg-lime-100 p-6 rounded-lg shadow-lg border border-lime-900 hover:border-lime-900 transition-transform duration-300 hover:scale-105">
            <img src={butet} alt="Samuel Wattimena" className="w-full h-60 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold mb-2">Butet Manurung</h3>
            <p className="text-sm italic text-gray-600 mb-4"> "Masyarakat adat adalah penjaga hutan yang sesungguhnya."</p>
            <div className="flex-grow text-left">
            <p className="text-gray-700"><span className="font-semibold">Peran:</span> Aktivis pendidikan dan pendiri Sokola Rimba.</p>
            <p className="text-gray-700 mt-2"><span className="font-semibold">Kontribusi:</span> Butet bekerja untuk meningkatkan kesadaran akan lingkungan dan hak-hak masyarakat adat di hutan hujan Indonesia. Sokola Rimba adalah organisasi pendidikan yang memberikan pengetahuan dasar, termasuk konservasi, kepada komunitas pedalaman. Melalui organisasinya, Butet berusaha menjaga hutan dari aktivitas ilegal yang dapat merusak ekosistem.</p>
            </div>
            </div>
        
          <div className="bg-lime-100 p-6 rounded-lg shadow-lg border border-lime-900 hover:border-lime-900 transition-transform duration-300 hover:scale-105">
            <img src={prigi} alt="Samuel Wattimena" className="w-full h-60 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold mb-2">Prigi Arisandi</h3>
            <p className="text-sm italic text-gray-600 mb-4">"Sungai adalah sumber kehidupan; mari kita jaga agar tetap bersih untuk generasi mendatang."</p>
            <div className="flex-grow text-left">
            <p className="text-gray-700"><span className="font-semibold">Peran:</span> Aktivis lingkungan dan pendiri Ecological Observation and Wetlands Conservation (ECOTON).</p>
            <p className="text-gray-700 mt-2"><span className="font-semibold">Kontribusi:</span> Prigi dikenal karena usahanya membersihkan Sungai Brantas dan mempromosikan konservasi perairan. Melalui ECOTON, ia mengajak masyarakat untuk menjaga ekosistem perairan dari limbah dan pencemaran. Prigi berperan besar dalam memperjuangkan peraturan yang ketat terhadap industri yang mencemari sungai di Indonesia.</p>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default inspiratif; 