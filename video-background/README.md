
# video-background


This component is to be used with Angular JS 2.

#### Requires:

16/9 video compatible with web browsers
Video will be centered.

Typescript Angular2 environment

#### Usage:
	
**HTML**
	
		<video-background sound="false" min-width="1000" min-height="500" >
			<source src="videofile.mp4" type="video/mp4" />
			<source src="videofile.webm" type="video/webm" />
		</video-background>
**Code**

	import { NgModule }      from '@angular/core';
	import { BrowserModule } from '@angular/platform-	browser';
	import {VideoBackgroundModule} from 	'./videobackground/videobackground.module'
	import { AppComponent }   from './app.component';

	@NgModule({
	  imports:      [ BrowserModule, VideoBackgroundModule ],
	  declarations: [ AppComponent],
	  bootstrap:    [ AppComponent ]
	})
	export class AppModule { }

