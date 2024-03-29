import styled from 'styled-components';

const Dice = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(12.8rem, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;

  padding: 2rem;

  perspective: 600px;
`;

const DieList = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  height: 9.6rem;
  width: 9.6rem;

  list-style-type: none;
  transform-style: preserve-3d;

  [data-side='1'] {
    transform: rotate3d(0, 0, 0, 90deg) translateZ(4.7rem);
  }
  [data-side='2'] {
    transform: rotate3d(-1, 0, 0, 90deg) translateZ(4.7rem);
  }
  [data-side='3'] {
    transform: rotate3d(0, 1, 0, 90deg) translateZ(4.7rem);
  }
  [data-side='4'] {
    transform: rotate3d(0, -1, 0, 90deg) translateZ(4.7rem);
  }
  [data-side='5'] {
    transform: rotate3d(1, 0, 0, 90deg) translateZ(4.7rem);
  }
  [data-side='6'] {
    transform: rotate3d(1, 0, 0, 180deg) translateZ(4.7rem);
  }
  [data-side='1'] .dot:nth-of-type(1) {
    grid-area: five;
  }
  [data-side='2'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  [data-side='2'] .dot:nth-of-type(2) {
    grid-area: nine;
  }
  [data-side='3'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  [data-side='3'] .dot:nth-of-type(2) {
    grid-area: five;
  }
  [data-side='3'] .dot:nth-of-type(3) {
    grid-area: nine;
  }
  [data-side='4'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  [data-side='4'] .dot:nth-of-type(2) {
    grid-area: three;
  }
  [data-side='4'] .dot:nth-of-type(3) {
    grid-area: seven;
  }
  [data-side='4'] .dot:nth-of-type(4) {
    grid-area: nine;
  }
  [data-side='5'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  [data-side='5'] .dot:nth-of-type(2) {
    grid-area: three;
  }
  [data-side='5'] .dot:nth-of-type(3) {
    grid-area: five;
  }
  [data-side='5'] .dot:nth-of-type(4) {
    grid-area: seven;
  }
  [data-side='5'] .dot:nth-of-type(5) {
    grid-area: nine;
  }
  [data-side='6'] .dot:nth-of-type(1) {
    grid-area: one;
  }
  [data-side='6'] .dot:nth-of-type(2) {
    grid-area: three;
  }
  [data-side='6'] .dot:nth-of-type(3) {
    grid-area: four;
  }
  [data-side='6'] .dot:nth-of-type(4) {
    grid-area: six;
  }
  [data-side='6'] .dot:nth-of-type(5) {
    grid-area: seven;
  }
  [data-side='6'] .dot:nth-of-type(6) {
    grid-area: nine;
  }

  &.odd-roll {
    transition: transform 1.25s ease-out;

    &[data-roll='1'] {
      transform: rotateX(-360deg) rotateY(-720deg) rotateZ(-360deg);
    }
    &[data-roll='2'] {
      transform: rotateX(-270deg) rotateY(-720deg) rotateZ(-360deg);
    }
    &[data-roll='3'] {
      transform: rotateX(-360deg) rotateY(-810deg) rotateZ(-360deg);
    }
    &[data-roll='4'] {
      transform: rotateX(-360deg) rotateY(-630deg) rotateZ(-360deg);
    }
    &[data-roll='5'] {
      transform: rotateX(-450deg) rotateY(-720deg) rotateZ(-360deg);
    }
    &[data-roll='6'] {
      transform: rotateX(-360deg) rotateY(-900deg) rotateZ(-360deg);
    }
  }

  &.even-roll {
    transition: transform 1.5s ease-out;

    &[data-roll='1'] {
      transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
    }
    &[data-roll='2'] {
      transform: rotateX(450deg) rotateY(720deg) rotateZ(360deg);
    }
    &[data-roll='3'] {
      transform: rotateX(360deg) rotateY(630deg) rotateZ(360deg);
    }
    &[data-roll='4'] {
      transform: rotateX(360deg) rotateY(810deg) rotateZ(360deg);
    }
    &[data-roll='5'] {
      transform: rotateX(270deg) rotateY(720deg) rotateZ(360deg);
    }
    &[data-roll='6'] {
      transform: rotateX(360deg) rotateY(900deg) rotateZ(360deg);
    }
  }
`;

const DieItem = styled.li`
  background-color: #fefefe;
  box-shadow: inset -0.56rem 0.56rem 1.2rem rgba(0, 0, 0, 0.3),
    inset 0.8rem -0.4rem 0.8rem rgba(0, 0, 0, 0.15);
  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-areas:
    'one two three'
    'four five six'
    'seven eight nine';
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  padding: 1.6rem;
  width: 100%;
`;

const Dot = styled.span`
  align-self: center;
  background-color: #676767;
  border-radius: 50%;
  box-shadow: inset -0.24rem 0.24rem 0.4rem rgba(0, 0, 0, 0.5);
  display: block;
  height: 2rem;
  justify-self: center;
  width: 2rem;
`;

export { Dice, DieList, DieItem, Dot };
