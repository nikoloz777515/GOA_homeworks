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

const readProducts = () => {
    const data = fs.readFileSync('./products.json', 'utf-8');
    return JSON.parse(data).products;
};

const writeProducts = (products) => {
    fs.writeFileSync('./products.json', JSON.stringify({ products }, null, 2));
};

const readUsers = () => {
    const data = fs.readFileSync('./users.json', 'utf-8');
    return JSON.parse(data).users;
};

const writeUsers = (users) => {
    fs.writeFileSync('./users.json', JSON.stringify({ users }, null, 2));
};


const handleDelete = (req,res) =>{
         const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.searchParams.get('id');

    if (req.url.startsWith('/products') && id) {
        const products = readProducts();
        const index = products.findIndex(p => p.id == id);

        if (index === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Product not found' }));
        }

        const deletedProduct = products.splice(index, 1);
        writeProducts(products);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(deletedProduct[0]));
    }

    res.writeHead(404);
    res.end();
    }

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


const deleteUser = (req,res)=>{
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.searchParams.get('id');
    const role = url.searchParams.get('role');

    if(role !== 'admin') {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Forbidden: Only admin can delete users' }));
    }

    const users = readUsers();
    const index = users.findIndex(u => u.id == id);

    if(index === -1) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'User not found' }));
    }

    const deletedUser = users.splice(index, 1);
    writeUsers(users);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(deletedUser[0]));
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
        case 'DELETE':
    if (req.url.startsWith('/users')) {
        return deleteUser(req, res);
    } else if (req.url.startsWith('/products')) {
        return handleDelete(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Not found' }));
    }
    break;
        default:
            res.end("Method or path is not defined!");
            break;
    }

    
});

server.listen(3000, () => {
    console.log('Server is listening port 3000');
});









// 1) თქვენს პროექტს დაამატეთ DeleteUser ფუნცია, შეამოწმეთ იმ შემთხვევაში თუ მომხმარებლის role არის admin, მაშინ მან უნდა შეძლოს გადმოცემული Id - ით მომხმარებლის წაშლა, თუ Id - ით მომხმარებელი ვერ მოიძებნა გამოიტანეთ მნიშვნელობა “User not found” შესაბამისი status code - ით, გატესტეთ მუშაობა postman - ის გამოყენებით



// 3) ვისაც არ გაქვთ დასრულებული მიცემული სექციები, გაიარეთ