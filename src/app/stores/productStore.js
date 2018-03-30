import {observable} from "mobx";

class ProductStore {
    @observable products = [];
}

export default new ProductStore();