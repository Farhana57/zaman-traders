import React, { useState, useEffect } from 'react';

import juteSackImg from '../assets/Jute Sack.jpg';
import bagssImg from '../assets/bagss.jpg';
import hankImg from '../assets/Hank.jpg';
import gunnyBagsImg from '../assets/Gunny Bags.jpg';
import juteFloorMatImg from '../assets/Jute Floor Mat.jpg';

const Export = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    'https://plus.unsplash.com/premium_photo-1677695581626-2a75bdece138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anV0ZSUyMFRleHRpbGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
    'https://media.istockphoto.com/id/2261885218/photo/textile-weaving-machines.webp?a=1&b=1&s=612x612&w=0&k=20&c=68Z990QhVTlZ3sV8Y2MciyWmrNu6nI0f9AD5VI-9HEM='
  ];

  // Hero Image Slider Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-emerald-900 py-24 px-6 text-center text-white relative overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(6, 78, 59, 0.25), rgba(2, 44, 34, 0.35)), url('${img}')`,
            }}
          />
        ))}

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-emerald-700/85 backdrop-blur-md text-emerald-100 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-emerald-500 shadow-sm">
            Trusted Jute Exporter Since 1974
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Worldwide <span className="text-emerald-400">Jute Export</span> Services
          </h1>
          <p className="text-emerald-100 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Delivering premium eco-friendly golden fiber products from Bangladesh to global markets with over 3 decades of excellence, strict quality control, and timely shipments.
          </p>
        </div>

        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 shadow ${
                activeSlide === index ? 'bg-emerald-400 w-8' : 'w-3 bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= EXPORT PROCESS (PREMIUM CARDS) ================= */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-sm bg-emerald-100 px-3 py-1 rounded-full">Step-by-Step Execution</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mt-3 mb-4">Our Streamlined Export Workflow</h2>
          <p className="text-slate-600 text-lg">
            Precision and dedication at every single stage of international trade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Order & Inquiry", desc: "Client specifies requirements, quality, grading, and quantity for custom packaging." },
            { title: "Quality Control", desc: "Rigorous inspection and moisture testing to meet international export benchmarks." },
            { title: "Secure Packaging", desc: "Compressed bales and moisture-proof packing to ensure safe sea or air cargo transit." },
            { title: "Customs & Documentation", desc: "Managing all export compliance, bills of lading, and legal paperwork smoothly." },
            { title: "Container Stuffing", desc: "Professional loading of goods into shipping containers to maximize space and safety." },
            { title: "Global Delivery", desc: "Timely dispatch and door-to-port or port-to-port worldwide shipping execution." }
          ].map((step, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100/60 hover:shadow-2xl hover:border-emerald-300 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 group-hover:bg-emerald-100 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white font-extrabold flex items-center justify-center text-xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-xl text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors">{step.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY IMAGE CARDS SECTION ================= */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-sm bg-emerald-100 px-3 py-1 rounded-full">Visual Showcase</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mt-3 mb-4">Export Products Gallery</h2>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
            High-grade manufactured goods ready for international deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { desc: "Client specifies requirements, quality, grading, and quantity for custom packaging.", img: juteSackImg },
            { desc: "Rigorous inspection and moisture testing to meet international export benchmarks.", img: bagssImg },
            { desc: "Compressed bales and moisture-proof packing to ensure safe sea or air cargo transit.", img: hankImg },
            { desc: "Managing all export compliance, bills of lading, and legal paperwork smoothly.", img: gunnyBagsImg },
            { desc: "Professional loading of goods into shipping containers to maximize space and safety.", img: juteFloorMatImg },
            { desc: "Timely dispatch and door-to-port or port-to-port worldwide shipping execution.", img: 'https://media.istockphoto.com/id/1151287557/photo/cream-cotton-linen-fabric-seamless-texture.webp?a=1&b=1&s=612x612&w=0&k=20&c=4-xB6Sg0hWxQaVFfFkk8YwgKZed6ndkuv6OKikk4M1c=' },
          ].map((item, idx) => {
            const titles = [
              "Order & Inquiry",
              "Quality Control",
              "Secure Packaging",
              "Customs & Documentation",
              "Container Stuffing",
              "Global Delivery"
            ];
            const cardTitle = titles[idx];

            return (
              <div key={idx} className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col group">
                <div className="h-56 overflow-hidden relative">
                  <img src={item.img} alt={cardTitle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow text-center">
                  <h3 className="font-bold text-xl text-emerald-950 mb-3">{cardTitle}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= GLOBAL REACH SECTION ================= */}
      <section className="bg-emerald-950 text-white py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-emerald-800 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">Global Footprint</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Serving Clients Across Continents</h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Zaman Traders has established a robust international shipping network, supplying high-grade raw jute, yarn, sacks, and eco-friendly bags to international buyers.
            </p>
            <ul className="space-y-3 text-emerald-200">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i> 
                <span>Strict adherence to global trade standards and compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i> 
                <span>Fast and transparent documentation (Bill of Lading, Certificate of Origin)</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i> 
                <span>Trusted partnerships with leading global shipping liners</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-900 p-6 sm:p-8 rounded-3xl border border-emerald-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-3 text-white">Export Documentation Support</h3>
            <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
              We provide comprehensive paperwork required by destination customs authorities to ensure hassle-free port clearance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold">
              <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-center text-white hover:bg-emerald-800 transition-colors shadow-sm">
                Commercial Invoice
              </div>
              <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-center text-white hover:bg-emerald-800 transition-colors shadow-sm">
                Packing List
              </div>
              <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-center text-white hover:bg-emerald-800 transition-colors shadow-sm">
                Certificate of Origin
              </div>
              <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-center text-white hover:bg-emerald-800 transition-colors shadow-sm">
                Bill of Lading (B/L)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Export;