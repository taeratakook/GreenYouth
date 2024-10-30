import React from "react";
import Lgkgn from '../asset/lgkgn.png';

const GreenYouth = () => {
    return (
        <section id="greenyouth" className="py-20 bg-white">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4x1 font-bold mb-8 text-gray-800">
                    Tentang Kami
                </h2>

                <div className="flex flex-col items-center mb-12">
                    <img src={`${Lgkgn}`} alt="img" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"/>
                    <p className="text-lg text-lime-400 mb-2"> GreenYouth</p>
                    <p className="text-x1 text-sm italic text-green-900 font-semibold">
                    "Muda, Peduli, dan Beraksi. Itulah, Green Youth"
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-lime-100 p-8 rounded-lg shadow-lg border border-green-300 hover:border-green-100 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-green-900">Dr. Wangari Maathai </h3>
                        <p className="text-sm italic text-gray-700 mb-4">
                        "Setiap kali kita menanam pohon, kita menanam harapan untuk masa depan yang lebih baik. Mari kita berkontribusi pada kesehatan planet kita."
                        </p>
                    </div>
                    
                    <div className="bg-lime-100 p-8 rounded-lg shadow-lg border border-green-300 hover:border-green-100 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-green-900">Greta Thunberg</h3>
                        <p className="text-sm italic text-gray-700 mb-4">
                        "Jika kita tidak bertindak sekarang, generasi mendatang akan melihat kita sebagai generasi yang merusak planet kita. Tindakan kita hari ini menentukan masa depan mereka." 
                        </p>
                    </div>

                    <div className="bg-lime-100 p-8 rounded-lg shadow-lg border border-green-300 hover:border-green-100 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-green-900">Chief Seattle</h3>
                        <p className="text-sm italic text-gray-700 mb-4">
                        "Bumi ini bukan warisan nenek moyang kita, melainkan titipan anak cucu kita. Mari kita jaga dan lestarikan untuk mereka."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GreenYouth;