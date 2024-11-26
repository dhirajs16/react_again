#Motion

**Lesson 1**: setup and properties like(`initial`, `animate`, `transition`, `while...`), animate presence and exit prop, 


<hr>

## **Installation** 
```bash

npm install motion

```

<hr>

## **Properties of motion element**

| Property      | Sub-Properties                                                                                                      |
|---------------|---------------------------------------------------------------------------------------------------------------------|
| **Initial**   | `opacity`, `scale`, `rotate`, `x`, `y`, `z`, `backgroundColor`, `color`, `width`, `height`, `borderRadius`, `boxShadow`, `transform` |
| **Animate**   | `opacity`, `scale`, `rotate`, `x`, `y`, `z`, `backgroundColor`, `color`, `width`, `height`, `borderRadius`, `boxShadow`, `transform` |
| **Transition**| `duration`, `delay`, `easing`, `spring`, `x`, `y`, `z`, `opacity`, `scale`, `rotate`, `backgroundColor`, `color`, `width`, `height`, `borderRadius`, `boxShadow`, `transform` |
| **WhileHover**| `opacity`, `scale`, `rotate`, `x`, `y`, `z`, `backgroundColor`, `color`, `width`, `height`, `borderRadius`, `boxShadow`, `transform` |
| **WhileFocus**| `opacity`, `scale`, `rotate`, `x`, `y`, `z`, `backgroundColor`, `color`, `width`, `height`, `borderRadius`, `boxShadow`, `transform` |
| **WhileDrag** | `opacity`, `scale`, `rotate`, `x`, `y`, `z`, `backgroundColor`, `color`, `width`, `height`, `borderRadius`, `boxShadow`, `transform` |
| **WhileInView**| `opacity`, `scale`, `rotate`, `x`, `y`, `z`, `backgroundColor`, `color`, `width`, `height`, `borderRadius`, `boxShadow`, `transform` |
| **WhileTap**  | `opacity`, `scale`, `rotate`, `x`, `y`, `z`, `backgroundColor`, `color`, `width`, `height`, `borderRadius`, `boxShadow`, `transform` |



### Initial, Animate
- **opacity**: Defines the transparency of the element. Values can range from `0` (completely transparent) to `1` (completely opaque).
- **scale**: Controls the size of the element. Values can be numbers such as `0.5` (half size) or `2` (double size).
- **rotate**: Specifies the rotation of the element in degrees. Values can be positive or negative numbers like `45` or `-90`.
- **x, y, z**: These control the position of the element along the X, Y, and Z axes. Values can be numbers like `100`, `-50`, or even percentages.
- **backgroundColor**: Sets the background color of the element. Values can be color names like `"blue"`, hexadecimal codes like `"#0000FF"`, or RGB/RGBA values.
- **color**: Changes the text color of the element. Similar to `backgroundColor`, values can be color names, hexadecimal codes, or RGB/RGBA values.
- **width, height**: Specifies the width and height of the element. Values can be numbers with units like `100px`, `50%`, etc.
- **borderRadius**: Defines the roundness of the element's corners. Values can be numbers with units like `10px`, `50%`.
- **boxShadow**: Adds shadow effects around an element. Values can be like `"10px 10px 5px #888888"` for horizontal offset, vertical offset, blur radius, and color.
- **transform**: A composite property for applying multiple transforms like rotate, scale, translate, etc. Values can include transform functions like `"rotate(45deg) scale(1.5)"`.



### Transition, While...
Defines how the animation proceeds:
- **duration**: The length of time the animation takes to complete. Values can be numbers like `2` (seconds).
- **delay**: The amount of time to wait before starting the animation. Values can be numbers like `0.5` (seconds).
- **easing**: The acceleration curve of the animation. Common values include `"ease"`, `"linear"`, `"ease-in"`, `"ease-out"`, and custom cubic-bezier values.
- **type**: Specifies the type of animation. Values can include `"spring"`, `"tween"`.
- **stiffness**: For `spring` animations, defines the stiffness of the spring. Values can be numbers like `100`.
- **damping**: For `spring` animations, defines the damping effect to reduce oscillation. Values can be numbers like `10`.
- **mass**: For `spring` animations, defines the mass of the spring. Values can be numbers like `1`.
- **repeat**: Number of times the animation should repeat. Values can be numbers like `Infinity`.
- **repeatType**: Defines how the repeat should behave. Values can be `"loop"`, `"reverse"`, or `"mirror"`.
