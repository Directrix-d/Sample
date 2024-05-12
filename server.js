import express from 'express';
import Connection from './Database/db.js';
import SampleRoutes from './Routes/SampleRoutes.js';
import Sample from './Model/Sample.js';

const app = express();
const port = 3000; 

// Middleware
app.use(express.json());

// Routes
app.use('/Sample',SampleRoutes);

app.get('/', (req, res) => {
    res.send('Server is Working');
});
Connection();
// (async function newSample(){
//     let  nSample = {
//         title: "Multicolor Handbag",
//         desc: "Women Multicolor Handbag - Extra Spacious" ,
//         company: "ZOUK",
//         img1: "https://rukminim2.flixcart.com/image/832/832/xif0q/hand-messenger-bag/r/t/o/-original-imagkycgvsa8g5my.jpeg?q=70",
//         img2: "https://rukminim2.flixcart.com/image/832/832/kwi5evk0/hand-messenger-bag/i/h/j/jute-and-vegan-leather-office-bag-for-women-for-15-6-inch-laptop-original-imag95euyryz5v3g.jpeg?q=70",
//         categories: ["handbag","accessories","women"],
//         subcategories: ["handbags"],
//         size: ["Small", "Medium", "Large"],
//         color: ["Blue", "Black", "Pink","Green"],
//         price: 1909,
//            type: "Most Sold",  

//         inStock: true,
//     }
//     let Sam = await Sample.create(nSample);

//   })()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
