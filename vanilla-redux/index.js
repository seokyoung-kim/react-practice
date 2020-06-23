import { createStore } from "redux";
// DOM 레퍼런스
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 타입 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            }
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            }
        case DECREASE:
            return {
                ...state,
                counter:state.counter -1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState();

    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
}

render();
store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());s
}

btnIncrease.onclick = () => {
    store.dispatch(increase(1));
}

btnDecrease.onclick = () => {
    store.dispatch(decrease());
}