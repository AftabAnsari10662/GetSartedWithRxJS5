import {Observable} from "rxjs"

let source = Observable.from([1,2,34]);


source.subscribe(
    value=>console.log(`value:${value}`),
    error => console.log(`error:${error}`),
    ()=> console.log('complete')
)