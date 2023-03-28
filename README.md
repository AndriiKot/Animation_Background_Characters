# HTML-elements-centering
HTML Elements Centering


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>HTML elements centering</title>
</head>
<body>


  <!-- Example  1-->

  <h3>Example 1 </h3>
  <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima eligendi laudantium quas voluptatibus porro distinctio quam nemo in vero. Eaque sunt excepturi cum inventore doloribus. At voluptates vitae et?
    Consectetur voluptas esse eligendi quasi sed doloremque quisquam expedita blanditiis officia laboriosam dignissimos nemo facere laborum dolores alias neque consequatur assumenda, dolorem molestiae rerum temporibus? Quas quis blanditiis dolorem laboriosam.
  </p>
  <hr>
  ```
  ```css
  /* Example 1 */
.text{
  text-align: center
}
```


____
____
```html
  <!-- Example  2-->

  <h3>Example 2</h3>

  <div class="wrapper">
    <a href="#">Link</a>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste eveniet deserunt iusto et! Asperiores nam nobis id velit a. Odit eius voluptate doloremque. Nobis provident consequatur adipisci reiciendis quidem?
      Nostrum nam itaque explicabo hic? Nulla aliquid est similique repellendus minus dolor quasi ducimus perspiciatis quod illo praesentium exercitationem, repudiandae quidem culpa maxime eveniet nam, totam nihil eligendi ullam possimus?
    </p>
    <img src="html_img.png" alt="Html">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum dicta fugiat explicabo ipsum veritatis, incidunt quidem optio perspiciatis repudiandae enim dolor culpa id, tempore facere facilis sit mollitia nam?
      Fuga atque beatae perspiciatis odit et maxime amet inventore voluptatum, sint, dignissimos rem officiis assumenda nam corrupti quos veritatis voluptates! Saepe praesentium officia blanditiis fuga minima nemo dignissimos rerum dolore.
      Tempore nisi, ea similique voluptate nostrum excepturi? Ducimus natus repudiandae dolorem eos dicta nam est amet, itaque saepe sapiente dolor delectus odio fugiat autem pariatur impedit. Numquam dignissimos odio commodi!
    </p>
   </div>

  <hr>
```
```css
/* Example 2 */
.wrapper{
  margin-top: 30px;
  text-align: center
}
```


____
____

```html
  <!-- Example  3-->

  <h3 class="">Example 3</h3>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
     adipisci nesciunt. Natus nam, deserunt doloremque assumenda itaque 
     suscipit atque alias explicabo maiores rem beatae facere in enim ad pariatur accusantium!
  </p>
  <img src="html_img.png" alt="html" class="image">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Cumque distinctio rem enim fugit velit dicta adipisci recusandae, quas nisi corporis,
     asperiores beatae laboriosam fuga, eum fugiat amet possimus vero at?
  </p>
  <hr>
```
```css
/* Example 3 */
.image{
  display: block;
  margin: 0 auto
}
```

____
____


```html
  <!-- Example  4-->

  <h3 class="">Example 4</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium, optio, natus debitis dolores culpa voluptatem tenetur voluptates animi rerum aliquam labore repudiandae ab eveniet alias similique repellendus fugiat laborum!
     Dolorum mollitia illum sit expedita eius, incidunt quam minima quos explicabo voluptas suscipit provident est. Dolore eius distinctio qui, eligendi cumque omnis, sequi nostrum totam cum molestias doloribus saepe delectus!
  </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium, optio, natus debitis dolores culpa voluptatem tenetur voluptates animi rerum aliquam labore repudiandae ab eveniet alias similique repellendus fugiat laborum!
    Dolorum mollitia illum sit expedita eius, incidunt quam minima quos explicabo voluptas suscipit provident est. Dolore eius distinctio qui, eligendi cumque omnis, sequi nostrum totam cum molestias doloribus saepe delectus!
  </p>
  <button class="button">Кнопка</button>
  <hr>
```
```css
/* Example 4 */
.button {
  position: relative;
  left: 50%;
  transform: translateX(-50%)
}
```

____
____

```html

  <!-- Example  5-->

  <h3>Example 5</h3>
  <div class="flex">
   <img src="html_img.png" alt="Html">
  </div>
  <div class="flex">
    <div class="block">Lorem, ipsum dolor.</div>
  </div>
  <div class="flex">
   <div class="block">Lorem, ipsum dolor.</div>
   <div class="block">Lorem, ipsum dolor.</div>
  </div>
  <hr>
```

```css
/* Example 5 */
.block{
  width: 300px;
  height: 100px;
  background-color: aqua;
  margin-top: 10px;
  text-align: center;
  font-size: 25px;
  padding: 30px;
  border-radius: 8px
}

.flex{
  display: flex;
  justify-content: center
}

```

____
____

```html

  <!-- Example  6-->

  <h3>Example 6</h3>
  <div class="grid">
   <img src="html_img.png" alt="Html">
  </div>
  <div class="grid">
    <div class="block">Lorem, ipsum dolor.</div>
  </div>
  <div class="grid">
   <div class="block">Lorem, ipsum dolor.</div>
   <div class="block">Lorem, ipsum dolor.</div>
  </div>
  <hr>
```
```css
/* Example 6 */
.block{
  width: 300px;
  height: 100px;
  background-color: aqua;
  margin-top: 10px;
  text-align: center;
  font-size: 25px;
  padding: 30px;
  border-radius: 8px
}

.grid{
  display: grid;
  justify-content: center
}
```

____
____

```html

  <!-- Example  7-->

  <h3>Example 7</h3>
  <div class="box">
    <img class="image" src="html_img.png" alt="html">
    <div class="text">Lorem ipsum dolor sit.</div>
  </div>
</body>
</html>
```
```css
.box{
  position: relative;
  background-color: black;

  max-width: 400px;
  height: 250px
}

.box .image {
  display: block;
  width: 100%;
  height: 100%
}

.box .text{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  top: 0;
  color: white;
  font-size: 21px
}
```
