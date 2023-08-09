<div class="advisers flex flex-col justify-center items-center">
  <h3>Advisers</h3>
  <div class="advisers-content flex flex-row">
    <div class="advisers__container flex grow justify-end self-start w-1/2">
      <div class="flex flex-row p-10 gap-5 text-left w-4/5 items-center">
        <div class="card" />
        <div class="flex flex-col gap-3 justify-self-center">
          <div class="flex flex-col">
            <p class="text-lg font-bold">Sir FirstName M. LastName</p>
            <p class="text-base font-extralight text-slate-500">
              Senior Adviser
            </p>
          </div>
          <p class="text-base font-extralight w-4/5">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
      </div>
    </div>
    <div class="advisers__container flex grow justify-start self-end w-1/2">
      <div class="flex flex-row p-10 gap-5 text-right w-4/5 items-center">
        <div class="flex flex-col gap-3 justify-self-center">
          <div class="flex flex-col">
            <p class="text-lg font-bold">Sir FirstName M. LastName</p>
            <p class="text-base font-extralight text-slate-500">
              Junior Adviser
            </p>
          </div>
          <p class="text-base font-extralight w-4/5 self-end">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
        <div class="card" />
      </div>
    </div>
  </div>
</div>

<style>
  .advisers {
    margin-top: 5rem;
  }
  .advisers-content {
    height: 80vh;
  }
  .advisers__container {
    height: 50vh;
  }
  .card {
    width: 250px;
    height: 250px;
    border-radius: 10px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(21px);
    padding: 5rem;
    text-align: center;
  }
</style>
