const http = require('http');
const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8')).products;

const readBody = req => {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const parsed = JSON.parse(body);
                resolve(parsed);
            } catch (err) {
                reject(err);
            }
        });

        req.on('error', reject);
    });
};

const handleGetRequest = (req, res) => {
    const url = new URL(req.headers.host + req.url);
    const id = url.searchParams.get('id');
    
    if(req.url.startsWith('/products') && id) {
        const productIndex = products.findIndex(product => product.id == id);

        console.log(productIndex)

        if(productIndex === -1) {
            res.writeHead(404, {
                'content-type': 'application/json'
            });
            res.end(JSON.stringify({
                message: "Product not found!"
            }))
        }

        res.writeHead(200, {
            'content-type': 'application/json'
        });
        res.end(JSON.stringify(products[productIndex]));
    } else if(req.url.startsWith('/products')) {
        res.writeHead(200, {
            'content-type': 'application/json'
        });
        res.end(JSON.stringify(products));
    }
};

const handlePostRequest = async (req, res) => {
    try {
        const body = await readBody(req);
        const product = {...body, id: products[products.length - 1].id + 1};
        products.push(product);

        res.writeHead(201, {
            'content-type': 'application/json'
        });
        res.end(JSON.stringify(product));
    } catch(err) {
        console.log(err);
    }
}


const server = http.createServer((req, res) => {
    const method = req.method;

    switch(method) {
        case 'GET':
            return handleGetRequest(req, res);
            break;
        case 'POST':
            return handlePostRequest(req, res);
            break;
        default:
            res.end("Method or path is not defined!");
            break;
    }
});

server.listen(3000, () => {
    console.log('Server is listening port 3000');
});





// 1) products.json წაიკითხეთ ყველა ინფორმაცია და შეინახეთ ცალკე ცვლადში სახელად products, შემდეგ შექმენით 2 ფუნქცია, handleGetRequest და handlePostRequest, ორივე ფუნქციას გადაეცემა req და res ობიექტები, handleGetRequest ში შეამოწმეთ req.url, თუ წერია /products დაუბრუნეთ მთლიანი პროდუქტების სია, თუ წერია /products/1... მოიძიეთ მასივში ობიექტი კონკრეტული id რომელიც გამოგეცათ და დაუბრუნეთ მხოოლოდ ეგ ობიექტი. ორივე შემთხვევაში აბრუნებთ JSON ინფორმაციას
// :white_check_mark:
// 2) handlePostRequest ფუნქციაში უნდა მიიღოთ და წაიკიტხოთ ინფორმაცია რომელიც გამოგვიუგზავნეს

// შემდეგ შეამოწქმეთ ბილიკი, თუ ბილიკი უდრის /product დაამატეთ მიღებული ობიექტი მასივში

// სტრუქტურა სატესტო ობიექტის რომელიც უნდა გააგზავნოთ POSTMAN დან

// ობიექტის კუთვნილებები: 

// {
//             "id": 1,
//             "name": "Wireless Headphones",
//             "category": "electronics",
//             "price": 79.99,
//             "description": "High-quality wireless headphones with noise cancellation"
//     } (ეს არის ობიექტის მაგალითი რომელიც უნდა გააგზავნოთ)

// წაკითხვის შემდეგ დაამატეთ products მასივში ახალი ობიექტი და ავტომატურად მიანიჭეთ id (edited)Thursday, December 11, 2025 
// 3) createServer მეთოდში გადაცემულ ფუნქციაში გამოიყენეთ switch რომ შეამოწმოთ მეთოდი, თუ მეთოდი არის GET გამოიძახეთ handleGetRequest, POSTმეთოდის შემთხვევაში გამოიძახეთ handlePostRequest, ხოლო თუ არცერთი მეთოდი არაა დააბრუნეთ ერორი სადაც ახსნით რომ ეს მეთოდი განსაზღვრული არაა

// 1) დაამატეთ DELETE მეთოდი რომლითაც წაშლით პროდუქტს სიიდან

// 2) დამატების ან წასლში შემთხვევაში შეცვალეთ products.json ფაილიც.