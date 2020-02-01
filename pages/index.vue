<template>
  <div class="container">
    <div class="row">
      <div class="one-half column">
        <div class="portait" />
      </div>
      <div class="one-half column">
        <div class="content">
          <header>
            <h1 class="mb-0">Kristina Sheppard</h1>
            <h5>Female Empowerment Coach</h5>
            <h5 class="stylish-text my-2">Become the author of your life.</h5>
          </header>
          <nav>
            <ul class="nav-links">
              <li>
                <nuxt-link to="/learn-more" class="button">Learn more</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" class="button">About me</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/pricing" class="button">Pricing</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" class="button">Contact</nuxt-link>
              </li>
            </ul>
          </nav>
          <article class="social-links mt-2">
            <a class="fab fa-instagram" />
            <a class="fab fa-facebook-f" />
            <a class="fab fa-linkedin-in" />
            <a class="far fa-envelope" />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
.portait {
  background-image: url('~assets/images/portrait.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0%;
  height: 500px;

  @media (min-width: 750px) {
    background-position: center center;
    height: 90vh;
  }
}

.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 90vh;
}

.nav-links {
  list-style: none;

  li {
    position: relative;
    margin-bottom: 2rem;

    .button {
      margin: 0;
      //color: #7da5a7;
    }

    &:not(:last-of-type)::after {
      display: block;
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 1px;
      height: 2rem;
      background-color: #ccc;
    }
  }
}

.social-links {
  font-size: 1.25em;

  a {
    margin: 0 1em;
    //color: #7da5a7;
  }
}
</style>
