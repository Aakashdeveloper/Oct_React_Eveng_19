import React from 'react';
import LatestNews from '../component/Home/LatestNews';
import { create} from 'react-test-renderer';

describe('testing Component snapshot', () => {
    test('latestNews', () => {
        let tree = create(<LatestNews/>)
        expect(tree.toJSON()).toMatchSnapshot();
    })
})