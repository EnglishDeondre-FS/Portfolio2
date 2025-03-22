# First Post
Welcome to my first blog post! In this we will be learning about the rendering, how it works where its started and where it is going. 


## Genisis of rendering

Rendering as most people know it started with a few games written in C, Quake, Tetris, Pong, Pacman. Games made more advanced rendering techniques possible like the difference between a Software Renderer, and a Hardware Renderer. Most people believe operating systems like MS-DOS or Windows95 drove the world of rendering as we know it. That is not the case it was the games we know and love that made this complex world possible.

Screens back in the day used to "reset" with the usage of scan-lines, or updates frames as we know them today, traditional projection based screens work something like the example below, scanning from bottom to top for pixels that have changed in the current context.

```
------------
------------
------------
------------
------------
```

Now we have things like frame-time, and VSync, Refresh rate, Oled. In this article I'm going to teach you more about this, but never forgot where we came from!

## Important notes

Examples will be written in C++, due to that being the most common form in the industry.

This is ment to give you a place to start, not a 1-1 guide on C++ or even graphics context alone.

## Where rendering is Today

We through around terms like Ray Tracing, Context Buffering, Lumen, Nano all of these rendering buzz words. Or even api buzz words, like Vulkan, DirectX, OpenGL, and Metal. The world of rendering went from something that a smart person could figure out in a weekend to something that now takes years of expirence to master. 

### Breaking the API jargen down

Vulkan is the most "bleeding-edge api", you will often see vulkan related to high performant 3d environments with a ton of 3d ray-tracing, and 1000s of objects on the screen at once.

OpenGL is the older counterpart to Vulkan I would reccomend this as the API that people should start with. That is if it has not been deprecated on their machine first.

SDL is the one thats has been in the shadows of a lot of systems. Think of it as a compoatability layer between all of the other APIs while still being able to do things the others cannot do well.

Metal is the apple one, its alright for basic rendering of things when data is a dependency. But most of the time metal is not ideal.
