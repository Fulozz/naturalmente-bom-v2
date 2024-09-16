import {describe, test, expect} from '@jest/globals';
import {cn} from '../cn';
const data = { id: 1 };

type TData = {
    id: number
};
describe('cn', ()   => {
    const { id }: TData = data;
  // Setup literal object for color  data ID is used to determine the color
    const color = {
        "bg-orange-600" : id === 1,
        "bg-blue-600"   : id === 2,
        "bg-yellow-600" : id === 3,
        "bg-green-600"  : id === 4,
    }
    
      test('should return a string with the classes passed', () => {
        expect(cn("text-white", "p-4", "rounded-md", color)).toBe("text-white p-4 rounded-md bg-orange-600");
        })
})