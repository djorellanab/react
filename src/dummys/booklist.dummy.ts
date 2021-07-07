import {BookModel} from '../models';
import faker from 'faker';

const BooklistDummy = () => {
    const booklistDummy:BookModel[] = [];
    for(let i = 0; i<10; i++){
        booklistDummy.push({
            title: faker.name.title(),
            image: faker.image.image(),
            author: faker.name.findName(),
            id: faker.datatype.uuid()
        })
    }
    return booklistDummy;
};
export default BooklistDummy;