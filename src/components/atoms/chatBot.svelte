<script>
  let chatVisibility = false;

  function handleChat() {
    chatVisibility = !chatVisibility;
  }
</script>

<div class="chat-screen">
  <!-- {#if chatVisibility} -->
  <div class="chat-box">
    <textarea placeholder="Type your message..." />
    <button>Send</button>
  </div>
  <!-- {/if} -->
  <div class="chat-container">
    <div class="chat-button onClick={handleChat}">
      <div class="circle" />
    </div>
  </div>
</div>

<style>
  .chat-screen {
    position: fixed;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: flex-end;
  }

  .chat-container {
    position: fixed;
    padding: 5rem;
    bottom: 20px;
    right: 20px;
    display: flex;
  }

  .chat-button {
    width: 100px;
    height: 100px;
    background-color: var(--color-blue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .circle {
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 50%;
  }

  .chat-box {
    display: flex;
    width: 250px;
    bottom: 20px;
    right: 20px;
    /* height: 250px; */
    flex-direction: flex-end;
    align-items: flex-end;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .chat-box textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: none;
    resize: none;
  }

  .chat-box button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
