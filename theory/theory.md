# HTML & CSS Advanced

<!-- Forms -->
<details>
<summary>Forms</summary>

<!-- 1. Input attributes -->
**1. Input attributes**

```html
<input type="text" name="y" value="123" readonly />
```

**Input types: text, password, radio, hidden, fieldset, date, number.**

**2. Checkbox and label**

- **With "for" attribute in label.**

```html
<div class="form-field">
  <input type="checkbox" name="terms" id="terms-and-conditions" />
  <label for="terms-and-conditions"> I agree with terms and conditions. </label>
</div>
```

- **Input in label**

```html
<label class="form-field">
  <input type="checkbox" name="remember" value="123" checked />
  I agree with terms and conditions.
</label>
```

**3. Form validation**

```html
<input pattern="\w+" required minlength="5" maxlength="32" />
```

**4. Button**

```css
<button type="button"></button>
<button type="reset"></button>
<button type="submit" disabled></button>
```

**5. Pseudo-class**

```css
.field::placeholder {
  color: blueviolet;
}

.field:invalid {
  border: 1px solid red;
}

.field:focus {
  background-color: yellow;
}

.field:checked ~ .form__label {
  color: green;
}

.form__button:disabled {
  opacity: 0.8;
}
```

**6. Select**

```html
<select name="color" required>
  <option value="" disabled selected>Choose a color</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
</select>
```

**7. Textarea**

```html
<textarea
  name="feedback"
  placeholder="456"
  rows="5"
  cols="30"
  disabled
  required
>
</textarea>
```

</details>


<details>
<summary>Flexbox</summary>

``` css
.container {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly; 
  align-items: stretch | flex-start | flex-end | center | baseline; 
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | baseline 
  gap: 10px;
}

.item {
  order: 5;
  flex-grow: 3;
  flex-shrink: 3; 
  // This defines the ability for a 
  flex item to shrink if necessary.
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
</details>

<details>
  <summary>Media</summary>

  ``` css
  @media all and (max-width: 1024px) {...}

  @media (min-width: 768px) {...}

  @media (min-height: 680px), screen and (orientation: portrait) {...}
  ```
</details>

<details>
<summary>BEM</summary>

``` html
<div class="example">

  <!-- Wrong -->
  <ul class="example__list">
    <li class="example__list__item">
      Wrong
    </li>
  </ul>
    
  <!-- Correct -->
  <ul class="example__list">
    <li class="example__item">
      Correct
    </li>
  </ul>
  
</div>
```

``` html
<!-- Wrong -->
<ul class="menu">
  <li class="item">
    Если только это не отдельный блок
  </li>
</ul>

<!-- Correct -->
<ul class="menu">
  <li class="menu__item">...</li>
</ul>
```

``` html
<!-- Wrong -->
<ul class="menu--mobile">
  <li class="menu__item--active">...</li>
</ul>

<!-- Correct -->
<ul class="menu menu--mobile">
  <li class="menu__item menu__item--active">...</li>
</ul>
```
``` html
<nav class="nav">
  <!-- Wrong -->
  <a class="nav__link active" href="#">
    Wrong
  </a>

  <!-- Correct -->
  <a class="nav__link nav__link--active" href="#">
    Correct
  </a>
</nav>
```

``` html
<div class="parent">
  <!-- Wrong -->
  <div class="child">
    <p class="parent__element">Text</p>
  </div>
  
  <!-- Correct -->
  <div class="child parent__element">
    <p class="child__element">Text</p>
  </div>
</div>
```

``` html
<div class="parent">
  <div class="child">...</div>
</div>

<div class="parent">
  <div class="child parent__element">...</div>
</div>
```
```css
.child {
  position: absolute;
  top: 0;
  margin: 10px;
  padding: 10px;
}

/* Correct */
.parent__element { /* Использовать mix */
  position: absolute;
  top: 0;
  margin: 10px;
}

.child {
  padding: 10px;
}
```
</details>

<details>
<summary>SASS</summary>

**1. Variables**
``` scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

**2. Nesting**
``` scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

**3. Modules**
<br>You don't have to write all your Sass in a single file. You can split it up however you want with the `@use` rule.

**4. Mixins**
``` scss
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

**5. Placeholder (Extend/Inheritance)**
``` scss
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

**6. @if & @else**

- **If**
``` scss
@mixin avatar($size, $circle: false) {
  width: $size;
  height: $size;

  @if $circle {
    border-radius: $size / 2;
  }
}

.square-av {
  @include avatar(100px, $circle: false);
}
.circle-av {
  @include avatar(100px, $circle: true);
}
```

- **Else**
``` scss
$light-background: #f2ece4;
$light-text: #036;
$dark-background: #6b717f;
$dark-text: #d2e1dd;

@mixin theme-colors($light-theme: true) {
  @if $light-theme {
    background-color: $light-background;
    color: $light-text;
  } @else {
    background-color: $dark-background;
    color: $dark-text;
  }
}

.banner {
  @include theme-colors($light-theme: true);
  body.dark & {
    @include theme-colors($light-theme: false);
  }
}
```

**7. @each**
``` scss
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}
```

**8. Interpolation**
> Interpolation can be used almost anywhere in a Sass stylesheet to embed the result of a SassScript expression into a chunk of CSS. Just wrap an expression in #{} in any of the following places:

- Selectors in style rules
- Property names in declarations
- Custom property values
- CSS at-rules
- @extends
- Plain CSS @imports
- Quoted or unquoted strings
- Special functions
- Plain CSS function names
- Loud comments

**9. Function**
``` scss
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}
```

**10. For**
``` scss
// SCSS
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```
``` css
/* CSS */
ul:nth-child(3n + 1) {
  background-color: #004080;
}

ul:nth-child(3n + 2) {
  background-color: #004d99;
}

ul:nth-child(3n + 3) {
  background-color: #0059b3;
}
```
</details>

Transformations & Animations

**1. Transition**
``` scss
.box {
  background-color: #080;
  transition: width 0.5s ease 1s;
}

.box:hover {
  transition: width 1s ease;
  background-color: #040;
}
```
Transition properties:
- transition-duration
- transition-property (width, color, transform)
- transition-delay
- transition-timing-duration (ease)

**2. Animation**
``` scss
.box {
  width: 70px;
  height: 70px;
  animation:
    move 1s linear 2 alternate,
    round 1.5s linear 4;
}

.box:hover {
  animation-play-state: paused;
}

@keyframes round {
  0% {
    border-radius: 0;
  }

  50% {
    border-radius: 50%;
  }

  100% {
    border-radius: 0;
  }
}

@keyframes move {
  from {
    left: 0;
  }

  to {
    left: 300px;
  }
}
```
Animation properties:
- @keyframes
- animation
- animation-delay (ms, s)
- animation-direction (alternate)
- animation-duration
- animation-iteration-count (10, 20)
- animation-fill-mode (backwards)
- animation-timing-function (linear)

**3. Transform**
``` scss
box {
  transform: translate(-50%, -50%);

  transition: transform 1s;
  transform-origin: 10px 10px;
}
```
Transform properties:
- translate (3D, X, Y, Z / px)
- rotate (X, Y / deg)
- scale (0.5, 1.5)
- skew (deg)
