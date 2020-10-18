# Angular Performance 2020 
This repo contains source code for session "Small fixes for huge performance problems
". Feel free to use and share this code. 

I cannot ensure that this repo won't change, so please fork it if you need "today version". Star it if you are interested in updates.

## Pull request
Check pull requests for this repo. Each contains changes that I've presented during speech. It was the best way to present what I changed and how little effort it costs.

## Hosted apps
You can find all apps hosted [here](http://perf2020.kamil-galek.pl/). If not, try to build it by your own. It's standard Angular CLI project, so checkout commit you want and run `ng serve` or `ng build`;

## Profiles
During the presentation I'm using profiles created with T460. All profiles you can find in repo, directory `profiles/`.  

## Results

Short summary of my tests.

| Fix | Scripting | Rendering | Diff | NOTES |
|---|---|---|---|---|
| raw | 919ms | 1714ms | 10415ms | |
| no changes, base | 6688ms | 6360ms | 0ms | | 
| structure fixes | 5351ms | 2454ms | 5243ms | |
| reduced listeners | 5969ms | 6502ms | 577ms | This one had a huge impact in previous versions od Angular |
| disabled NgZones | 6074ms | 6144ms | 830ms | A lot better feel of row select and hover |
| disabled NgZones + renderer | 6343ms | 6438ms | 263ms | A lot better feel of row select and hover |
| rendering only visible items | 352ms | 93ms | 12603ms | |

## Slides
Slides will be here soon.

## Additional recommended resources
[Angular Performance Checklist](https://github.com/mgechev/angular-performance-checklist) by Minko Gechev  
[JavaScript Performance](https://frontendmasters.com/courses/web-performance/) by Steve Kinney  
[Angular Performance Optimization Techniques](https://medium.com/swlh/angular-performance-optimization-techniques-5b7ca0808f8b) by Muhammad Danyal

