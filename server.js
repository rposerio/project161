import express from 'express';
import { check, validationResult } from 'express-validator';
import connectDatabase from './config/db';


//initialize express application
const app = express();

// conmnect to database
connectDatabase();


//middleware
app.use(express.json({ extend: false}));


app.get('/', (req, res) => 
    res.send('httpget request sent to root api endpoint')
    );


app.post(
        '/api/users',
        [
            check('name', 'Please enter your name')
            .not()
            .empty(),
            check('email', 'Please enter a valid email').isEmail(),
            check(
                'password', 'please enter a password with 6 or more characters'
            ).isLength({ min: 6})
        ],
        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ error: errors.array() });
            }else {
                return res.send(req.body);
            }
        }
    );
    
    app.listen(3000, () => console.log('Express server running on port 3000'));
    