export class category {
    public id: number;
    public title: string;

    constructor(id, titleValue){
        this.id = id;
        this.title = titleValue;
    }
}

export interface categoryInterface{
    id?:number;
    title: string;
}
