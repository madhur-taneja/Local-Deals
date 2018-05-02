export class Item{
    public id: number;
    public title: string;
    public price: number;
    public categoryId: number;
    public isAvail: boolean;

    constructor(id, titleValue, priceValue, categoryIdValue, isAvailValue?){
        this.id = id;
        this.title = titleValue;
        this.price = priceValue;
        this.categoryId = categoryIdValue;
        this.isAvail = isAvailValue;
    }
}

export interface itemInterface{
    id: number;
    title: string;
    price: number;
    categoryId: number;
    isAvail?: boolean;
}
