(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(3),i=t.n(s),c=(t(15),t(2),t(4)),o=t(5),d=t(7),u=t(6),l=t(8),m=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={turn:"X",gameEnded:!1,board:Array(9).fill(""),totalMoves:0,winner:void 0},t}return Object(l.a)(a,e),Object(o.a)(a,[{key:"clicked",value:function(e){""===this.state.board[e.target.dataset.square]&&(this.state.board[e.target.dataset.square]=this.state.turn,e.target.innerText=this.state.turn,this.setState({turn:"X"===this.state.turn?"0":"X",board:this.state.board,totalMoves:this.state.totalMoves++}));var a=this.checkWinner();"X"===a?this.setState({gameEnded:!0,winner:"X",winnerLine:"Match won by X"}):"0"===a?this.setState({gameEnded:!0,winner:"0",winnerLine:"Match won by 0"}):"draw"==a&&this.setState({gameEnded:!0,winner:"draw",winnerLine:"Match is Draw"})}},{key:"checkWinner",value:function(){for(var e=[[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]],a=this.state.board,t=0;t<e.length;t++)if(a[e[t][0]]===a[e[t][1]]&&a[e[t][1]]===a[e[t][2]])return a[e[t][0]];if(9==this.state.totalMoves)return"draw"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"board",onClick:function(a){return e.clicked(a)}},r.a.createElement("div",{className:"square","data-square":"0"}),r.a.createElement("div",{className:"square","data-square":"1"}),r.a.createElement("div",{className:"square","data-square":"2"}),r.a.createElement("div",{className:"square","data-square":"3"}),r.a.createElement("div",{className:"square","data-square":"4"}),r.a.createElement("div",{className:"square","data-square":"5"}),r.a.createElement("div",{className:"square","data-square":"6"}),r.a.createElement("div",{className:"square","data-square":"7"}),r.a.createElement("div",{className:"square","data-square":"8"}),r.a.createElement("div",{id:"status"},this.state.winnerLine))}}]),a}(n.Component);var h=function(){return r.a.createElement("div",{id:"game"},r.a.createElement("div",{id:"header"},"TIC TAC TOE"),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},2:function(e,a,t){},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b7de6e11.chunk.js.map