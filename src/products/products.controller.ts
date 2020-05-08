import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productservice: ProductService)
    {}
    @Post()
    addProduct(@Body('title') prodtitle : string,@Body('description') proddesc : string,@Body('price') prodprice : number){
        const generatedId =  this.productservice.insertProduct(prodtitle,proddesc,prodprice);
        return {id:generatedId};
    }

    @Get()
        fetchAllProducts(){
            return this.productservice.getAllproducts();
        }

    @Get(':id')
    getProduct(@Param('id') prodId : string)
    {
        return this.productservice.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId : string, 
    @Body('title')prodTitle : string,
    @Body('description')prodDesc : string,
    @Body('price')prodPrice : number){
        this.productservice.updateProduct(prodId,prodTitle,prodDesc,prodPrice);
        return null;
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId : string)
    {
        this.productservice.deleteProduct(prodId);
        return null;
    }

    @Delete()
    deleteProducts()
    {
        this.productservice.deleteProducts();
        return null;
    }
}
