import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

    private cardGet = 'http://localhost/kodeinside.com/index/index.php/Site/Capa/getList';
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    private options: RequestOptions;

    constructor(private http: Http) {
        this.options = new RequestOptions({ headers: this.headers, method: 'post' });
    }

    public getList() {
        return this.http.get(this.cardGet, this.options).toPromise().then(
            response => {
                return response.json().data;
            }
        );
    }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }
}

