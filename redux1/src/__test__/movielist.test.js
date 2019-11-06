import React from 'react';
import ListView from '../component/moviesList';
import {create} from 'react-test-renderer';

describe('ListView Snapshot', () => {
    test("ListView",() => {
        let tree = create(<ListView/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
