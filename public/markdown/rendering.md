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

> Examples will be written in C++, due to that being the most common form in the industry.

> This is ment to give you a place to start, not a 1-1 guide on C++ or even graphics context alone.

## Where rendering is Today

We through around terms like Ray Tracing, Context Buffering, Lumen, Nano all of these rendering buzz words. Or even api buzz words, like Vulkan, DirectX, OpenGL, and Metal. The world of rendering went from something that a smart person could figure out in a weekend to something that now takes years of expirence to master. 

In the world of graphics people assume that verbosity makes things more simple overall. Imagine if you have 10 papers due tommorrow, and you get the bright idea to not look at the requirements of the project and you start writing all 10 from a base template. Your gonna end of sounding like a robot and start referencing possible things you never needed in the first place.

I beleve in simple rendering context. One call for each frame, understanding the lifetime of the users application, and the context in which it should live. Not just putting all the data in front of the end user and shouting good luck!

## Breaking the API jargen down

Vulkan is the most "bleeding-edge api", you will often see vulkan related to high performant 3d environments with a ton of 3d ray-tracing, and 1000s of objects on the screen at once.

OpenGL is the older counterpart to Vulkan I would reccomend this as the API that people should start with. That is if it has not been deprecated on their machine first.

SDL is the one thats has been in the shadows of a lot of systems. Think of it as a compoatability layer between all of the other APIs while still being able to do things the others cannot do well.

Metal is the apple one, its alright for basic rendering of things when data is a dependency. But most of the time metal is not ideal.

## Understanding where to start

Starting a new project often can be the most complex thing in the universe especially in the c++ world. I reccomend SDL or raylib as a start, and CMake as the build system just becuase those are both the best documented. Again stick to simplicity.

```c++
#include <SDL/SDL.h>

int main() {
    while (window.SHOULD_NOT_CLOSE) {
        // render things here.
    }
    return 0;
}
```

The basics of any graphics api is going to make you create some window, then do a forever loop for rendering. Pack everything inside of there, and then expect you to understand what is going on in the application.

```C++
#include <SDL/SDL.h>

int main() {
    Application* application = new Application();
    SystemLayer* sys = new SystemLayer();
 
    while (application->window.SHOULD_NOT_CLOSE) {
        // render things here.
        sys->wait(); // waiting for any system calls by the user.
    }
    return 0;
}
```

What I like to do is have Layers of the application, so that then I know I have access to things say the users file system, that I made need later.

In the example above we have a queue that the user is constatly communicating with, that allows for us to have total control of the application with no levels of inference across layers. If the user wants a rerender we call `sys->append(sys->rerender());` allowing for the system to handle all rendering context as it should. Removing the need for 100 lines of controlling the users screen / input.

## The wonderful world of shaders

Shaders from a distance may seem complex, that is only becuase of what people can do with then not what you technically should do with them. 

```
Shader "Custom/SolidColor" {
    SubShader {
        Pass {
            CGPROGRAM

            #pragma vertex vert
            #pragma fragment frag

            float4 vert(float4 v:POSITION) : SV_POSITION {
                return mul (UNITY_MATRIX_MVP, v);
            }

            fixed4 frag() : SV_Target {
                return fixed4(1.0,0.0,0.0,1.0);
            }

            ENDCG
        }
    }
}
```

A Shader is a computational interface for the gpu to define how it uses its buffers at any given time. Thinking about them this way immediatly makes them simple.

The shader above may seem weird at first but all it is doing is applying color to a given position without this, color would be there just not in the expected position. We have a tradiational Matrix think of it like an array, then to apply values you have to add them to each matrix value. So you take -> [] * [] rather then [] + [].

> Great source for learning shader language [source](https://learnopengl.com/Getting-started/Shaders)

## Good Graphics Resources

- [Game Engine Architecture](https://www.gameenginebook.com/)