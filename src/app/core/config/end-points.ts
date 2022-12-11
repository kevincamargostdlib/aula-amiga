import {environment} from 'src/environments/environment';

export class EndPoints {
    /**
     * @description: Url end-point base
     */
    static urlBase(action: string): string {
        return `${environment.urlApi}?action=${action}&code=${environment.code}` ;
    }


}
