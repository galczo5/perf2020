# Angular Performance 2020 
This repo contains source code for session "Small fixes for huge performance problems
". Feel free to use and share this code. 

I cannot ensure that his repo won't change, so please fork it if you need "today version". Star it if you are interested in updates.

## Pull request
Check pull requests for this repo. Each contains changes that I've presented during speech. It was the best way to present what I changed and how little effort it costs.

## Hosted apps
You can find all apps hosted [here](http://perf2020.kamil-galek.pl/). If not, try to build it by your own. It's standard Angular CLI project, so checkout commit you want and run `ng serve` or `ng build`;

## Profiles
During the presentation I'm using profiles created with T460. All profiles you can find in repo, directory `profiles/`.  

## Results

Short summary of my tests. Measure `ms / LOC` is my way to show how easy was to get better performance. It shows how many lines of code I had to change to get good results.

| Fix | Scripting | Rendering | Change in % | ms / LOC | NOTES |
|---|---|---|---|---|---|
| no changes, base | | | | | | 
| structure fixes | | | | | |
| reduced listeners | | | | | |
| disabled NgZones | | | | | |
| disabled NgZones + renderer | | | | | |
| rendering only visible items | | | | | |

## Slides
Slides will be here soon.

## Additional recommended resources
[Angular Performance Checklist](https://github.com/mgechev/angular-performance-checklist) by Minko Gechev  
[JavaScript Performance](https://frontendmasters.com/courses/web-performance/) by Steve Kinney  
[Angular Performance Optimization Techniques](https://medium.com/swlh/angular-performance-optimization-techniques-5b7ca0808f8b) by Muhammad Danyal

