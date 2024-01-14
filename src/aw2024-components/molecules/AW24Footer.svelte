<div id="footer" class="footer flex flex-col h-fit">
  <div
    class="footer__bottom flex flex-row pl-20 pr-20 pt-5 pb-5 w-100 justify-between items-center"
  >
    <div class="flex flex-row align-center justify-start flex-grow">
      <div class="flex flex-col font-thin align-center justify-center">
        <p class="i-tiny">Alliance of Computer Science Students</p>
        <p class="i-super-tiny">University of the Philippines Los Banos</p>
      </div>
    </div>
    <div class="flex font-thin justify-end flex-grow">
      <p class="i-tiny">2023</p>
    </div>
  </div>
</div>

<style>
  @media (min-width: 0px) and (max-width: 500px) {
    .footer__bottom {
      row-gap: 1rem;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
  .footer {
    z-index: 1;
    position: relative;
    width: 100%;
    background-color: var(--color-dark-3);
    box-shadow: 0 0 100px rgba(59, 127, 239, 0.5);
    transition: box-shadow 0.5s ease-in-out;
  }

  .footer:hover {
    box-shadow: 0 0 110px rgba(59, 127, 239, 7);
  }
  .footer__bottom {
    background-color: var(--color-dark-4);
  }
</style>
