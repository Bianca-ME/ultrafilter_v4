import img1 from '../assets/products/portabile-cu-suruburi.jpg';
import img2 from '../assets/products/FM_7_22.jpg';



const data = [
    // product 1
    {
        img: img1,
        title: "compresoare de asfalt",
        subtitle: "Compresoare Champion mobile, acolo unde ai nevoie de aer comprimat",
        info: "citeste mai mult",
        table: "tabel",
        category: "injectie de ulei"
        // category: "injectie de ulei",
        // category: "compresoare cu suruburi"
    },
    // product 2
    {
        img: img2,
        title: "FM 7-22",
        subtitle: "Compresoare Champion cu suruburi elicoidale si ungere cu ulei",
        info: "citeste mai mult",
        table: "tabel",
        category: "injectie de ulei"
    },

    // mai multe

    {
        // img: "",
        title: "Industry 4, compresoare Ultima",
        subtitle: "Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 160, ESM 200, ESM 260 si cu turatie variabila VS 160, VS 200, VS 250, VS 290",
        info: "citeste mai mult",
        table: "tabel",
        category: "oil free"
    },

    // duplicate doar pt test
    
    
]

export default data;
// return <img src={data[0].img} alt="Compresoare" />;