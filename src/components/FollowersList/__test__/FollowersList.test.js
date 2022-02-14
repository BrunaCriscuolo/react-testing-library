import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from "react-router-dom"

const MockFollower = () => (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
);

describe("Followers",  ()=>{
    beforeEach(()=> {
        console.log('Roda antes de cada um dos teste repetidamente')
    })
    
    beforeAll(()=> {
        console.log('Roda antes de todos os teste, ou seja apenas uma vez')
    })
    
    afterEach(()=> {
        console.log('Roda depois de cada um dos teste repetidamente')
    })
    
    afterAll(()=> {
        console.log('Roda depois de todos os teste, ou seja apenas uma vez')
    })    

    it('should render follower item', async () => {
        render(<MockFollower />);
        const divElement = await screen.findByTestId('follower-item-0')
        expect(divElement).toBeInTheDocument();
    });
    
    // it('should render followers items', async () => {
    //     render(<MockFollower />);
    //     const divElement = await screen.findAllByTestId(/follower-item/i)
    //     expect(divElement.length).toBe(5);
    // });
})



