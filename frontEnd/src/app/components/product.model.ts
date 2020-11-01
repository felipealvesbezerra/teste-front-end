export class Product  {
  
    constructor(
        public _id?: string,
        public nome?: string,
        public marca?: string,
        public modelo?: string,
        public preco?: number,
        public link_foto?: string,
        public descricao?: string,
    )
    {
        if(!this.nome)
        {
            this.nome = "New Product";
        }
    }

}