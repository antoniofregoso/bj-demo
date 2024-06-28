export function notFound(url){
    document.body.innerHTML =  /* html */`
    <section class="hero is-fullheight has-background-brand">
    <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://docs-conference.s3.us-east-2.amazonaws.com/santerra.png" width="180" >
        </a>
        </div>
      </div>
    </div>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title has-text-warning-dark">
          404
        </p>
        <p class="subtitle has-text-light">
        La URL <span class="has-text-warning-dark has-text-weight-bold">${url}</span>  no se encuentra en este servidor.
        </p>
      </div>
    </div>
  </section>
    `
}