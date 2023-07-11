import img1 from '../assets/products/portabile-cu-suruburi.jpg';
import img2 from '../assets/products/FM_7_22.jpg';
import img3 from '../assets/products/ESM_23_29.jpg';
import img4 from '../assets/products/ESM_30_45(1).jpg';
import img5 from '../assets/products/ESM_55_75.jpg';
import img6 from '../assets/products/ESM_90_132.jpg';
import img7 from '../assets/products/ESM_160_290.jpg';

import img12 from '../assets/GD/34002_28_3_19_CA5_BP_FT55_m.jpg';
import img13 from '../assets/GD/32434_23_10_18_C_PRIME_50_25_S_m.jpg';
import img14 from '../assets/GD/30496_24_4_18_CMPV04_RM_m.jpg';
import img15 from '../assets/products/pentrusuflatpeturi.jpg';
import img16 from '../assets/products/pentruscafandrii2.jpg';




const data = [
    // COMPRESOARE CU SURUBURI SI INJECTIE DE ULEI
    {
        img: img1,
        title: "compresoare de asfalt",
        subtitle: "Compresoare Champion mobile, acolo unde ai nevoie de aer comprimat",
        info: "citeste mai mult",
        table: "tabel",
        category: "injectie de ulei"
        // category1: "compresoare cu suruburi"
    },
    {
        img: img2,
        title: "FM 7-22",
        subtitle: "Compresoare Champion cu suruburi elicoidale si ungere cu ulei",
        info: "citeste mai mult",
        table: "tabel",
        category: "injectie de ulei"
        // category1: "compresoare cu suruburi"
    },
    {
        img: img3,
        title: "ESM 23-29",
        subtitle: "Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 23, ESM 26, ESM 29 si cu turatie variabila VS 23, VS 26, VS 29 optional cu uscator de aer prin refrigerare – integrat",
        info: "citeste mai mult",
        table: "tabel",
        category: "injectie de ulei"
        // category1: "compresoare cu suruburi"
    },
    {
        img: img4,
        title: "ESM 30-45",
        subtitle: "Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 30, ESM 37, ESM 45, ESM 30e, ESM 37e, ESM 45e si cu turatie variabila VS 30, VS 37, VS 45, VS 37e, VS 45e",
        info: "citeste mai mult",
        table: "tabel",
        category: "injectie de ulei"
        // category1: "compresoare cu suruburi"
    },
    {
        img: img5,
        title: "ESM 55-75",
        subtitle: "Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 55, ESM 75, ESM 55e, ESM 75e si cu turatie variabila VS 55, VS 75",
        info: "citeste mai mult",
        table: "tabel",
        category: "injectie de ulei"
        // category1: "compresoare cu suruburi"
    },
    {
        img: img6,
        title: "ESM 90-132",
        subtitle: "Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 55, ESM 75, ESM 55e, ESM 75e si cu turatie variabila VS 55, VS 75",
        info: "citeste mai mult",
        table: "tabel",
        category: "injectie de ulei"
        // category1: "compresoare cu suruburi"
    },
    {
        img: img7,
        title: "ESM 160-290",
        subtitle: "Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 160, ESM 200, ESM 260 si cu turatie variabila VS 160, VS 200, VS 250, VS 290",
        info: "citeste mai mult",
        table: "tabel",
        category: "injectie de ulei"
        // category1: "compresoare cu suruburi"
    },


    // oil free
    {
        // has no image 8
        // img: "",
        title: "Industry 4, compresoare Ultima",
        subtitle: "Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 160, ESM 200, ESM 260 si cu turatie variabila VS 160, VS 200, VS 250, VS 290",
        info: "citeste mai mult",
        table: "tabel",
        category: "oil free"
        // category1: "compresoare cu suruburi"
    },
    {
        // img: img9,
        title: "tip scroll, compresoare Champion",
        subtitle: "Compresoare Champion, 100% oil free, bloc de compresie scroll",
        info: "citeste mai mult",
        table: "tabel",
        category: "oil free"
        // category1: "compresoare cu suruburi"
        // category2: "tip scroll"
    },
    {
        // img: img10,
        title: "cu injectie de apa pura EnviroAir",
        subtitle: "EnviroAir - oil and silicon free",
        info: "citeste mai mult",
        table: "tabel",
        category: "oil free"
        // category1: "compresoare cu suruburi"
        // category2: "tip scroll"
        // category3: "silicon free"
    },
    {
        // img: img11,
        title: "EnviroAir T",
        subtitle: "",
        info: "citeste mai mult",
        table: "tabel",
        category: "oil free"
        // category1: "compresoare cu suruburi"
    },
    // COMPRESOARE CU PISTON
    {
        img: img12,
        title: "Compresoare cu piston Champion, debite mici",
        subtitle: "Compresoare cu piston, Champion, debite mici, presiuni pana la 15 bar, pentru ateliere de lucru",
        info: "citeste mai mult",
        table: "tabel",
        category: "cu piston"
        // category1: "compresoare cu piston"
    },
    {
        img: img13,
        title: "Compresoare pentru cabinete dentare",
        subtitle: "Compresoare Champion, fara ungere, pentru aplicatii la cabinetele dentare si mici ateliere de bijuterii",
        info: "citeste mai mult",
        table: "tabel",
        category: "cu piston"
        // category1: "compresoare cu piston"
        // category: "oil free" ?
    },
    // COMPRESOARE CU EXCENTRIC SI PALETI
    {
        img: img14,
        title: "cu excentric si paleti Vane Compressors",
        subtitle: "Champion Rotary Vane Compressors_ Compresoare Champion cu excentric si paleti",
        info: "citeste mai mult",
        table: "tabel",
        category: "cu excentric si paleti Vane Compressors"
        // category1: "cu excentric si paleti Vane Compressors"
    },
    // COMPRESOARE PENTRU SUFLAT PETURI
    {
        img: img15,
        title: "Compresoare pentru suflat PETuri Belliss & Morcom",
        subtitle: "Compresoare cu piston presiuni 45 bar pentru aplicatii de suflat sticle PET, marca Gardner Denver Belliss & Morcom",
        info: "citeste mai mult",
        table: "tabel",
        category: "cu piston"
        // category1: "pentru suflat PET-uri Belliss & Morcom"
    },
    // PENTRU SCAFANDRII
    {
        img: img16,
        title: "Compresoare pentru scafandrii, aer respirabil",
        subtitle: "Compresoare Champion de inalta presiune HP (232 – 300 bar), pentru umplut butelii cu aer respirabil",
        info: "citeste mai mult",
        table: "tabel",
        category: "pentru scafandrii"
        // category1: "pentru scafandrii"
    },
    
]

export default data;
// return <img src={data[0].img} alt="Compresoare" />;