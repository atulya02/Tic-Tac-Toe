import React, { Component } from 'react'
import './mystyle.css'
class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             turn: 'X',
             gameEnded: false,
             board :Array(9).fill(''),
             totalMoves:0,
             winner:undefined
        }
    }
    
    clicked(event){
        if(this.state.board[event.target.dataset.square]===''){
        this.state.board[event.target.dataset.square]=this.state.turn
        event.target.innerText=this.state.turn;
        this.setState({
            turn:this.state.turn === 'X'?'0':'X',
            board:this.state.board,
            totalMoves:this.state.totalMoves++
        })
    }
        var result=this.checkWinner();
        if(result=== 'X')
        {
            this.setState({
                gameEnded:true,
                winner: 'X',
                winnerLine:'Match won by X'
            })
        }
        else if(result==='0')
        {
            this.setState({
                gameEnded:true,
                winner: '0',
                winnerLine:'Match won by 0'
            })
        }
        else if(result=='draw')
        {
            this.setState({
                gameEnded:true,
                winner: 'draw',
                winnerLine:'Match is Draw'
            })
        }
    }
     
    checkWinner(){
        var moves=[[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]];
        var board=this.state.board
        for(let i=0;i<moves.length;i++)
        {
            if(board[moves[i][0]]===board[moves[i][1]] && board[moves[i][1]]===board[moves[i][2]])
            return board[moves[i][0]];
        }

        if(this.state.totalMoves==9)
        {
            return 'draw';
        }
    }












    render() {
        return (
            <div>
            <div id='board' onClick={(e)=>this.clicked(e)}>                
                <div className='square' data-square='0'></div>
                <div className='square' data-square='1'></div>
                <div className='square' data-square='2'></div>
                <div className='square' data-square='3'></div>
                <div className='square' data-square='4'></div>
                <div className='square' data-square='5'></div>
                <div className='square' data-square='6'></div>
                <div className='square' data-square='7'></div>
                <div className='square' data-square='8'></div>
                <br/><br/><br/>
                
            </div>
            <div id='status'>{this.state.winnerLine}</div></div>
        )
    }
}

export default Header
