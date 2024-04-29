export class Products{
    constructor( name, price, isDiscounted=false){
        this.id=nanoid();
        this.name=name,
        this.price=price,
        this.isDiscounted=isDiscounted
    }
    
}

