import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../images/education.png" width="112" height="28">
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" [routerLink]="['']">
            Home
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" [routerLink]="['students','list']">
              Students
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item" [routerLink]="['students','list']">
                Students List
              </a>
              <a class="navbar-item" [routerLink]="['students','add']">
                Add Student
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-link" [routerLink]="['signup']">
                <strong>Sign up</strong>
              </a>
              <a class="button  is-link is-light" [routerLink]="['login']">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="hero is-small is-link">
      <div class="hero-body">
        <p class="title">
          School Registry
        </p>
      </div>
    </section>
    <div class=".container.is-widescreen">
      <div class="notification">
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="footer has-background-link-light">
      <div class="content has-text-centered">
        <p>
          <strong>MIU</strong> by <a href="https://www.linkedin.com/in/ntwali-gislain-muhikira/">N.Gislain Muhikira</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'client';
}
