import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptions, RequestOptionsArgs, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    urlRoot: String;

    constructor(private http: Http) {
        this.urlRoot = '/';
    }

    get(url: string, options?: RequestOptionsArgs) {
        return this.request(RequestMethod.Get, url, null, options);
    }

    post(url: string, body: any, options?: RequestOptionsArgs) {
        return this.request(RequestMethod.Post, url, body, options);
    }

    put(url: string, body: any, options?: RequestOptionsArgs) {
        return this.request(RequestMethod.Put, url, body, options);
    }

    delete(url: string, options?: RequestOptionsArgs) {
        return this.request(RequestMethod.Delete, url, null, options);
    }

    private request(method: RequestMethod, relativeUrl: string, body?: string, options?: RequestOptionsArgs): Observable<any> {
        let url = this.urlRoot + relativeUrl;
        let requestOptions = new RequestOptions(Object.assign({
            method: method,
            url: url,
            body: body,
        }, options));
        return this.http.request(new Request(requestOptions));
    }
}
