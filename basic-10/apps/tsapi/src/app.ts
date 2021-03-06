import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import * as mongoose from "mongoose";

declare const db="";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string ='mongodb://localhost:27017/sample';

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);     
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }
    
    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;
