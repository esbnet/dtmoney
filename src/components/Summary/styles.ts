import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    padding: 1.5rem 2rem;
    color: var(--text-title);
    background: var(--shape);
    border-radius: 0.25rem;
    box-shadow: 0px 1.5rem 4rem rgba(0, 0, 0, 0.09);


    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      // color: #ffffff;
      transparant: 0.2;
      background: linear-gradient(
        to top,
        var(--yellow) 0%,
        var(--yellow-light) 51%,
        var(--yellow) 100%
      );
    }

    .summary {
      color: white;
      text-shadow: 1px 1px 4px rgba(8, 8, 8, 0.9);

    }

  }
`;